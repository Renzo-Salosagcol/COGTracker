import { useState } from 'react'
import './index.css'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      const response = await fetch(COGTrackerServer)
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-3xl text-primary font-bold underline">App</h1>
    </>
  )
}
