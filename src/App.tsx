import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
          <Route path="/home" element={<Home/>}/>

      </Routes>
  );
}

export default App;
