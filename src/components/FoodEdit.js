import { useState } from "react";

const FoodEdit = ({ food, onEdit , onSave }) => {
  const [title, setTitle] = useState(food.title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(food.id, title);
    onSave();
  };
  return (
    <form className="food-edit" onSubmit={handleSubmit}>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button">Save</button>
    </form>
  );
};
export default FoodEdit;
