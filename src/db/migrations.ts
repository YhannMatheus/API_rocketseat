import { migrate } from "drizzle-orm/postgres-js/migrator"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { env } from "../env"
import chalk from 'chalk'

const connection = postgres(env.DATABASE_URL,{max: 1})

const db = drizzle(connection)

await migrate(db, { migrationsFolder: "drizzle"})

console.log(chalk.green("Migrations completed successfully!"))

await connection.end()

process.exit()