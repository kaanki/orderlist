import { useState } from "react";

const useStateBasic = () => {
  // const state = useState(1)[0]
  // const setterFunction = useState(1)[1]
  // console.log(state,setterFunction);
  const [text, setText] = useState("Engin");
  const handleClick = () => {
    if (text ==="Engin") setText("Namık")
    else setText("Engin")
  }
  return (
    <>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>Click me! </button>
    </>
  );
};
export default useStateBasic;
