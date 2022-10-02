import "../css/NewsBox.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function JobEdu() {
  let [data, setData] = useState([]);
  let [load, setLoad] = useState(false);
  let [page, setPage] = useState(1);
  let [count, setCount] = useState(1);

  let fetchData = (p) => {
    setLoad(true);
    axios
      .get(
        `https://decan-mock-api-data.onrender.com/newsData?_limit=6&_page=${p}`
      )
      .then((res) => setData(res.data), setLoad(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  console.log(data);
  if (load) {
    return <h1 style={{ textAlign: "center" }}>...Loading</h1>;
  }
  let increment = () => {
    setPage((page) => page + 1);
    setCount(count + 1);
  };
  let decrement = () => {
    setPage((page) => page - 1);
    setCount(count - 1);
  };
  return (
    <>
      <div className="heading">
        <h3>
          <u>JOB & EDUCATION</u>
        </h3>
      </div>
      <div id="news_box">
        {data &&
          data.map((el) => (
            <div>
              <div>
                <img src={el.sunChTopsrc} alt={el.SunChroListH3} />
              </div>
              <div>
                <h3>{el.SunChroListH3}</h3>
                <p>{el.OpinionStrapList}</p>
                <h5>{el.SunChDt2}</h5>
              </div>
            </div>
          ))}
      </div>
      <div className="button">
        <button disabled={count === 1} onClick={decrement}>
          PREV
        </button>
        <button>{count}</button>
        <button disabled={count === 10} onClick={increment}>
          NEXT
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h5>Total Pages : 10 </h5>
      </div>
    </>
  );
}
