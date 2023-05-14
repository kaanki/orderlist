import { useState } from "react";
import FoodEdit from "./FoodEdit";

const FoodShow = ({ food, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    onDelete(food.id);
  };
  const handleEditClick = () => {
    setShowEdit((pre) => !pre);
  };
  const onSaveButtonClick = () => {
    console.log("true");
    setShowEdit((pre) => !pre);
  }
  let content = showEdit ? (
    <FoodEdit food={food} onEdit={onEdit} onSave ={onSaveButtonClick} />
  ) : (
    <h3>{food.title}</h3>
  );
  return (
    <div className="food-show">
      <div className="food-content">{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick} >
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
