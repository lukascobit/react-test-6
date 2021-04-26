import React,{ useState, useEffect, useRef, useReducer } from 'react'
import './App.css';

function App() {
  const [name,setName] = useState('')
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [windowHeight,setWindowHeight] = useState(window.innerHeight);
  const PrevName = useRef('');
  const [counter,SetCounter] = useState(0)

  function up(){
    SetCounter(prevCount => prevCount+1)
  }
  function down(){
    SetCounter(prevCount => prevCount-1)
  }

  const Resize = ()=>{
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }
  useEffect(()=>{
    window.addEventListener('resize', Resize);
    PrevName.current= name
  },[name])


  return (
    <div>
      <h1>Window width:  {windowWidth}</h1>
      <h1>Window height:  {windowHeight}</h1>
      <div>
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <h2>new: {name}</h2>
        <h2>old: {PrevName.current}</h2>
      </div>
      <div>
        <h1>{counter}</h1>
        <button onClick={up}>+</button>
        <button onClick={down}>-</button>
      </div>
    </div>
    
  );
}

export default App;
