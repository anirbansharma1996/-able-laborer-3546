import { NavLink } from "react-router-dom";

import "../css/Dropdown.css";
export default function Sidebar() {
  return (
    <div>
      <NavLink to="/">
        <h4>Home</h4>
      </NavLink>
      <p>Crime </p>
      <p>Current Affairs</p>
      <p>Politics</p>
      <p>In Other News</p>
      <NavLink to="/nation">
        <h4>Nation</h4>
      </NavLink>
      <p>Crime </p>
      <p>Current Affairs</p>
      <p>Politics</p>
      <p>In Other News</p>
      <NavLink to="/south">
        <h4>South</h4>
      </NavLink>
      <p>Telangana</p>
      <p>Andhra Pradesh</p>
      <p>Tamil Nadu</p>
      <p>Karnataka</p>
      <p>Kerala</p>
      <NavLink to="/World">
        <h4>World</h4>
      </NavLink>
      <p>Anustralia & New Zealand</p>
      <p>Neighbours</p>
      <p>Asia</p>
      <p>America</p>
      <p>Africa</p>
      <p>America</p>
      <p>Europe</p>
      <NavLink to="/entertainment">
        <h4>Entertainment</h4>
      </NavLink>
      <p>Theatre</p>
      <p>Music</p>
      <p>Bollywood</p>
      <p>Kollywood</p>
      <p>Tollywood</p>
      <p>Televison</p>
      <p>Hollywood</p>
      <NavLink to="/entertainment">
        <h4>Jobs & Education</h4>
      </NavLink>
    </div>
  );
}
