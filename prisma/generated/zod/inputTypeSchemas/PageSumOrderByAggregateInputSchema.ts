import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PageSumOrderByAggregateInputSchema: z.ZodType<Prisma.PageSumOrderByAggregateInput> = z.object({
  page: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PageSumOrderByAggregateInputSchema;
