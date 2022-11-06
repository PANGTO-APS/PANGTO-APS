/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Typical from "react-typical"

import "./Profile.css";

export default function Profile() {
  return (
  <div className="profile-container" >
      <div className="profile-parent" >
          <div className="profile-details" >
            <div className="colz" >
                <div className="colz-icon">
                <a href="https://www.facebook.com/PRangto">
                    <i className="fa fa-facebook-square" ></i>
                </a>
                <a href="https://www.linkedin.com/in/aphisit-pangto-301a551b1/">
                    <i className="fa fa-linkedin-square" ></i>
                </a>
                <a href="https://www.instagram.com/1st_ichigo/">
                    <i className="fa fa-instagram" ></i>
                </a>
                <a href="#">
                    <i className="fa fa-youtube-square" ></i>
                </a>
                </div>
            </div>
            <div className="profile-details-name" >
                <span className="primary-text" >
                    {" "}
                    初めまして、私は <span className="highlighted-text">パントー　アピシット</span>
                </span>
            </div>
            <div className="profile-details-role">
                {" "}
                <span className="primary-text">
                    <h1>
                        {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "ウェブアプリケーション 開発者 🇹🇭",
                            2000,
                            "バックエンド 開発者 💻",
                            2000,
                            "フロントエンド 開発者 🖥",
                            2000,
                            "PHP JavaScript CSS React Node.js 📱",
                            2000,
                        ]}
                        />
                    </h1>
                    <span className="profile-role-tagline" >
                        ITエンジニアとしてバックエンド、フロントエンドでウェブアプリを開発しています。
                    </span>
                </span>
            </div>
            <div className="profile-options">
                <button className="btn primary-btn">
                    {" "}
                    連絡先{" "}
                </button>
                <a href="#">
                    <button className="btn highlighted-btn">履歴書</button>
                </a>
            </div>
          </div>
          <div className="profile-picture">
              <div className="profile-picture-background">
                  
              </div>
          </div>
      </div>
  </div>
  )
}
