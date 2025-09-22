import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertCourseSchema, 
  insertServiceSchema, 
  insertContactSchema, 
  insertEnrollmentSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Course routes
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getAllCourses();
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await storage.getCourse(req.params.id);
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });

  app.post("/api/courses", async (req, res) => {
    try {
      const courseData = insertCourseSchema.parse(req.body);
      const course = await storage.createCourse(courseData);
      res.status(201).json(course);
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(400).json({ error: "Failed to create course" });
    }
  });

  // Service routes
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:id", async (req, res) => {
    try {
      const service = await storage.getService(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      res.status(500).json({ error: "Failed to fetch service" });
    }
  });

  app.post("/api/services", async (req, res) => {
    try {
      const serviceData = insertServiceSchema.parse(req.body);
      const service = await storage.createService(serviceData);
      res.status(201).json(service);
    } catch (error) {
      console.error("Error creating service:", error);
      res.status(400).json({ error: "Failed to create service" });
    }
  });

  // Contact form submission routes
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(contactData);
      res.status(201).json({ 
        message: "Contact form submitted successfully", 
        id: submission.id 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ error: "Failed to submit contact form" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  app.patch("/api/contact/:id/read", async (req, res) => {
    try {
      const success = await storage.markContactAsRead(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Contact submission not found" });
      }
      res.json({ message: "Contact marked as read" });
    } catch (error) {
      console.error("Error marking contact as read:", error);
      res.status(500).json({ error: "Failed to mark contact as read" });
    }
  });

  // Course enrollment routes
  app.post("/api/enrollments", async (req, res) => {
    try {
      const enrollmentData = insertEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createCourseEnrollment(enrollmentData);
      res.status(201).json({ 
        message: "Course enrollment submitted successfully", 
        enrollment 
      });
    } catch (error) {
      console.error("Error creating enrollment:", error);
      res.status(400).json({ error: "Failed to create enrollment" });
    }
  });

  app.get("/api/enrollments", async (req, res) => {
    try {
      const courseId = req.query.courseId as string;
      const enrollments = await storage.getCourseEnrollments(courseId);
      res.json(enrollments);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      res.status(500).json({ error: "Failed to fetch enrollments" });
    }
  });

  // Seed initial data
  app.post("/api/seed", async (req, res) => {
    try {
      // Seed courses
      const seedCourses = [
        {
          title: "Digital Marketing Mastery",
          description: "Comprehensive digital marketing course covering SEO, social media, and online advertising strategies",
          category: "Marketing",
          duration: "8 weeks",
          level: "Intermediate",
          price: 12000,
          features: ["SEO Optimization", "Social Media Marketing", "Google Ads", "Analytics", "Content Strategy"],
          isPopular: true
        },
        {
          title: "Programming Fundamentals",
          description: "Learn the basics of programming with hands-on projects and real-world applications",
          category: "Programming",
          duration: "12 weeks",
          level: "Beginner",
          price: 15000,
          features: ["Python Basics", "Data Structures", "Algorithms", "Projects", "Code Review"],
          isPopular: true
        },
        {
          title: "Web Development Bootcamp",
          description: "Full-stack web development course covering modern technologies and frameworks",
          category: "Web Development",
          duration: "16 weeks",
          level: "Advanced",
          price: 25000,
          features: ["HTML/CSS", "JavaScript", "React", "Node.js", "Database Design"],
          isPopular: false
        }
      ];

      const seedServices = [
        {
          title: "Custom Software Development",
          description: "Tailored software solutions for your business needs",
          category: "Development",
          features: ["Custom Applications", "Database Design", "API Development", "Testing", "Deployment"]
        },
        {
          title: "Website Design & Development",
          description: "Professional websites that drive results",
          category: "Web Services",
          features: ["Responsive Design", "SEO Optimization", "Content Management", "E-commerce", "Analytics"]
        },
        {
          title: "IT Consulting & Support",
          description: "Expert guidance for your technology infrastructure",
          category: "Consulting",
          features: ["System Analysis", "Technology Planning", "Security Assessment", "Training", "24/7 Support"]
        }
      ];

      // Create courses
      for (const courseData of seedCourses) {
        await storage.createCourse(courseData);
      }

      // Create services
      for (const serviceData of seedServices) {
        await storage.createService(serviceData);
      }

      res.json({ message: "Database seeded successfully" });
    } catch (error) {
      console.error("Error seeding database:", error);
      res.status(500).json({ error: "Failed to seed database" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
