import { useState } from "react";

const UseStateCounter = () => {
  const [value, SetValue] = useState(0);
  const increaseCounter = () => {
    SetValue((p) => p + 1);
    SetValue((p) => p + 1);
    console.log(value);
  };

  const increase = () => {
    setTimeout(() => {
      SetValue((p) => p + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => SetValue(value - 1)}>-</button>
        <button onClick={() => SetValue(0)}>reset</button>
        <button onClick={increaseCounter}>+</button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter 2</h2>
        <h1>{value}</h1>
        <button onClick={increase}>+</button>
      </section>
    </>
  );
};
export default UseStateCounter;
