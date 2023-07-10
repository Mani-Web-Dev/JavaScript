import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const [input, setInput] = useState("");

  const [error, showError] = useState(false);

  const HandleInput = (event) => {
    showError(false);
    setInput(event.target.value);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    input === "" ? showError(true) : setList([...list, input]);
    setInput("");
    console.log("item Added to the list");
  };

  useEffect(() => {
    return () => {
      console.log("useEffect run succcessfully");
      console.log(list);
    };
  }, [list]);

  const Error = ({ text }) => (
    <p style={{ color: "red", marginTop: 10 }}>{text}</p>
  );

  return (
    <div className="passwords-list">
      <h1>Passwords List</h1>
      <form onSubmit={HandleSubmit}>
        <br />
        <input
          type="text"
          placeholder="Please enter your password"
          value={input}
          onChange={HandleInput}
        />

        {error && <Error text={"You need to enter the password"} />}

        <br />
        <br />
        <button className="button">Submit</button>
      </form>
      <br />
      <br />

      {list.length === 0 ? (
        <p className="no-data">No Passwords Created</p>
      ) : (
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
