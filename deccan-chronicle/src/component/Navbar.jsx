import "../css/navbar.css";
import Routes from "./Routes";
import "../css/Dropdown.css";

export default function Navbar() {
  return (
    <>
      <div className="navOne">
        <div class="dropdown1">
        <h1 style={{padding:"1rem"}}>≡</h1>
        <div class="dropdown-content1">
            <div className="img_box">
            <img
            style={{width:"60%"}}
            src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg"
            alt="navtwo"
          />
            </div>
        <div className="ex1">
         <h4>Nation</h4>
          <p>Crime </p>
          <p>Current Affairs</p>
          <p>Politics</p>
          <p>In Other News</p>
          <h4>South</h4>
          <p>Editor's Picks</p>
          <p>Just In</p>
          <p>Astroguide</p>
          <h4>Nation</h4>
          <p>Crime </p>
          <p>Current Affairs</p>
          <p>Politics</p>
          <p>In Other News</p>
          <h4>South</h4>
          <p>Editor's Picks</p>
          <p>Just In</p>
          <p>Astroguide</p>
          <h4>Nation</h4>
          <p>Crime </p>
          <p>Current Affairs</p>
          <p>Politics</p>
          <p>In Other News</p>
          <h4>South</h4>
          <p>Editor's Picks</p>
          <p>Just In</p>
          <p>Astroguide</p>
            </div>
          
        </div>
      </div>   
        <h3>e-Paper |  Sunday Chronicle </h3>
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
