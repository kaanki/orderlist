import React, { useState, useEffect, useCallback, useMemo } from "react";
import { UseFetch } from "./UseFetch";

const url = "https://fakestoreapi.com/products";

//her state veya prop değiştiğinde bileşen yeniden oluşturulur.

const calcExpensive = (data) => {
  console.log("hello");
  return data.reduce((total, item) => {
    const price = item.price;
    if (price >= total) {
      total = price;
    }
    return total;
  }, 0);
};
const Memo = () => {
  const { products } = UseFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const addCart = useCallback(() => {
    console.log(cart);
    setCart((x) => x + 1);
  }, [cart]);
  const calcExp = useMemo(() => calcExpensive(products), [products]);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((p) => p + 1)}>Click Me</button>
      <h1 style={{ marginTop: "3rem" }}>Cart:{cart}</h1>
      <h1>En Pahalı Ürün : ${calcExp}</h1>
      <BigList products={products} addCart={addCart} />
    </>
  );
};
//memoizing
const BigList = React.memo(({ products, addCart }) => {
  useEffect(() => {
    console.log("BigList çağrıldı.");
  });
  return (
    <section>
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addCart={addCart} />
        );
      })}
    </section>
  );
});

const SingleProduct = (props) => {
  useEffect(() => {
    console.log("SingleProduct çağrıldı");
  });
  let { title, price, image, addCart } = props;
  return (
    <article>
      <img src={image} alt={title} width={200} />
      <h4>{title}</h4>
      <h4>${price}</h4>
      <button onClick={addCart}>Sepete Ekle</button>
    </article>
  );
};
export default Memo;
