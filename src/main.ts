import { Hono } from 'hono'
import { users } from './api/user/route'
import { hc } from 'hono/client'

const app = new Hono()

app.route('/api/users', users)

const client = hc<typeof app>('')
export type Client = typeof client

export const hcAppType = (...args: Parameters<typeof hc>): Client => hc<typeof app>(...args)

export default app
