import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Members table for registration
export const members = pgTable("members", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  university: text("university").notNull(),
  fieldOfStudy: text("field_of_study"),
  linkedinProfile: text("linkedin_profile"),
  areasOfInterest: text("areas_of_interest").array().notNull(),
  motivation: text("motivation").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertMemberSchema = createInsertSchema(members).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  linkedinProfile: z.string().url("Invalid LinkedIn URL").optional().or(z.literal("")),
  motivation: z.string().min(50, "Please share at least 50 characters about your motivation"),
});

export type InsertMember = z.infer<typeof insertMemberSchema>;
export type Member = typeof members.$inferSelect;

// Contact form submissions
export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  message: z.string().min(20, "Please provide a detailed message (at least 20 characters)"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Newsletter subscriptions
export const newsletters = pgTable("newsletters", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
});

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

// Events (read-only for now, can be managed later)
export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleFr: text("title_fr").notNull(),
  description: text("description").notNull(),
  descriptionFr: text("description_fr").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  locationFr: text("location_fr").notNull(),
  imageUrl: text("image_url"),
  registrationUrl: text("registration_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Event = typeof events.$inferSelect;
