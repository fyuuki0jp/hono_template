import { hc } from 'hono/client'
import { useEffect, useState } from 'hono/jsx'
import { render } from 'hono/jsx/dom'
import type { User, UserAPI } from '../api/user/route'
import Button from './components/Button'

function Counter() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = hc<UserAPI>('/api/users')
        const users = await client.alluser.$get()
        console.log(users)
        if (users.ok) {
          const data = await users.json()
          console.log(data)
          setUsers(data)
        } else {
          throw 'response is not ok'
        }
      } catch (error) {
        console.log('fetch failed:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)} buttonType="primary">
        Increment
      </Button>
      {users.map((user, idx) => [
        <p key={`user_${idx.toString()}`}>{user.user_name}</p>,
      ])}
      <Button
        onClick={() => {
          const client = hc<UserAPI>('/api/users')
          client.index.$post({ json: { user_name: 'hoge' } })
        }}
        buttonType="secondary"
      >
        test
      </Button>
    </div>
  )
}

export function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

render(<App />, document.getElementById('app') as HTMLElement)
