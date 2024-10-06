import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PageCountOrderByAggregateInputSchema: z.ZodType<Prisma.PageCountOrderByAggregateInput> = z.object({
  page_id: z.lazy(() => SortOrderSchema).optional(),
  document_id: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PageCountOrderByAggregateInputSchema;
