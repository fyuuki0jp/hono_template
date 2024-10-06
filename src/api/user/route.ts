import { Hono } from "hono";
import { getUser,getAllUsers,createUser,createUserValidator,UserSchema } from "../../model/use_case/user_crud"

const app = new Hono().get("/alluser", async (c) => {
    console.log("query all user")
    const res = c.json(await getAllUsers())
    console.log(res)
    return res;
}).post("/",createUserValidator,async (c) =>{
    const data = c.req.valid('json');
    console.log('sample')
    const res = c.json(createUser(data))
    console.log(res)
    return res;
}).get("/:user_id",async (c) => {
    const id = c.req.param('user_id')
    return c.json(getUser(id))
})
export type User = UserSchema
export type UserAPI = typeof app
export const users = app
