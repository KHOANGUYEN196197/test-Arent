import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Web1280Column from "./views/contents/web1280Column/Web1280Column";
import Web1280MyRecord from "./views/contents/web1280MyRecord/Web1280MyRecord";
import Web1280TopMyPage from "./views/contents/web1280TopmyPage/web1280TopmyPage";
import Footer from "./views/footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Web1280Column />}></Route>
      <Route path="/my-record" element={<Web1280MyRecord />}></Route>
      <Route path="/top-my-page" element={<Web1280TopMyPage />}></Route>
    </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
