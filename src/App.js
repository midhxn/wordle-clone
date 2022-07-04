import React,{useEffect,useState} from 'react';

function App() {

  const[solution,setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json=>{
      const randSolution = json[Math.floor(Math.random()*json.length)];
      setSolution(randSolution.word);
    })
    },[])
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      {solution && <div>Solution:{solution}</div>  }
    </div>
  )
}

export default App