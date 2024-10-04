import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  user_id: z.boolean().optional(),
  user_name: z.boolean().optional(),
}).strict()

export default UserSelectSchema;
