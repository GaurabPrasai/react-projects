import { useState } from 'react'
import Header from "./components/ui/Header"
import Sidebar from "./components/ui/Sidebar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}

export default App
