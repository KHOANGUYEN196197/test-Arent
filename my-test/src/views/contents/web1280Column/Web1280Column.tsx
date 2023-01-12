import React from "react";
import "./style.css";
import column1 from "../../../asset/img/column-1.jpg";
import column2 from "../../../asset/img/d01.jpg";
import column3 from "../../../asset/img/d02.jpg";
import column4 from "../../../asset/img/l01.jpg";
import column5 from "../../../asset/img/l02.jpg";
import column6 from "../../../asset/img/l03.jpg";
import column7 from "../../../asset/img/m01.jpg";
import column8 from "../../../asset/img/m02.jpg";
import Button from "../../component/button/Button";
const listRecommended = [
  {
    id: 1,
    title: "RECOMMENDED",
    name: "COLUMN",
    sub: "オススメ",
  },
  {
    id: 2,
    title: "RECOMMENDED",
    name: "DIET",
    sub: "ダイエット",
  },
  {
    id: 3,
    title: "RECOMMENDED",
    name: "BEAUTY",
    sub: "美容",
  },
  {
    id: 4,
    title: "RECOMMENDED",
    name: "HEALTH",
    sub: "健康",
  },
];
const listInfo = [
  {
    id: 1,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column1,
  },
  {
    id: 2,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column2,
  },
  {
    id: 3,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column3,
  },
  {
    id: 4,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column4,
  },
  {
    id: 5,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column5,
  },
  {
    id: 6,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column6,
  },
  {
    id: 7,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column7,
  },
  {
    id: 8,
    date_time: "2021.05.17 23:25",
    title:
      "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
    hashtags: ["魚料理", "和食", "DHA"],
    img: column8,
  },
];
function Web1280Column() {
  return (
    <div className="content-wrap-column">
      <div className="column">
        <div className="box-column1">
          {listRecommended.map((res: any, index: any) => {
            return (
              <div key={index} className="box-recommend">
                <div className="recommend-wrap">
                  <div className="title">{res.title}</div>
                  <div className="name">{res.name}</div>
                  <div className="sub">{res.sub}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="box-column2-col">
          {listInfo.map((res: any, index: any) => {
            return (
              <div key={index} className="box-info">
                <div className="box-img">
                  <img src={res.img} alt="" />
                  <span className="date-time">{res.date_time}</span>
                </div>
                <div className="box-title">
                  <div className="title-col2">{res.title}</div>
                  <div className="box-hastag">
                    {res.hashtags.map((res2: any, index: any) => {
                      return (
                        <div key={index} className="hastag">
                          #{res2}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Web1280Column;
