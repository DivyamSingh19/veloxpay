import { drizzle } from "drizzle-orm/neon-http";
import * as dotenv from "dotenv"
import type { Config } from "drizzle-kit";

dotenv.config({
    path:".env"
})

const dbUrl = new URL(process.env.DATABASE_URL as string)

export default {
    schema:"./schema.ts",
    out:"./drizzle/migrations",
    dialect:"postgresql",
    dbCredentials:{
        host:dbUrl.hostname,
        port:parseInt(dbUrl.port||"5432"),
        user:dbUrl.hostname,
        password:dbUrl.password,
        database:dbUrl.pathname.slice(1),
        ssl:"require"
      
    }
}