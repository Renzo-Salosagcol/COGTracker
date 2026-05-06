import './index.css'

//Import Variables & React Functions
import { COG_TRACKER_SERVER } from './config'
import { useState, useEffect, React } from 'react'

//Router Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  const [data, setData] = useState("Loading...")

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

  async function handleClick() {
    const response = await fetch(COG_TRACKER_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: 'Hello from the client!' }),
    })
    const result = await response.json()
    console.log(result)
    setData(result.message)
  }

  return (
    <>
      <h1 className="text-3xl text-primary font-bold underline">{data}</h1>
      <form>
        <button type="submit" 
          className="bg-background text-primary p-5 rounded-lg cursor-pointer:hover"
          onClick={}
        >Click Me To Test</button>
      </form>
    </>
  )
}
