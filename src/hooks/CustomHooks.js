import { UseFetch } from "./UseFetch";


const url = "https://fakestoreapi.com/products";

const CustomHooks = () => {
    const {loading,products} = UseFetch(url)
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};
export default CustomHooks;
