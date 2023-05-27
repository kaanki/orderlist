import { useState, useEffect } from "react";
import FoodCreate from "./FoodCreate";
import FoodList from "./FoodList";
import axios from "axios";

const App = () => {
  const [foods, setFoods] = useState([]);
  const fetchFoods = async () => {
    const response = await axios.get("http://localhost:3001/foods");
    setFoods(response.data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const editFoodById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/foods/${id}`, {
      title: newTitle,
    });
    console.log(response);
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, ...response.data };
      }
      return food;
    });
    setFoods(updatedFoods);
  };

  const deleteFoodById = async (id) => {
    await axios.delete(`http://localhost:3001/foods/${id}`)
    const updatedFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(updatedFoods);
  };

  const createFood = async (title) => {
    // //foods.push({ id: 123, title }) length değişkeni güncellenmiyor array referansından dolayı
    // const updatedFoods = [
    //   ...foods,
    //   { id: Math.round(Math.random() * 999), title },
    // ];
    // setFoods(updatedFoods);
    const response = await axios.post("http://localhost:3001/foods", {
      title,
    });
    const updatedFoods = [...foods, response.data];
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
