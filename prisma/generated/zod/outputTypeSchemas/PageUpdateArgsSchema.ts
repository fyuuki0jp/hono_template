import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageUpdateInputSchema } from '../inputTypeSchemas/PageUpdateInputSchema'
import { PageUncheckedUpdateInputSchema } from '../inputTypeSchemas/PageUncheckedUpdateInputSchema'
import { PageWhereUniqueInputSchema } from '../inputTypeSchemas/PageWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PageSelectSchema: z.ZodType<Prisma.PageSelect> = z.object({
  page_id: z.boolean().optional(),
  document_id: z.boolean().optional(),
  page: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const PageUpdateArgsSchema: z.ZodType<Prisma.PageUpdateArgs> = z.object({
  select: PageSelectSchema.optional(),
  data: z.union([ PageUpdateInputSchema,PageUncheckedUpdateInputSchema ]),
  where: PageWhereUniqueInputSchema,
}).strict() ;

export default PageUpdateArgsSchema;
