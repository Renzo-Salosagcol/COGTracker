//Styling & Component Imports


export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-secondary mb-8">The page you are looking for does not exist.</p>
      <button href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300">
        Go Back Home
      </button>
      <div className="avatar">
        test
      </div>
    </div>
  )
}