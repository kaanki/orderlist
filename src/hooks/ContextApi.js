import React, { useState, useContext } from "react";

const data = [
  { id: 1, name: "Murat" },
  { id: 2, name: "Namık" },
  { id: 3, name: "Suzan" },
  { id: 4, name: "Kemal" },
  { id: 5, name: "Eda" },
];

const PersonContext = React.createContext();
//iki bileşen- Provider, Consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Prop Drilling</h3>
      <List people={people}></List>
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>sil</button>
    </div>
  );
};

export default ContextApi;
