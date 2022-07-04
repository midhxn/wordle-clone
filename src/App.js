import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Wordle from './components/Wordle.js'

function App() {

  const[solution,setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json=>{
      const randSolution = json[Math.floor(Math.random()*json.length)];
      setSolution(randSolution.word);
    })
    },[setSolution])
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      {solution && <Wordle solution={solution}/> }
    </div>
  )
}

export default App