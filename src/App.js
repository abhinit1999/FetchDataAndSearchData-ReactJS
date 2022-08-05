import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  useEffect(() => {
    setOutput([]);
    users.filter((val, id) => {
      if (val.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);
  const fetachData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  useEffect(() => {
    fetachData();
  }, []);
  return (
    <div className="App">
      <h1>API user Data</h1>
      <hr />
      <input
        type="text"
        placeholder="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <hr />
      {
        <table>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Phone</th>
            <th>Email</th>
            <th>CompanyName</th>
          </tr>

          {output.map((vl, id) => {
            return (
              <tr>
                <td key={id}>{vl.name}</td>
                <td key={id}>{vl.username}</td>
                <td key={id}>{vl.phone}</td>
                <td key={id}>{vl.email}</td>
                <td key={id}>{vl.company.name}</td>
              </tr>
            );
          })}
        </table>
      }
    </div>
  );
}
