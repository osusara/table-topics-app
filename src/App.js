import React from "react";
import "./App.css";
import { db } from "./firebase";
import TableTopicsComponent from "./components/TableTopicsComponent";

function App() {
  return (
    <div>
      <TableTopicsComponent db={db} />
    </div>
  );
}

export default App;
