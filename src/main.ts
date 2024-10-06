import { Hono } from 'hono'
import { users } from './api/user/route'
import { serveStatic } from 'hono/bun'

const app = new Hono()

const routes = app.route('/api/users', users)

app.get("/",serveStatic({path: 'index.html'}))

export type AppType = typeof routes
export default app
