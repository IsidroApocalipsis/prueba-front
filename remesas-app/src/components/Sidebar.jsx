import {
  FaHome,
  FaCog,
  FaChartBar,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import "./../styles/sideBar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle"></div>
      </div>

      <div className="sidebar-menu">
        <button className="sidebar-btn active">
          <FaHome />
        </button>

        <button className="sidebar-btn">
          <FaChartBar />
        </button>

        <button className="sidebar-btn">
          <FaBell />
        </button>

        <button className="sidebar-btn">
          <FaCog />
        </button>
      </div>

      <div className="sidebar-user">
        <FaUserCircle />
      </div>
    </div>
  );
}

export default Sidebar;
