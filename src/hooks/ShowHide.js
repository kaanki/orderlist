import { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Show/Hide</button>
      {show && <Item/>}
    </>
  );
};
const Item = () => {
    const[size, setSize] = useState(window.innerWidth)
    const  checksize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize',checksize)
        return () => {
            window.removeEventListener('resize',checksize)
        }
    },[])
    return (
        <div style={{marginTop:'2rem'}}>
            <h1>Window</h1>
            <h2>Size: {size}px</h2>
        </div>
    )
}
export default ShowHide;

