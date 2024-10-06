import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const PageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PageFindUniqueOrThrowArgs> = z.object({
  select: PageSelectSchema.optional(),
  where: PageWhereUniqueInputSchema,
}).strict() ;

export default PageFindUniqueOrThrowArgsSchema;
