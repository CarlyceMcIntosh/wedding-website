import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="p-8 bg-blue-500 text-white text-center rounded-xl shadow-lg">
      Tailwind is working ✨
    </div>
    </>
  )
}

export default App
