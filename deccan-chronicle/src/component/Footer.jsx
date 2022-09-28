export default function Footer() {
  return (
    <div>
      <div
        style={{
          gap: "0.4rem",
          margin: "auto",
          display: "flex",
          width: "70%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <input style={{ height: "20px", width: "30%" }} type="text" />
        <button style={{ width: "5%" }}>
          <img
            width="50%"
            src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f50e.png"
            alt="search"
          />
        </button>
      </div>
      <div
        style={{
          width: "88%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <h4>HOME | </h4>
        <h4>ASIAN AGE |</h4>
        <h4>ANDHRABHOOMI |</h4>
        <h4>FINANCIAL |</h4>
        <h4>CHRONICLE |</h4>
        <h4>ABOUT US |</h4>
        <h4>CLASSFIDES |</h4>
        <h4>BOOK CLASSFIDES |</h4>
        <h4>FEEDBACK |</h4>
        <h4>CAREERS |</h4>
        <h4>E-PAPER </h4>
      </div>
      <div
        style={{
          margin: "auto",
          width: "83%",
        }}
      >
        <p>Copyright © 2015 - 2022 Deccan Chronicle.</p>
        <p>Designed, Developed & Maintained By Daksham</p>
      </div>
    </div>
  );
}
