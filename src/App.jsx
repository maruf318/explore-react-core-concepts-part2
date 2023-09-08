import "./App.css";
import Counter from "./counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";
function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("2nd btn clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>

      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Click me3
      </button>
      <button onClick={() => addToFive(3)}>add 5 button</button>
    </>
  );
}

export default App;
