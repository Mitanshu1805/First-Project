import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)
    let name = "Mitanshu"
  return (
    <>
      <h1>Hello World!?</h1>
      <Button></Button>
      <div>{name}</div>
    </>
  )
}

export default App
