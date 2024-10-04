import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  user_id: z.string()
})
.and(z.object({
  user_id: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  user_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default UserWhereUniqueInputSchema;
