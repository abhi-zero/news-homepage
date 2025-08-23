import { useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
