import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

//let counter = 5 variable update hoga lekin UI me propogate nahi hoga isliye of no use

const addValue = () => {
  counter = counter + 1;
  setCounter(counter)
}

const removeValue = () => {
  setCounter(counter - 1)
}
  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
