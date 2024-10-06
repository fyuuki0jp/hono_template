import { Hono } from 'hono'
import { users } from './api/user/route'

const app = new Hono()

const routes = app.route('/api/users', users)

export type AppType = typeof routes
export default app
