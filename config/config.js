import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

// configurando o OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default openai;