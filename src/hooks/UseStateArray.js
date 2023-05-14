const { useState } = require("react");

const peopleData = [
  { id: 1, name: "Murat" },
  { id: 2, name: "Namık" },
  { id: 3, name: "Suzan" },
  { id: 4, name: "Eurat" },
];

const UseStateArray = () => {
  const [people, setPeople] = useState(peopleData);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id))
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4> {name}</h4>
            <button
              type="button"
              className="clear-button"
              onClick={() => removePerson(id)}
            >
              Sil
            </button>
          </div>
        );
      })}
      <button
              type="button"
              className="clear-button color-red"
              onClick={() => setPeople([])}
            >
              Temizle
            </button>
    </>
  );
};
export default UseStateArray;
