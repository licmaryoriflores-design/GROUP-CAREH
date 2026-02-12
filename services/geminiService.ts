
import { GoogleGenAI } from "@google/genai";
import { COURSES, SERVICES } from "../constants";

const apiKey = process.env.API_KEY || "";

export const getHealthAssistantResponse = async (userMessage: string, history: {role: 'user' | 'model', text: string}[]) => {
  if (!apiKey) return "API Key no configurada.";

  const ai = new GoogleGenAI({ apiKey });
  const modelName = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Eres el Asistente Virtual de GRUPO CAREH. 
    Tu objetivo es ayudar a los usuarios (estudiantes, profesionales y público general) a encontrar información sobre nuestros servicios de enfermería y cursos de capacitación.
    
    Información de Cursos Actualizados: ${JSON.stringify(COURSES)}
    Información de Servicios de Enfermería: ${JSON.stringify(SERVICES)}
    
    Reglas:
    1. Sé amable, profesional y empático.
    2. Destaca los cursos de "Alta Demanda" como ECG, Ventilación Mecánica y Farmacología en Emergencias.
    3. Para servicios de enfermería, menciona la valoración integral, curación de heridas y administración de medicamentos.
    4. Explica que los talleres son prácticos con simulación y materiales incluidos.
    5. Siempre aclara que tus respuestas son informativas y no reemplazan una consulta médica de emergencia.
    6. Idioma: Español.
  `;

  try {
    const chat = ai.chats.create({
      model: modelName,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || "Lo siento, tuve un problema procesando tu mensaje.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error de conexión con el asistente virtual.";
  }
};
