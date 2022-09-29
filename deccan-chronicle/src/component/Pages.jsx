import { Route, Routes } from "react-router-dom";
import Home from "../MainData/Home";
import Nation from "../MainData/Nation";
import South from "../MainData/South";
import World from "../MainData/World";
import Entertainment from "../MainData/Entertainment";
import JobEdu from "../MainData/JobEdu";
import Sports from "../MainData/Sports";
import Technology from "../MainData/Technology";
import Lifestyle from "../MainData/Lifestyle";
import Gallery from "../MainData/Gallery";

export default function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Nation" element={<Nation />}></Route>
        <Route path="/South" element={<South />}></Route>
        <Route path="/World" element={<World />}></Route>
        <Route path="/Entertainment" element={<Entertainment />}></Route>
        <Route path="/Jobs-&-Education" element={<JobEdu />}></Route>
        <Route path="/Sports" element={<Sports />}></Route>
        <Route path="/Technology" element={<Technology />}></Route>
        <Route path="/Lifestyle" element={<Lifestyle />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}
