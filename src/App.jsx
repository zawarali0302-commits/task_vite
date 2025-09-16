import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bangladesh_Flag from './components/Bangladesh_Flag'
import Costa_Rica_Flag from './components/Costa_Rica_Flag'
import France_Flag from './components/France_Flag'
import Japan_Flag from './components/Japan_Flag'
import Uae from './components/Uae'
import Panama from './components/Panama'
import Palestine from './components/Palestine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Bangladesh_Flag />
      <Costa_Rica_Flag />
      <France_Flag />
      <Japan_Flag /> */}
      {/* <Uae/> */}
      {/* <Panama/> */}
      <Palestine/>
    </>
  )
}

export default App
