import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PageScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PageScalarWhereWithAggregatesInputSchema),z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PageScalarWhereWithAggregatesInputSchema),z.lazy(() => PageScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  page_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  document_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  page: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PageScalarWhereWithAggregatesInputSchema;
