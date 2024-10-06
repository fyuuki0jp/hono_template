import { z } from 'zod';

export const PageScalarFieldEnumSchema = z.enum(['page_id','document_id','page','content','createdAt','updatedAt']);

export default PageScalarFieldEnumSchema;
