import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PageCountOrderByAggregateInputSchema } from './PageCountOrderByAggregateInputSchema';
import { PageAvgOrderByAggregateInputSchema } from './PageAvgOrderByAggregateInputSchema';
import { PageMaxOrderByAggregateInputSchema } from './PageMaxOrderByAggregateInputSchema';
import { PageMinOrderByAggregateInputSchema } from './PageMinOrderByAggregateInputSchema';
import { PageSumOrderByAggregateInputSchema } from './PageSumOrderByAggregateInputSchema';

export const PageOrderByWithAggregationInputSchema: z.ZodType<Prisma.PageOrderByWithAggregationInput> = z.object({
  page_id: z.lazy(() => SortOrderSchema).optional(),
  document_id: z.lazy(() => SortOrderSchema).optional(),
  page: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PageCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PageAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PageMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PageSumOrderByAggregateInputSchema).optional()
}).strict();

export default PageOrderByWithAggregationInputSchema;
