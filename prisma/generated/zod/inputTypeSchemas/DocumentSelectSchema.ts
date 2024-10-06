import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
  document_id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default DocumentSelectSchema;
