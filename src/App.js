import React,{ useReducer } from 'react'
import './App.css';


function reducer(state,action){
  switch (action.type){
    case 'increment':
      return {count: state.count+1}
    case 'decrement':
      return {count: state.count-1}
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { count:0 })
  function up(){
    dispatch({type: 'increment'})
  }
  function down(){
    dispatch({type: 'decrement'})
  }
  
  return (
    <div>

      <div>
        <h1>{state.count}</h1>
        <button onClick={up}>+</button>
        <button onClick={down}>-</button>
      </div>
    </div>    
  );
}

export default App;
