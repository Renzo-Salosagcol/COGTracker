import './index.css'

//Import Variables & React Functions
import { COG_TRACKER_SERVER } from './config'
import { useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState<String>("Loading...")

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      const response = await fetch(COG_TRACKER_SERVER, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json()
      console.log(result)
      setData(result.message)
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 className="text-3xl text-primary font-bold underline">{data : 'Loading...'}</h1>
      <form>
        <button type="submit" className="bg-background text-primary p-5 rounded-lg cursor-pointer:hover">Click Me To Test</button>
      </form>
    </>
  )
}
