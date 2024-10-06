import { hcAppType } from "../main"
import { useEffect, useState } from 'hono/jsx'
import { render } from 'hono/jsx/dom'

type User = {
  user_id: string,
  user_name: string
}

function Counter() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<User[]>([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const client = hcAppType('/')
          const users = await client.api.users.$get()
          if ( users.ok ) {
            const data = await users.json()
            setUsers(data)
          }
          else {
            throw "response is not ok"
          }
        }
        catch (error) {
          console.log("fetch failed:",error)
        }
        finally {
          setLoading(false);
        }
      }

      fetchData()
    },[])
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        {users.forEach((user) => {<p>{user.user_name}</p>})}
      </div>
    )
  }
  
function App() {
  return (
    <html>
      <body>
        <Counter />
      </body>
    </html>
  )
}

const root = document.getElementById('root')
if (root===null)
  console.log("error: html node is not root element")
else
  render(<App />, root)