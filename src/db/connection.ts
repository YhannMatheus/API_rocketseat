import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../env';
import { users, restaurants } from './schema';

const connection = postgres(env.DATABASE_URL);

export const db = drizzle(connection, {
    schema: {
        users,
        restaurants,
    },
});