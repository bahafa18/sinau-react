import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
