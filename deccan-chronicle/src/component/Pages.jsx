import { Route, Routes } from "react-router-dom";
import Home from "../MainData/Home";

export default function Pages() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Nation" element={<>Nation</>}></Route>
        <Route path="/South" element={<>South</>}></Route>
        <Route path="/World" element={<>World</>}></Route>
        <Route path="/Entertainment" element={<>Entertainment</>}></Route>
        <Route path="/Jobs-&-Education" element={<>Education</>}></Route>
        <Route path="/Sports" element={<>Sports</>}></Route>
        <Route path="/Technology" element={<>Technology</>}></Route>
        <Route path="/Lifestyle" element={<>Lifestyle</>}></Route>
        <Route path="/Gallery" element={<>Gallery</>}></Route>
      </Routes>
    </div>
  );
}
