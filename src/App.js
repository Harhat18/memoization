import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => {
    return;
    calculateObject();
  }, []);

  // const data = calculateObject();
  return (
    <div className="App">
      <Header data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}> Click</button>
      <br /> <br />
      <input>
        {" "}
        value={text} onChange={({ target }) => setText(target.value)}
      </input>
    </div>
  );
}

function calculateObject() {
  console.log("calculating....");
  for (let i = 0; i < 10000000; i++) console.log("calculating complated....");

  return { name: "harun" };
}

export default App;
