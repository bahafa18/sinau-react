import "./Navbar.css";
import NavbarLeft from "./navbarLeft/NavbarLeft";
import NavbarRight from "./navbarRight/NavbarRight";

export default function Navbar() {
  return (
    <div className="navbar navbar-white main-header navbar-expand">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
}
