import { text, time, timestamp, uuid } from "drizzle-orm/pg-core";
import { pgTable, PgTable } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
    id:uuid("id").primaryKey().defaultRandom(),
    name:text("name").notNull(),
    email:text("email").notNull(),
    password:text("password").notNull(),
    createdAt:timestamp("createdAt").defaultNow(),
    updatedAt:timestamp("updatedAt").$onUpdateFn(()=> new Date),
});

export const userProfile= pgTable("userProfile",{
    id:uuid("id").primaryKey().defaultRandom(),
    
})
export const merchant = pgTable("merchants", {
    id:uuid("id").primaryKey().notNull(),

});

export const userTransactions = pgTable("userTransactions", {

});

export const merchantTransactions = pgTable("merchantTransactions", {

});


