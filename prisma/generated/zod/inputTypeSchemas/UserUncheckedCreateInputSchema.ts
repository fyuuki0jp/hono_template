import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  user_id: z.string().optional(),
  user_name: z.string()
}).strict();

export default UserUncheckedCreateInputSchema;
