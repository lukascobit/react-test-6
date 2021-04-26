import React,{ useState, useEffect } from 'react'
import './App.css';

function App() {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);
  const [windowHeight,setWindowHeight] = useState(window.innerHeight);

  const Resize = ()=>{
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }


  useEffect(()=>{
    window.addEventListener('resize', Resize);

    /*return()=>{
      window.addEventListener('resize', Resize);
    }*/
  },[])

  return (
    <div>
      <h1>Window width:  {windowWidth}</h1>
      <h1>Window height:  {windowHeight}</h1>
    </div>
  );
}

export default App;
