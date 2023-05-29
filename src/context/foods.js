import { createContext, useState } from 'react'
import axios from 'axios'
const FoodContext = createContext()

function Provider({ children }) {
  const [foods, setFoods] = useState([])
  const fetchFoods = async () => {
    const response = await axios.get('http://localhost:3001/foods')
    setFoods(response.data)
  }
  const editFoodById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/foods/${id}`, {
      title: newTitle,
    })
    console.log(response)
    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, ...response.data }
      }
      return food
    })
    setFoods(updatedFoods)
  }

  const deleteFoodById = async (id) => {
    await axios.delete(`http://localhost:3001/foods/${id}`)
    const updatedFoods = foods.filter((food) => {
      return food.id !== id
    })
    setFoods(updatedFoods)
  }
  const createFood = async (title) => {
    const response = await axios.post('http://localhost:3001/foods', {
      title,
    })
    // console.log(response)
    const updatedFoods = [...foods, response.data]
    setFoods(updatedFoods)
  }
  const valueToShare = {
    foods,
    fetchFoods,
    deleteFoodById,
    editFoodById,
    createFood,
  }
  return (
    <FoodContext.Provider value={valueToShare}>{children}</FoodContext.Provider>
  )
}

export { Provider }
export default FoodContext

//import FoodContext, {Provider} from ...
