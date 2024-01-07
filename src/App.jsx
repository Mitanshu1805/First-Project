import AddTwoNumbers from "./AddTwoNumbers";
import "./App.css";
import Button from "./Button";
import ShowName from "./ShowName";

function App() {
  let name = "Mitanshu";
  return (
    <div className="bg-black h-screen text-white flex flex-col gap-5 justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold underline">Hello {name}!</h1>
      </div>

      <Button />
      <ShowName />

      <AddTwoNumbers num1={7} num2={3} />
    </div>
  );
}

export default App;
