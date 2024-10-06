import { Hono } from "hono";
import { getUser,getAllUsers,createUser,createUserValidator,UserSchema } from "../../model/use_case/user_crud"

const app = new Hono().get("/alluser", async (c) => {
    return c.json(getAllUsers());
}).post("/",createUserValidator,async (c) =>{
    const data = c.req.valid('json');
    console.log('sample')
    return c.json(createUser(data));
}).get("/:user_id",async (c) => {
    const id = c.req.param('user_id')
    return c.json(getUser(id))
})
export type User = UserSchema
export type UserAPI = typeof app
export const users = app
