import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [contact] = useState(contacts.splice(0,5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

        {contact.map((element) => {
          let displayPopularity = (element.popularity).toFixed(2)

          return (
            <tr>
              <th><img src={element.pictureUrl} alt={element.pictureUrl}/></th>
              <th>{element.name}</th>
              <th>{displayPopularity}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
