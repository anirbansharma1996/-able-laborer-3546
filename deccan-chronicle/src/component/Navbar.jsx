import "../css/navbar.css";
import Routes from "./Routes";
import "../css/Dropdown.css";
import Sidebar from "./Sidebar";

export default function Navbar() {
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
            marginLeft:"25rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <input type="checkbox" />
          <h4>Auto Refresh | Coporate Insolvency Resolution Process</h4>
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
        <div>
          <h6>Tuesday, Sep 27, 2022 | Last Update : 06:01 PM IST</h6>
        </div>
      </div>
      <div className="navThree">
        <Routes />
      </div>
    </>
  );
}
