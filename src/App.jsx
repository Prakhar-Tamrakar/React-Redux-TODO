import { useState } from "react";
import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.css";
import AddTodos from "./components/addTodos";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <AddTodos/>
    <Todos/>
    </>
  )
   
}

export default App;

