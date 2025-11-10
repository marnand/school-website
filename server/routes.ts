import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      await storage.saveContactForm(validatedData);
      
      console.log("Contact form received:", {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        childAge: validatedData.childAge,
      });

      res.status(200).json({ 
        success: true, 
        message: "Contato recebido com sucesso!" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(400).json({ 
        success: false, 
        message: "Erro ao processar formulário de contato" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
