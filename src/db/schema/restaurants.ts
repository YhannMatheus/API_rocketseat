import {text, timestamp, pgTable, pgEnum } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';
import { users } from './users';
import { relations } from 'drizzle-orm';

export const restaurants = pgTable('restaurants', {
  id: text('id').$default(() => createId()).primaryKey(),
  name: text('name').notNull(),
  managerId: text('manager_id').references(() => users.id, {onDelete: 'set null'}),
  location: text('location').notNull(),
  description: text('description').notNull(),
  phone: text('phone').notNull(),
  createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', {withTimezone: true}).notNull().defaultNow(),
});

export const restaurantsRelationships = relations(restaurants, ({one}) => {
    return { 
        manager: one (users,{
            fields: [restaurants.managerId],
            references: [users.id],
            relationName: 'restaurant_manager'
        })
    };
});