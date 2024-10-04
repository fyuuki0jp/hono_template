import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  user_id: z.string().optional(),
  user_name: z.string()
}).strict();

export default UserCreateManyInputSchema;
