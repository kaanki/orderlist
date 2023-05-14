import { useState } from "react";

const FoodCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div>
      <div className="food-create">
        <h3>Sipariş Listesi</h3>
        <form onSubmit={handleSubmit}>
          <input className="input" value={title} onChange={handleChange} />
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default FoodCreate;
