import { z } from 'zod';

/////////////////////////////////////////
// PAGE SCHEMA
/////////////////////////////////////////

export const PageSchema = z.object({
  page_id: z.string(),
  document_id: z.string(),
  page: z.number().int(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Page = z.infer<typeof PageSchema>

export default PageSchema;
