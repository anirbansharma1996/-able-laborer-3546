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
      <NavLink to="/south">
        <h4>South</h4>
      </NavLink>
      <p>Editor's Picks</p>
      <p>Just In</p>
      <p>Astroguide</p>
    </div>
  );
}
