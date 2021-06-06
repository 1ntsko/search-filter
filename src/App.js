import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = () => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {users
        .filter((i) => {
          if (searchTerm === "") {
            return i;
          } else if (i.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return i;
          }
        })
        .map((i) => {
          return (
            <div className="user">
              <p>{i.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default App;
