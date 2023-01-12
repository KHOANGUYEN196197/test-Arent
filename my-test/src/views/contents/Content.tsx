import React, { useState } from "react";
import "./style.css";
import Web1280Column from "./web1280Column/Web1280Column";
import Web1280MyRecord from "./web1280MyRecord/Web1280MyRecord";
import Web1280TopMyPage from "./web1280TopmyPage/web1280TopmyPage";
import imgScroll from "../../asset/img/component_scroll.svg";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Content = (props: any) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 32) {
      setVisible(true);
    } else if (scrolled <= 32) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="content">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Web1280Column />}></Route>
          <Route path="/my-record" element={<Web1280MyRecord />}></Route>
          <Route path="/top-my-page" element={<Web1280TopMyPage />}></Route>
        </Routes>
      </BrowserRouter> */}
      <div className="move-top" onClick={scrollToTop}>
        <img
          style={{ display: visible ? "inline" : "none" }}
          src={imgScroll}
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
