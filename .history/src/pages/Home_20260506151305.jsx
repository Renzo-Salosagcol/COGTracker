//Import Variables & React Functions
import { COG_TRACKER_SERVER } from '../config'

export default function Home() {

  async function handleClick() {
    const response = await fetch(COG_TRACKER_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ test: 'Hello from the client!' }),
    })
    const result = await response.json()
    console.log(result.redirectURL)
  }

  useEffect(() => {

  })
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to the Client Owned Goods Tracker</h1>
      <p className="text-lg text-secondary mb-8">Track and manage your client-owned goods with ease.</p>
      <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300">Get Started</button>
      <form>
        <button onClick={handleClick()} className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300 mt-4">Test API Call</button>
      </form>
    </div>
  )
}