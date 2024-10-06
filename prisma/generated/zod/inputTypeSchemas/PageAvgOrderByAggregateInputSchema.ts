import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PageAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PageAvgOrderByAggregateInput> = z.object({
  page: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PageAvgOrderByAggregateInputSchema;
