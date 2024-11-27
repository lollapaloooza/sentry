import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ButtonList} from "./components/ButtonList";

function App() {
  const [count, setCount] = useState(0)

    const buttons = [
        {
            text: 'hello1',
            onClick: () => {throw new Error("This is your first error!");}
        },
        {
            text: 'hello2',
            onClick: () => {throw new Error("This is your second error!");}
        },
        {
            text: 'hello3',
            onClick: () => {throw new Error("This is your third error!");}
        },
    ]

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
            setCount((count) => count + 1)
        }}>
          count is {count}
        </button>
        <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>
        <ButtonList buttons={buttons}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
