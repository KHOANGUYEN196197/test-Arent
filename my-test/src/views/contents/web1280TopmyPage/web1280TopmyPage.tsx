import React from "react";
import "./style.css";
import mainPhoto from "../../../asset/img/main_photo.svg";
import mainGraph from "../../../asset/img/main_graph.svg";
import iconKnife from "../../../asset/img/icon_knife.svg";
import iconCup from "../../../asset/img/icon_cup.svg";
import column1 from "../../../asset/img/column-1.jpg";
import column2 from "../../../asset/img/column-2.jpg";
import column3 from "../../../asset/img/column-3.jpg";
import column4 from "../../../asset/img/column-4.jpg";
import column5 from "../../../asset/img/column-5.jpg";
import column6 from "../../../asset/img/column-6.jpg";
import column7 from "../../../asset/img/column-7.jpg";
import column8 from "../../../asset/img/column-8.jpg";
import Button from "../../component/button/Button";

const Web1280TopMyPage = (props: any) => {
  const myProcess = [
    {
      id: 1,
      name: "Morning",
      img: iconKnife,
    },
    {
      id: 1,
      name: "Lunch",
      img: iconKnife,
    },
    {
      id: 1,
      name: "Dinner",
      img: iconKnife,
    },
    {
      id: 1,
      name: "Snack",
      img: iconCup,
    },
  ];
  const listMenu = [
    {
      id: 1,
      date: "05.21.Morning",
      img: column1,
    },
    {
      id: 2,
      date: "05.21.Lunch",
      img: column2,
    },
    {
      id: 3,
      date: "05.21.Dinner",
      img: column3,
    },
    {
      id: 4,
      date: "05.21.Snack",
      img: column4,
    },
    {
      id: 5,
      date: "05.21.Morning",
      img: column5,
    },
    {
      id: 6,
      date: "05.21.Lunch",
      img: column6,
    },
    {
      id: 7,
      date: "05.20.Dinner",
      img: column7,
    },
    {
      id: 8,
      date: "05.21.Snack",
      img: column8,
    },
  ];
  return (
    <div className="content-wrap">
      <div className="my-page">
        <div className="my-page1">
          <div className="my-page1-wrap">
            <div className="main1">
              <img src={mainPhoto} alt="" />
            </div>
            <div className="main2">
              <img src={mainGraph} alt="" />
            </div>
          </div>
        </div>
        <div className="my-page2">
          <div className="my-page2-wrap">
            {myProcess.map((res: any, index: any) => {
              return (
                <div key={index} className="box">
                  <div className="box-wrap">
                    <div className="box-img">
                      <img src={res.img} alt="" />
                    </div>
                    <div className="sub">{res.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-page3">
          <div className="box-column2">
            {listMenu.map((res: any, index: any) => {
              return (
                <div key={index} className="box-info">
                  <div className="box-img">
                    <img src={res.img} alt="" />
                    <span className="date-time">{res.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Web1280TopMyPage;
