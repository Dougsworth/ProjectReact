import React,{useState} from "react";
import Tweet from "./Tweet";

function App() {
 const [users, setUsers] = useState([
   {name: "Ed", message: 'Hello there'},
   {name: "Dougy", message: 'Uwi is life changing'},
   {name: "Yeseka", message: 'I owe dougy a movie date'}
 ]);
 
  return (
    <div className="app">
    {users.map(user => (
      <Tweet name={user.name} message = {user.message} />
     ))}
    </div>
  );
}

export default App;
