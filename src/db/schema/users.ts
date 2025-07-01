import {text, timestamp, pgTable, pgEnum } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

export const UserRoleEnum = pgEnum('user_role', ['manager', 'customer']);


export const users = pgTable('users', {
  id: text('id').$default(() => createId()).primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  role: UserRoleEnum('role').notNull().default('customer'),
  createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', {withTimezone: true}).notNull().defaultNow(),
});