import { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "" });
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };
  return (
    <>
      <article>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Kişi Ekle</button>
        </form>
        {people.map((person) => {
          const { id, name, email,age } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};
export default MultipleInputs;
