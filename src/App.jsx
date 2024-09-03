import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Nav></Nav>
      <Header></Header>

    </>
  )
}

export default App
