import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [contact, setContact] = useState(contacts.splice(0,5));
  
  const addContact = () => {
    const random = contacts[Math.floor(Math.random(contacts.length))];
    console.log(random)

    setContact(previousContact => {
    return [random, ...previousContact]
    });
  }


  const sortName = () => {
     
    contact.sort((a,b) => {return a.name - b.name})

    return setContact([...contact])
  }
console.log([...contact])
  const sortPopularity = () => {
    
    const list = contact.map((item) => item)
    
    list.sort((a,b) => {return b.popularity - a.popularity})

    return setContact(list)
  }
 

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      </div>
      <table>
        <tr className="title-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contact.map((element) => {
          return (
            <tr>
              <th><img src={element.pictureUrl} alt={element.pictureUrl}/></th>
              <th>{(element.name)}</th>
              <th>{(element.popularity.toFixed(2))}</th>
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
