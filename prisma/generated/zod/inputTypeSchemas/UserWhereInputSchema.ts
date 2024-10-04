import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default UserWhereInputSchema;
