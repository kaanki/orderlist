import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "murat",
    age: 37,
    text: "a Message",
  });
  const [name, setName] = useState("murat");
  const [age, setAge] = useState(37);
  const [text, setText] = useState("hello");
  const changeText = () => {
    // setPerson({ ...person, text: "hello world" });
    setText('Hello World')
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{text}</h3>
      <button className=".btn" onClick={changeText}>
        Metni Değiştir
      </button>
    </>
  );
};
export default UseStateObject;
