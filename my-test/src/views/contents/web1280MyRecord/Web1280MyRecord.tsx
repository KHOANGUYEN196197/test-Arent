import React from "react";
import "./style.css";
import MyRecommend1 from "../../../asset/img/MyRecommend-1.jpg";
import MyRecommend2 from "../../../asset/img/MyRecommend-2.jpg";
import MyRecommend3 from "../../../asset/img/MyRecommend-3.jpg";
import mainGraph from "../../../asset/img/main_graph.svg";
import Button from "../../component/button/Button";

const Web1280MyRecord = (props: any) => {
  const listRecommend = [
    {
      id: 1,
      title: "BODY RECORD",
      sub: "自分のカラダの記録",
      img: MyRecommend1,
    },
    {
      id: 2,
      title: "MY EXERCISE",
      sub: "自分の運動の記録",
      img: MyRecommend2,
    },
    {
      id: 3,
      title: "MY DIARY",
      sub: "自分の日記",
      img: MyRecommend3,
    },
  ];
  const listBTNRecord = ["日", "週", "月", "年"];
  const listMyExercise = [
    {
      id: 1,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 2,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 3,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 4,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 5,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 6,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 7,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 8,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 9,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 10,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 11,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 12,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 13,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      id: 14,
      title: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
  ];
  const listMyDiary = [
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
    {
      id: 1,
      date: "2021.05.21",
      time: "23:25",
      sub: "   私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
    },
  ];

  return (
    <div className="content-wrap-my-record">
      <div className="my-record">
        <div className="my-record-record1">
          <div className="record1-wrap">
            {listRecommend.map((res: any, index: any) => {
              return (
                <div key={index} className="box">
                  <div className="box-wrap">
                    <div className="box-img">
                      <img src={res.img} alt="" />
                    </div>
                    <div className="record1-title">{res.title}</div>
                    <div className="record1-sub">{res.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-record-record2">
          <div className="box">
            <div className="box-top">
              <span className="body-record">BODY RECORD</span>
              <span className="date">2021.05.21</span>
            </div>
            <div className="box-mid">
              <img src={mainGraph} alt="" />
            </div>
            <div className="box-bot">
              {listBTNRecord.map((res: any, index: any) => {
                return <button key={index}>{res}</button>;
              })}
            </div>
          </div>
        </div>

        <div className="my-record-record3">
          <div className="box">
            <div className="box-top">
              <span className="body-record">MY EXERCISE</span>
              <span className="date">2021.05.21</span>
            </div>
            <div className="box-mid">
              {listMyExercise.map((res: any, index: any) => {
                return (
                  <div key={index} className="box-my-exe">
                    <div className="box-my-exe-left">
                      <div className="exe-title">{res.title}</div>
                      <div className="exe-kcal">{res.kcal}kcal</div>
                    </div>
                    <div className="box-my-exe-right">
                      <div className="exe-min">{res.time}min</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-record-record4">
          <div className="diary">
            <div className="diary-wrap">
              {listMyDiary.map((res: any, index: any) => {
                return (
                  <div key={index} className="diary-box">
                    <div className="diary-date">{res.date}</div>
                    <div className="diary-time">{res.time}</div>
                    <div className="diary-sub">{res.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Button />
      </div>
    </div>
  );
};

export default Web1280MyRecord;
