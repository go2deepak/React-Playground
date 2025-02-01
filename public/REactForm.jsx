import React, { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };
  const handleChange = (e) => {
    console.log(e.target.value);

    setName(e.target.value);
  };
  return (
    <>
      <h1>React form</h1>

      <form>
        <h2 onSubmit={handleSubmit}>Name</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        ></input>
        <h2>Email</h2>
        <input type="email" placeholder="Enter your email"></input>
        <h2>contact</h2>
        <input type="number" placeholder="Enter your phone"></input>
        <h2>gender</h2>
        <input type="radio" value="male"></input>
        <label>male</label>
        <input type="radio" value="female"></input>
        <label>male</label>
        <h2>Hobbies</h2>
        <select>
          <option>cricket</option>
          <option>swimming</option>
          <option>music</option>
        </select>

        <h2>Password</h2>
        <input type="password" placeholder="Enter your password"></input>
        <button type="submit"> Submit</button>
      </form>
    </>
  );
};

export default App;
