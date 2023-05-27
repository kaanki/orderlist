import { useReducer, useState } from "react";
import Modal from "./Modal";

const data = [
  { id: 1, name: "Murat" },
  { id: 2, name: "Namık" },
  { id: 3, name: "Suzan" },
  { id: 4, name: "Kemal" },
  { id: 5, name: "Eda" },
];

const reducer = (state, action) => {
  if (action.type === "oge_ekle") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "öğe eklendi " + action.payload.name,
    };
  }
  if (action.type === "deger_yok") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Lütfen bir değer giriniz",
    };
  }
  throw new Error("Eşleşen eylem yok");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const UseReducer = () => {
  const [name, SetName] = useState("");
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getDate().toString(), name };
      dispatch({ type: "oge_ekle", payload: newItem });
      SetName("");
    } else {
      dispatch({ type: "deger_yok" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <button type="submit">Ekle</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};
export default UseReducer;
