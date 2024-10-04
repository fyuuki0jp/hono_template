import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  user_id: z.string().optional(),
  user_name: z.string()
}).strict();

export default UserCreateInputSchema;
