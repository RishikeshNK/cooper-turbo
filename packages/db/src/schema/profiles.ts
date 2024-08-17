import { relations, sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { Review } from "./reviews";
import { User } from "./users";

export const Profile = pgTable("profile", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  firstName: varchar("firstName").notNull(),
  lastName: varchar("lastName").notNull(),
  major: varchar("major").notNull(),
  minor: varchar("minor"),
  graduationYear: integer("graduationYear").notNull(),
  graduationMonth: integer("graduationMonth").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", {
    mode: "date",
    withTimezone: true,
  }).$onUpdateFn(() => sql`now()`),
  userId: varchar("userId").notNull().unique(),
});

export const ProfileRelations = relations(Profile, ({ one, many }) => ({
  user: one(User, {
    fields: [Profile.userId],
    references: [User.id],
  }),
  reviews: many(Review),
}));
