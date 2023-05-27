import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h1>{text || "namık"}</h1>
      <button className="btn" onClick={() => setIsError((p) => !p)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>hata var...</p>
      ) : (
        <div>
            <h2>Hata yok</h2>
        </div>
      )}
    </>
  );
};
export default ShortCircuit;
