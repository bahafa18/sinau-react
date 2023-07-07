import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h2 className="sideBarTitle">Dashboard</h2>
          <ul className="sideBarList">
            <li className="sideBarItem active">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
