import { configDotenv } from "dotenv";

configDotenv();

export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || '',
};