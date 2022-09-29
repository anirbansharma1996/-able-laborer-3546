import { NavLink } from "react-router-dom";
import "../css/Dropdown.css";
export default function Routes() {
  let links = [
    { path: "/", title: "Home" },
    { path: "/Nation", title: "Nation" },
    { path: "/South", title: "South" },
    { path: "/World", title: "World" },
    { path: "/Entertainment", title: "Entertainment" },
    { path: "/Jobs-&-Education", title: "Job & Education" },
    { path: "/Sports", title: "Sports" },
    { path: "/Technology", title: "Technology" },
    { path: "/Lifestyle", title: "Lifestyle" },
    { path: "/Gallery", title: "Gallery" },
  ];

  let active = {
    textDecoration: "none",
    color: "red",
    
  };
  let notActive = {
    textDecoration: "none",
    color:"black"
  };

  return (
    <div style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-evenly" }}>
      {links.map(({ path, title }) => (
        <NavLink
          style={({ isActive }) => {
            return isActive ? active : notActive;
          }}
          key={path}
          to={path}
          end
        > 
        <b> {title}</b>
        </NavLink>
      ))}
      <div class="dropdown">
       <b><span>More...↓</span></b> 
        <div class="dropdown-content">
          <p>Business</p>
          <p>Opinion</p>
          <p>Sunday Chronicle</p>
          <p>Featured</p>
          <p>Hyderabad Chronicle</p>
          <p>Science</p>
          <p>Editor's Picks</p>
          <p>Just In</p>
          <p>Astroguide</p>
        </div>
      </div>
    </div>
  );
}
