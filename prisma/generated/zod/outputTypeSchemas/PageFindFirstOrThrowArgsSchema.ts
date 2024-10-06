import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PageWhereInputSchema } from '../inputTypeSchemas/PageWhereInputSchema'
import { PageOrderByWithRelationInputSchema } from '../inputTypeSchemas/PageOrderByWithRelationInputSchema'
import { PageWhereUniqueInputSchema } from '../inputTypeSchemas/PageWhereUniqueInputSchema'
import { PageScalarFieldEnumSchema } from '../inputTypeSchemas/PageScalarFieldEnumSchema'
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

export const PageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PageFindFirstOrThrowArgs> = z.object({
  select: PageSelectSchema.optional(),
  where: PageWhereInputSchema.optional(),
  orderBy: z.union([ PageOrderByWithRelationInputSchema.array(),PageOrderByWithRelationInputSchema ]).optional(),
  cursor: PageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PageScalarFieldEnumSchema,PageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PageFindFirstOrThrowArgsSchema;
