import { useEffect, useState } from "react";

const UserEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("useEffect Çağırıldı.");
    if (value) {
    document.title = `Yeni mesajlar (${value})`
    }
  },[value]);
  console.log("bileşen işlendi");
  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue((p) => p + 1)}>
        Tıklayınız.
      </button>
    </>
  );
};
export default UserEffectBasic;
