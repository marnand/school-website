import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { contactFormSchema, contacts } from '../../shared/schema';
import { fromZodError } from 'zod-validation-error';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    // Validate request body
    const validationResult = contactFormSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      const readableError = fromZodError(validationResult.error);
      return res.status(400).json({ 
        success: false, 
        message: readableError.message 
      });
    }

    const validatedData = validationResult.data;
    
    // Connect to database
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    
    // Insert contact into database
    await db.insert(contacts).values({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      childAge: validatedData.childAge,
      message: validatedData.message,
    });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Erro ao processar sua mensagem. Tente novamente.' 
    });
  }
}
