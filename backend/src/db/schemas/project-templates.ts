// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const ProjectTemplatesSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable().optional(),
  roles: z.unknown(),
  environments: z.unknown().nullable().optional(),
  orgId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  type: z.string().nullable().optional()
});

export type TProjectTemplates = z.infer<typeof ProjectTemplatesSchema>;
export type TProjectTemplatesInsert = Omit<z.input<typeof ProjectTemplatesSchema>, TImmutableDBKeys>;
export type TProjectTemplatesUpdate = Partial<Omit<z.input<typeof ProjectTemplatesSchema>, TImmutableDBKeys>>;
