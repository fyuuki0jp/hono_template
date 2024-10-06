import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PageWhereInputSchema } from './PageWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PageWhereUniqueInputSchema: z.ZodType<Prisma.PageWhereUniqueInput> = z.object({
  page_id: z.string()
})
.and(z.object({
  page_id: z.string().optional(),
  AND: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageWhereInputSchema),z.lazy(() => PageWhereInputSchema).array() ]).optional(),
  document_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  page: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export default PageWhereUniqueInputSchema;
