import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertMemberSchema,
  insertContactSchema,
  insertNewsletterSchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Member registration endpoint
  app.post("/api/members", async (req, res) => {
    try {
      const validatedData = insertMemberSchema.parse(req.body);
      const member = await storage.createMember(validatedData);
      res.status(201).json(member);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      } else {
        console.error("Error creating member:", error);
        res.status(500).json({
          error: "Failed to create member",
          message: error.message,
        });
      }
    }
  });

  // Get all members (optional - for admin use)
  app.get("/api/members", async (req, res) => {
    try {
      const members = await storage.getAllMembers();
      res.json(members);
    } catch (error: any) {
      console.error("Error fetching members:", error);
      res.status(500).json({
        error: "Failed to fetch members",
        message: error.message,
      });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({
          error: "Failed to submit contact form",
          message: error.message,
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.createNewsletter(validatedData);
      res.status(201).json(newsletter);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      } else if (error.message === 'Email already subscribed') {
        res.status(409).json({
          error: "Email already subscribed",
          message: error.message,
        });
      } else {
        console.error("Error creating newsletter subscription:", error);
        res.status(500).json({
          error: "Failed to subscribe to newsletter",
          message: error.message,
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
