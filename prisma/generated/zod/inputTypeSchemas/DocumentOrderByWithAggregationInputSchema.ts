import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DocumentCountOrderByAggregateInputSchema } from './DocumentCountOrderByAggregateInputSchema';
import { DocumentMaxOrderByAggregateInputSchema } from './DocumentMaxOrderByAggregateInputSchema';
import { DocumentMinOrderByAggregateInputSchema } from './DocumentMinOrderByAggregateInputSchema';

export const DocumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocumentOrderByWithAggregationInput> = z.object({
  document_id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DocumentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocumentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocumentMinOrderByAggregateInputSchema).optional()
}).strict();

export default DocumentOrderByWithAggregationInputSchema;
