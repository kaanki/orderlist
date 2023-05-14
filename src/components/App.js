import { useState } from "react";
import FoodCreate from "./FoodCreate";
import FoodList from "./FoodList";

const App = () => {
  const [foods, setFoods] = useState([]);
  const editFoodById = (id,newTitle) => {
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return {...food, title: newTitle}
      }
      return food
    })
    setFoods(updatedFoods)
  }
  const deleteFoodById = (id) => {
    console.log("id geldi " + id);
    const updatedFoods = foods.filter((food) => {
        return food.id !== id;
    });
    setFoods(updatedFoods);
  };
  const createFood = (title) => {
    //foods.push({ id: 123, title }) length değişkeni güncellenmiyor array referansından dolayı
    const updatedFoods = [
      ...foods,
      { id: Math.round(Math.random() * 999), title },
    ];
    setFoods(updatedFoods);
  };

  return (
    <div className="app">
      <FoodCreate onCreate={createFood} />
      <FoodList foods={foods} onDelete={deleteFoodById} onEdit={editFoodById} />
    </div>
  );
};
export default App;
