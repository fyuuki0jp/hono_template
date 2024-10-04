import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  user_id: z.string(),
  user_name: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
