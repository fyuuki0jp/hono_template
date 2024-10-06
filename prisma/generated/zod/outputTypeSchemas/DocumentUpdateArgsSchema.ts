import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentUpdateInputSchema } from '../inputTypeSchemas/DocumentUpdateInputSchema'
import { DocumentUncheckedUpdateInputSchema } from '../inputTypeSchemas/DocumentUncheckedUpdateInputSchema'
import { DocumentWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
  document_id: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const DocumentUpdateArgsSchema: z.ZodType<Prisma.DocumentUpdateArgs> = z.object({
  select: DocumentSelectSchema.optional(),
  data: z.union([ DocumentUpdateInputSchema,DocumentUncheckedUpdateInputSchema ]),
  where: DocumentWhereUniqueInputSchema,
}).strict() ;

export default DocumentUpdateArgsSchema;
