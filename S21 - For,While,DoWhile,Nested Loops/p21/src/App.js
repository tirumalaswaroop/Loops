import React, { useState } from 'react';
import './App.css';

function App() {
  let [output, setOutput] = useState('');

  let table = () => {
    let result = '';
    for (let i = 1; i <= 1000; i++) {
      if (i === 567 || i === 656 || i === 453 || i === 491 || i === 789 || i === 666) {
        continue;
      } else {
        for (let j = 1; j <= 100; j++) {
          if (j === 7 || j === 8 || j === 9 || j === 10 || j === 17 || j === 25 || j === 36 || j === 47 || j === 55 || j === 63 || j === 84) {
            continue;
          } else {
            result += `${i} * ${j} = ${i * j}\n`;
          }
        }
      }
    }
    setOutput(result);
  };

  return (
    <div className="App">
      <h1>Nested Loop</h1>
 <a href="#"
           onClick={table} >Submit <span></span> <span></span><span></span><span></span>
          </a>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
