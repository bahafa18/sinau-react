// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [modeSb, setModeSb] = useState(false); //Menerima data mode sidebar, expand atau srink

  return (
    <div className="App">
      <div className="container">
        <Sidebar data={modeSb} />
        <Main onSetModeSb={setModeSb} />
      </div>
    </div>
  );
}

export default App;
