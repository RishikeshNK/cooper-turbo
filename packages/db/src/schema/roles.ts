import { relations, sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { Company } from "./companies";
import { Review } from "./reviews";

export const Role = pgTable("role", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  description: text("description"),
  companyId: varchar("companyId").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", {
    mode: "date",
    withTimezone: true,
  }).$onUpdateFn(() => sql`now()`),
});

export const RoleRelations = relations(Role, ({ one, many }) => ({
  company: one(Company, {
    fields: [Role.companyId],
    references: [Company.id],
  }),
  reviews: many(Review),
}));
