import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['document_id','title','content','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
