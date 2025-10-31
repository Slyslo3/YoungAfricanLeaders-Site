import {
  type Member,
  type InsertMember,
  type Contact,
  type InsertContact,
  type Newsletter,
  type InsertNewsletter,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Members
  createMember(member: InsertMember): Promise<Member>;
  getMember(id: string): Promise<Member | undefined>;
  getAllMembers(): Promise<Member[]>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;

  // Newsletter
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  getAllNewsletters(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private members: Map<string, Member>;
  private contacts: Map<string, Contact>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.members = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
  }

  // Members
  async createMember(insertMember: InsertMember): Promise<Member> {
    const id = randomUUID();
    const member: Member = {
      id,
      firstName: insertMember.firstName,
      lastName: insertMember.lastName,
      email: insertMember.email,
      phone: insertMember.phone || null,
      university: insertMember.university,
      fieldOfStudy: insertMember.fieldOfStudy || null,
      linkedinProfile: insertMember.linkedinProfile || null,
      areasOfInterest: insertMember.areasOfInterest,
      motivation: insertMember.motivation,
      createdAt: new Date(),
    };
    this.members.set(id, member);
    return member;
  }

  async getMember(id: string): Promise<Member | undefined> {
    return this.members.get(id);
  }

  async getAllMembers(): Promise<Member[]> {
    return Array.from(this.members.values());
  }

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Newsletter
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = await this.getNewsletterByEmail(insertNewsletter.email);
    if (existing) {
      throw new Error('Email already subscribed');
    }

    const id = randomUUID();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      createdAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email
    );
  }

  async getAllNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
