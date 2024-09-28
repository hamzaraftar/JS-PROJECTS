import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-300  h-lvh'>
      <Heading/>
      <Card/>
      </div>
    </>
  )
}

export default App
