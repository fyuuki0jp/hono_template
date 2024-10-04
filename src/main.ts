import { Hono } from 'hono'
import { users } from './api/user/route'

const app = new Hono()

const user_api = app.route('/api/users', users)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export type UserAPI = typeof user_api

export default app
