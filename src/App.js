import React,{ useState, useEffect } from 'react'
import './App.css';

function App() {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  const Resize = ()=>{
    setWindowWidth(window.innerWidth)
  }


  useEffect(()=>{
    window.addEventListener('resize', Resize)
  },[])

  return (
    <div>

      
      <h1>Window width:  {windowWidth}</h1>
    </div>
  );
}

export default App;
