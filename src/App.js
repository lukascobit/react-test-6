import React,{ useState } from 'react'
import './App.css';

function App() {

  const [count,setCount] = useState(4);

  function Plus(){
    setCount(count+1)
  }
  function Minus(){
    setCount(count-1)
  }

  return (
    <div>
      <button onClick={Plus}>+</button>
      <h1>{count}</h1>
      <button onClick={Minus}>-</button>

    </div>
  );
}

export default App;
