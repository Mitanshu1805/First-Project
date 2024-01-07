import AddTwoNumbers from "./AddTwoNumbers";
import "./App.css";
import Button from "./Button";
import ShowName from "./ShowName";

function App() {
  let name = "Mitanshu";
  return (
    <>
      <h1>Hello {name}</h1>
      <Button />
      <ShowName />

      {/* num1 and num 2 are props */}
      <AddTwoNumbers num1={7} num2={3} />
    </>
  );
}

export default App;
