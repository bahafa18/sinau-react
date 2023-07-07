// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">
          other smentara <br />
        </div>
      </div>
    </div>
  );
}

export default App;
