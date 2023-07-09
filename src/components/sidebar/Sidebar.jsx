import {
  BookmarkBorder,
  Campaign,
  Dashboard,
  Home,
  Summarize,
  WorkHistory,
} from "@mui/icons-material";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <div className="list-item">
          <a href="#">
            <Home className="icon" />
            <span className="desc-header">
              baha<span>fa</span>
            </span>
          </a>
        </div>
        <div className="illustrations">
          <img
            src="https://img.freepik.com/free-vector/isometric-electrician-people-composition-with-linesmen-doing-various-works-vector-illustration_1284-30075.jpg?w=826&t=st=1688911483~exp=1688912083~hmac=c39024e945b89c55980b3f740085e7c2dd4b317c749058d057a4b175e81b96ae"
            alt=""
          />
        </div>
      </div>
      <div className="menu">
        <div className="list-item">
          <a href="#">
            <Dashboard className="icon" />
            <span className="description">Dashboard</span>
          </a>
          <a href="#">
            <Campaign className="icon" />
            <span className="description">Laporan</span>
          </a>
          <a href="#">
            <BookmarkBorder className="icon" />
            <span className="description">Order</span>
          </a>
          <a href="#">
            <WorkHistory className="icon" />
            <span className="description">History</span>
          </a>
          <a href="#">
            <Summarize className="icon" />
            <span className="description">Report</span>
          </a>
        </div>
      </div>
    </div>
  );
}
