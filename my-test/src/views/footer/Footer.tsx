import React from "react";
import "./style.css";
const Footer = (props: any) => {
  const listFooter = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="box-footer">
          <ul>
            {listFooter.map((res: any, index: any) => {
              return <li key={index}>{res}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
