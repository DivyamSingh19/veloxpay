import {drizzle} from "drizzle-orm/neon-http"
import * as dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
import * as schema from "./schema"
export interface Env {
    DATABASE_URL:string
}
export const getDB = (databaseUrl:string)=>{
    const client = neon(databaseUrl)
    return drizzle(client,{schema})
}