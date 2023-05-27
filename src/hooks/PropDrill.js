import { useState } from "react";

const data = [
  { id: 1, name: "Murat" },
  { id: 2, name: "Namık" },
  { id: 3, name: "Suzan" },
  { id: 4, name: "Kemal" },
  { id: 5, name: "Eda" },
];

const PropDrill = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson}></List>
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() =>removePerson(id)}>sil</button>
    </div>
  );
};
export default PropDrill;
