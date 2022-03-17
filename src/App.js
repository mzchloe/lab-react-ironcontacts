import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [contact, setContact] = useState(contacts.splice(0,5));
  
  const addContact = () => {
    const random = contacts[Math.floor(Math.random(contacts.length))];

    setContact(previousContact => {
    return [random, ...previousContact]
    });
  }

  const sortPopularity = () => {
    
    const list = contact.map((item) => item)
    
    list.sort((a,b) => {return b.popularity - a.popularity})

    return setContact(list)
  }

 /*  const sortName = () => {

  } */

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      {/* <button onClick={sortName}>Add Random Contact</button> */}
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contact.map((element) => {
          let displayPopularity = (element.popularity).toFixed(2)

          return (
            <tr>
              <th><img src={element.pictureUrl} alt={element.pictureUrl}/></th>
              <th>{element.name}</th>
              <th>{displayPopularity}</th>
            <th>{element.wonOscar ? "🏆" : ""}</th>
            <th>{element.wonEmmy ? "🏆" : ""}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
