import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PageSelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
  page_id: z.boolean().optional(),
  document_id: z.boolean().optional(),
  page: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default PageSelectSchema;
