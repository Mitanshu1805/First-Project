import { useState } from "react";

const ShowName = () => {
  const [name, setName] = useState("user");

  return (
    <>
      <div>the name is {name}</div>;
      <button onClick={() => setName("Faizan")}>Change name to faizan</button>
      <button onClick={() => setName("Mitanshu")}>
        Change name to Mitanshu
      </button>
    </>
  );
};

export default ShowName;
