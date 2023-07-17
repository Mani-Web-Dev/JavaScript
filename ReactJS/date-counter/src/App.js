
import { useState } from 'react';
import './App.css';


function App() {

  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const date = new Date("25 December 2023");



  return (
    <div className="App">
      <h1>Days Counter</h1>
      <h3>Steps</h3>
      <div className="flex">
        <button onClick={() => setStep(step => step - 1)}>-</button>
        <input type="text" value={step} />
        <button onClick={() => setStep(step => step + 1)}>+</button>
      </div>

      <br />
      <br />

      <h3>Count</h3>
      <div className="flex">
        <button onClick={() => setCount(count => count - step)}>-</button>
        <input type="text" value={count} />
        <button onClick={() => setCount(count => count + step)}>+</button>
      </div>



      <h3>Today</h3>
      <p>
        <span>
          {
            count === 0 ? "It is today" : count > 0 ? `${count} days from today` : `${count} days ago from the main date`
          }
        </span>

      </p>
      <p>{date.toLocaleString()}</p>
    </div>
  );
}

export default App;
