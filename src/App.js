import React,{ useState } from 'react'
import './App.css';

function App() {

  const [type,setType] = useState('first');


  return (
    <div>
      <button onClick={()=> setType('first')}>First</button>
      <button onClick={()=> setType('second')}>Second</button>
      <button onClick={()=> setType('third')}>Third</button>
      <h1>{type}</h1>
      
    </div>
  );
}

export default App;
