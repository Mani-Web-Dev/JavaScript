
























































































































































































































































































































































































































































































































































































































































































































































import './App.css';

import { Counter } from './components/counter/Counter';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSIjNzY0QUJDIj48cGF0aCBkPSJNNjUuNiA2NS40YzIuOS0uMyA1LjEtMi44IDUtNS44LS4xLTMtMi42LTUuNC01LjYtNS40aC0uMmMtMy4xLjEtNS41IDIuNy01LjQgNS44LjEgMS41LjcgMi44IDEuNiAzLjctMy40IDYuNy04LjYgMTEuNi0xNi40IDE1LjctNS4zIDIuOC0xMC44IDMuOC0xNi4zIDMuMS00LjUtLjYtOC0yLjYtMTAuMi01LjktMy4yLTQuOS0zLjUtMTAuMi0uOC0xNS41IDEuOS0zLjggNC45LTYuNiA2LjgtOC0uNC0xLjMtMS0zLjUtMS4zLTUuMS0xNC41IDEwLjUtMTMgMjQuNy04LjYgMzEuNCAzLjMgNSAxMCA4LjEgMTcuNCA4LjEgMiAwIDQtLjIgNi0uNyAxMi44LTIuNSAyMi41LTEwLjEgMjgtMjEuNHoiLz48cGF0aCBkPSJNODMuMiA1M2MtNy42LTguOS0xOC44LTEzLjgtMzEuNi0xMy44SDUwYy0uOS0xLjgtMi44LTMtNC45LTNoLS4yYy0zLjEuMS01LjUgMi43LTUuNCA1LjguMSAzIDIuNiA1LjQgNS42IDUuNGguMmMyLjItLjEgNC4xLTEuNSA0LjktMy40SDUyYzcuNiAwIDE0LjggMi4yIDIxLjMgNi41IDUgMy4zIDguNiA3LjYgMTAuNiAxMi44IDEuNyA0LjIgMS42IDguMy0uMiAxMS44LTIuOCA1LjMtNy41IDguMi0xMy43IDguMi00IDAtNy44LTEuMi05LjgtMi4xLTEuMSAxLTMuMSAyLjYtNC41IDMuNiA0LjMgMiA4LjcgMy4xIDEyLjkgMy4xIDkuNiAwIDE2LjctNS4zIDE5LjQtMTAuNiAyLjktNS44IDIuNy0xNS44LTQuOC0yNC4zeiIvPjxwYXRoIGQ9Ik0zMi40IDY3LjFjLjEgMyAyLjYgNS40IDUuNiA1LjRoLjJjMy4xLS4xIDUuNS0yLjcgNS40LTUuOC0uMS0zLTIuNi01LjQtNS42LTUuNGgtLjJjLS4yIDAtLjUgMC0uNy4xLTQuMS02LjgtNS44LTE0LjItNS4yLTIyLjIuNC02IDIuNC0xMS4yIDUuOS0xNS41IDIuOS0zLjcgOC41LTUuNSAxMi4zLTUuNiAxMC42LS4yIDE1LjEgMTMgMTUuNCAxOC4zIDEuMy4zIDMuNSAxIDUgMS41LTEuMi0xNi4yLTExLjItMjQuNi0yMC44LTI0LjYtOSAwLTE3LjMgNi41LTIwLjYgMTYuMS00LjYgMTIuOC0xLjYgMjUuMSA0IDM0LjgtLjUuNy0uOCAxLjgtLjcgMi45eiIvPjwvZz48L3N2Zz4K"} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
