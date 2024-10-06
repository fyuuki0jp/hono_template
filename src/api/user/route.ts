import { Hono } from "hono";
import { getUser,getAllUsers,createUser,createUserValidator } from "../../model/use_case/user_crud"

const app = new Hono()

app.get("/", async (c) => {
    return c.json(getAllUsers());
})

app.post("/",createUserValidator,async (c) =>{
    const data = c.req.valid('json');
    return c.json(createUser(data));
})

app.get("/:user_id",async (c) => {
    const id = c.req.param('user_id')
    return c.json(getUser(id))
})

export const users = app
