import {
  Chat,
  NotificationsNone,
  QuestionAnswer,
  QuestionAnswerRounded,
  Search,
  Window,
  ZoomOutMap,
} from "@mui/icons-material";
import "./NavbarRight.css";

export default function NavbarRight() {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="" className="nav-link">
            <Search />
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <QuestionAnswer />
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <NotificationsNone />
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <ZoomOutMap />
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            <Window />
          </a>
        </li>
      </ul>
    </div>
  );
}
