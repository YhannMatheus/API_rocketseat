import type { Config } from 'drizzle-kit';
import { env } from './src/env';

export default{
    schema : './src/db/schema/indesx.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
    }
} satisfies Config;