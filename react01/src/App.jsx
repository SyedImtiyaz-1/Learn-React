import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onClickCounter}>Counter {count}</button>
    </div>
  )
}

export default App


// import {useState} from "react"; <-- hook