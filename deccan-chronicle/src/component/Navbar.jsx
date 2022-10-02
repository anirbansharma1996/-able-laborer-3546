import "../css/navbar.css";
import Routes from "./Routes";
import "../css/Dropdown.css";
import Sidebar from "./Sidebar";
import { useRef } from "react";
export default function Navbar() {
  const buttonref = useRef(null);
  return (
    <>
      <div className="navOne">
        <div class="dropdown1">
          <h1 style={{ padding: "1rem" }}>≡</h1>
          <div class="dropdown-content1">
            <div className="img_box">
              <img
                style={{ width: "60%" }}
                src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg"
                alt="navtwo"
              />
            </div>
            <Sidebar />
          </div>
        </div>
        <h3>e-Paper | Sunday Chronicle </h3>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            marginLeft: "25rem",
          }}
        >
          <input type="checkbox" />
          <h4>Auto Refresh | Corporate Insolvency Resolution Process</h4>
        </div>
      </div>
      <div className="navTwo">
        <div>
          <img
            id="navTwo_img"
            src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg"
            alt="navtwo"
          />
        </div>
        <div ref={buttonref}>
          <h6>Monday, Oct 03, 2022 | Last Update : 03:01 PM IST</h6>
        </div>
      </div>
      <div className="navThree">
        <Routes />
      </div>
      {/* <button className="btn"
        onClick={() => {
          buttonref.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        TOP ▲ 
      </button> */}

    </>
  );
}
