import React, { useState } from "react";

async function fetchCat() {
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const cat = await res.json();
    const href = cat[0].url;
    return href;
  } catch (e) {}
}

const AddPicture = () => {
  const [ImgList, SetImgList] = useState([]);

  const AddPictureClicked = async () => {
    const newUrl =await fetchCat();
    SetImgList([...ImgList,newUrl ]);
  };
  return (
    <>
      <button className="add-btn" onClick={AddPictureClicked}>
        Resim ekle
      </button>
      <section className="picture-container">
        {ImgList.map((url) => {
          return (
            <div className="images">
              <img src={url} width="200px" height="200px" />
              <div className="emoji">👍</div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AddPicture;
