import { DensityMedium } from "@mui/icons-material";
import "./NavbarLeft.css";

export default function NavbarLeft() {
  return (
    <ul className="navbar-nav">
      <li className="navbar-item">
        <a href="#" className="nav-link">
          <DensityMedium />
        </a>
      </li>
      <li className="navbar-item d-sm-inline-block">
        <a href="#" className="nav-link">
          Home
        </a>
      </li>
      <li className="navbar-item d-sm-inline-block">
        <a href="#" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}
