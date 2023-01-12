import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../asset/img/logo.svg";
import iconChallenge from "../../asset/img/icon_challenge.svg";
import iconInfo from "../../asset/img/icon_info.svg";
import iconMemo from "../../asset/img/icon_memo.svg";
import iconMenu from "../../asset/img/icon_menu.svg";
import iconClose from "../../asset/img/icon_close.svg";
import { useNavigate } from "react-router-dom";

const Header = (props: any) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const listMenu = [
    "自分の記録",
    "体重グラフ",
    "目標",
    "選択中のコース",
    "コラム一覧",
    "設定",
    "ログインする",
  ];
  const listNav = [
    {
      id: 1,
      name: "自分の記録",
      icon: iconChallenge,
    },
    {
      id: 2,
      name: "チャレンジ",
      icon: iconInfo,
    },
    {
      id: 3,
      name: "お知らせ",
      icon: iconMemo,
    },
  ];
  const navigate = useNavigate();

  const handedMenu = (isNav: any, isActive: any, typeClick: any) => {
    switch (typeClick) {
      case "自分の記録":
        navigate("/my-record", { replace: true });
        break;
      case "ログインする":
        navigate("/top-my-page", { replace: true });
        break;
      default:
        break;
    }
    if (!isNav) setIsActiveMenu(!isActive);
  };
  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="wrap-header">
        <div className="box-header">
          <div className="box-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="box-tab">
            <ul>
              {listNav.map((res: any, index: any) => {
                return (
                  <li
                    onClick={() => handedMenu(true, false, res.name)}
                    key={index}
                  >
                    <img src={res.icon} alt="" />
                    <span>{res.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="box-menu">
            <img
              onClick={() => setIsActiveMenu(!isActiveMenu)}
              src={!isActiveMenu ? iconMenu : iconClose}
              alt=""
            />
            {isActiveMenu ? (
              <div className="list-menu">
                <ul>
                  {listMenu.map((res: any, index: any) => {
                    return (
                      <li
                        key={index}
                        onClick={() => handedMenu(false, isActiveMenu, res)}
                      >
                        {res}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
