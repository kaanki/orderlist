import { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log(size);

  return (
    <>
      <h1>window</h1>
      <h1>{size}</h1>
    </>
  );
};
export default UseEffectCleanup;
