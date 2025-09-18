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
      <div className="grid grid-cols-3 place-items-center">
        <div>
          <h1 className='font-bold underline'>Flag of Bangladesh</h1>
          <Bangladesh_Flag />
        </div>
        
        <div>
          <h1 className='font-bold underline'>Flag of Costa Rica</h1>
          <Costa_Rica_Flag />
        </div>

        <div>
          <h1 className='font-bold underline'>Flag of France</h1>
          <France_Flag />
        </div>

        <div>
          <h1 className='font-bold underline'>Flag of Japan</h1>
          <Japan_Flag />
        </div>

        <div>
          <h1 className='font-bold underline'>Flag of UAE</h1>
          <Uae />
        </div>

        <div>
          <h1 className='font-bold underline'>Flag of Panama</h1>
          <Panama />
        </div>

        <div>
          <h1 className='font-bold underline'>Flag of Palestine</h1>
          <Palestine />
        </div>
      </div>
    </>
  )
}

export default App
