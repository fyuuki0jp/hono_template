import { UserAPI,User } from "../api/user/route"
import { hc } from "hono/client"
import { useEffect, useState } from 'hono/jsx'
import { render } from "hono/jsx/dom";

function Counter() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = hc<UserAPI>('http://192.168.247.2:3000/api/users')
        const users = await client.alluser.$get()
        console.log(users)
        if (users.ok) {
          const data = await users.json()
          console.log(data)
          // setUsers(data)
        }
        else {
          throw "response is not ok"
        }
      }
      catch (error) {
        console.log("fetch failed:", error)
      }
      finally {
        setLoading(false);
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => {
        const client = hc<UserAPI>('/api/users')
        client.index.$post({ json: { user_name: "hoge" } })
      }}>test</button>
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

render(<App/>,document.getElementById("app")!);