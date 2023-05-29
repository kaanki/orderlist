import { useState, useContext } from "react";
import FoodEdit from "./FoodEdit";
import FoodContext from "@/context/foods";

const FoodShow = ({ food }) => {
  const { deleteFoodById } = useContext(FoodContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    deleteFoodById(food.id);
  };
  const handleEditClick = () => {
    setShowEdit((pre) => !pre);
  };
  const onSubmit = (id, newTitle) => {
    setShowEdit(false);
  };
  let content = showEdit ? (
    <FoodEdit food={food} onSubmit={onSubmit} />
  ) : (
    <h3>{food.title}</h3>
  );
  return (
    <div className="food-show">
      <div
        className="food-background"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/${food.id}/300/200)`,
        }}
      ></div>
      <div className="food-content">{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default FoodShow;
