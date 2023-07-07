import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            baha<span>fa</span>
          </span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topBarBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topBarBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/17137766/pexels-photo-17137766/free-photo-of-laut-air-pelayaran-perahu-layar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
