import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  user_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserCountOrderByAggregateInputSchema;
