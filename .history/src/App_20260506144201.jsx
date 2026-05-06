import './index.css'

//Import Variables & React Functions
import { COG_TRACKER_SERVER } from './config'
import { useState, useEffect, React } from 'react'

//Router Imports
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'

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
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}
