import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const queryClient = postgres(process.env.DATABASE_URL!); // DATABASE_URL is an environment variable that contains the connection string to the database
const db = drizzle(queryClient, { schema }); // queryClient is a postgres-js client, schema is the schema object we just imported from db/schema.ts

export { db }; // Export the db object so we can use it in other parts of our application
