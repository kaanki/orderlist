import FoodShow from "./FoodShow";

const FoodList = ({ foods, onDelete, onEdit }) => {
  const renderedFoods = foods.map((food) => {
    return <FoodShow key={food.id} food={food} onDelete={onDelete} onEdit = {onEdit}/>;
  });
  return <div className="food-list">{renderedFoods}</div>;
};
export default FoodList;
