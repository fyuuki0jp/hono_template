import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['user_id','user_name']);

export default UserScalarFieldEnumSchema;
