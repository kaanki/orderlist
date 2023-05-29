import { useReducer, useState } from "react";
import Modal from "./Modal";
import {reducer} from "./reducer"

const data = [
  { id: 1, name: "Murat" },
  { id: 2, name: "Namık" },
  { id: 3, name: "Suzan" },
  { id: 4, name: "Kemal" },
  { id: 5, name: "Eda" },
];


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

  const closeModal = () => {
    dispatch({ type: "MODAL_KAPAT" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
            <button
              onClick={() =>
                dispatch({ type: "OGEYI_KALDIR", payload: person.id })
              }
            >
              Kaldır
            </button>
          </div>
        );
      })}
    </>
  );
};
export default UseReducer;
