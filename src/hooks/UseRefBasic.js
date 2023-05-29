import { useEffect, useRef } from "react";

const UseRefBasic = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(refContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current.focus());
  });
  console.log(refContainer);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};
export default UseRefBasic;
