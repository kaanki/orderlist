import { useContext, useState } from "react";
import FoodContext from "@/context/foods";

const FoodEdit = ({ food, onSubmit }) => {
  const { editFoodById } = useContext(FoodContext);
  const [title, setTitle] = useState(food.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editFoodById(food.id, title);
  };
  return (
    <form className="food-edit" onSubmit={handleSubmit}>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button">Save</button>
    </form>
  );
};
export default FoodEdit;
