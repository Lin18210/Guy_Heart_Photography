import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import HomePage from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
