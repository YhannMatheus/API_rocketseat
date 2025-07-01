import type { Config } from 'drizzle-kit';

export default{
    schema : './src/db/schema/indesx.ts',
    out: './drizzle',
    dialect: 'postgresql'
    
} satisfies Config;