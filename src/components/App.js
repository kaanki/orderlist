import { useEffect, useContext } from "react";
import FoodCreate from "./FoodCreate";
import FoodList from "./FoodList";
import FoodContext from "@/context/foods";

const App = () => {
  const { fetchFoods } = useContext(FoodContext);
  useEffect(() => {
    fetchFoods();
  }, []);
  //BUNU YAPMA
  //FETCHFOODS();

  return (
    <div className="app">
      <FoodCreate />
      <FoodList />
    </div>
  );
};
export default App;
