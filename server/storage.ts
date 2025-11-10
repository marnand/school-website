import { type User, type InsertUser, type ContactForm } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactForm(form: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactForms: ContactForm[];

  constructor() {
    this.users = new Map();
    this.contactForms = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactForm(form: ContactForm): Promise<void> {
    this.contactForms.push(form);
  }
}

export const storage = new MemStorage();
