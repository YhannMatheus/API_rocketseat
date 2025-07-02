import type { Config } from 'drizzle-kit';

export default{
    schema : './src/db/schema/indesx.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://docker:docker@localhost:5432/solid',
    }
} satisfies Config;