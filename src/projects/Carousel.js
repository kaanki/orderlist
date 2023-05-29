import React, { useState, useEffect } from "react";

async function fetchCat() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const cat = await res.json();
    const href = cat[0].url;
    console.log(cat);
    return href;
  } catch (e) {}
}

const carousel = () => {
  const [cat, setCat] = useState([]);
  const [current, setCurrent] = useState(0)
  const PreviousBtnClicked = () => {
    current === 0 ? setCurrent(2) : setCurrent((p) => p-1) 
    console.log("içinde current" + current);
  };
  console.log("current" +current);
  const NextBtnClicked = () => {
    current === 2 ? setCurrent(0) : setCurrent((p) => p+1) 
  };
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCat();
      const resp1 = await fetchCat();
      const resp2 = await fetchCat();
      console.log(resp);
      setCat([resp, resp1, resp2]);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="main-container">
        <a href="#" className="previous round" onClick={PreviousBtnClicked}>
          &#8249;
        </a>
        <div className="image-container">
          <img src={cat[current]} alt="cat"  height="200px" className="carousel active" />
        </div>
        <a href="#" className="next round" onClick={NextBtnClicked}>
          &#8250;
        </a>
      </div>
    </>
  );
};

export default carousel;
