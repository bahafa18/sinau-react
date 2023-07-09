// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
