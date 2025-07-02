import {faker} from '@faker-js/faker';
import {users, restaurants} from './schema/indesx';
import {db} from './connection';
import chalk from 'chalk';    


await db.delete(users);
await db.delete(restaurants);

console.log(chalk.green("✅ : Banco de dados limpo com sucesso!"));

await db.insert(users).values([
    {
        username: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        role: 'customer',
    },
    {
        username: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        role: 'manager',
    },
]);

console.log(chalk.green("✅ : Usuários criados com sucesso!"));

const insertedManagers = await db.insert(users).values([{
    username: "yhann",
    email: "yhann@gmail.com",
    phone: "11999999999",
    role: "manager",
}]).returning({ id: users.id });

const managerId = insertedManagers?.[0]?.id;

if (!managerId) {
    throw new Error("Manager ID not returned from database insert.");
}

console.log(chalk.green("✅ : Manager criado com sucesso!"));

await db.insert(restaurants).values([
    {
        name: faker.company.name(),
        location: faker.location.city(),
        description: faker.lorem.paragraph(),
        phone: faker.phone.number(),
        managerId: managerId,
    },
]);

console.log(chalk.green("✅ : Restaurante criado com sucesso!"));

console.log(chalk.blue("✨ : Banco de dados seedado com sucesso!"));