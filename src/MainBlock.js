import React from "react"
import "./MainBlock.scss"

import searchIcon from "./assets/searchIcon.png"
import instagramIcon from "./assets/instagramIcon.svg"

const MainBlock = () => {
  return (
    <div className="MainBlock">
      <section className="section-outside greeting">
        <div className="section-inside">
          <div className="greeting-header">
            <span className="greeting-header__logo">
              Creative
              <br />
              Space
            </span>
            <div className="greeting-header__menu menu">
              <ul className="menu__links">
                <li>
                  <a href="0#">About us</a>
                </li>
                <li>
                  <a href="0#">Command</a>
                </li>
                <li>
                  <a href="0#">Portfolio</a>
                </li>
                <li>
                  <a href="0#">Services</a>
                </li>
                <li>
                  <a href="0#">Contacts</a>
                </li>
              </ul>
              <a className="menu__icon" href="0#">
                <img
                  src={searchIcon}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
          <div className="greeting-text">
            <p className="greeting-text__num">01.</p>
            <h1 className="greeting-text__title">
              Design and web <br />
              development studio
            </h1>
            <h3 className="greeting-text__subtitle">
              We help companies gain a holistic image so that they adequately
              present themselves in the market
            </h3>
          </div>

          <div className="greeting-links">
            <div className="greeting-links__instagram">
              <img
                src={instagramIcon}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
              <a href="0#">Subscribe to our beautiful instagram</a>
            </div>
            <div className="greeting-links__navigation navigation">
              <div className="navigation__item">
                <p className="navigation__item-num">02.</p>
                <p className="navigation__item-title">Command</p>
                <p className="navigation__item-description">
                  Who we are and how we look
                </p>
              </div>

              <div className="navigation__item">
                <p className="navigation__item-num">03.</p>
                <p className="navigation__item-title">Portfolio</p>
                <p className="navigation__item-description">
                  Projects that we are proud of
                </p>
              </div>

              <div className="navigation__item">
                <p className="navigation__item-num">04.</p>
                <p className="navigation__item-title">Services</p>
                <p className="navigation__item-description">
                  What we offer you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-outside command">
        <div className="section-inside"></div>
      </section>

      <section className="section-outside portfolio">
        <div className="section-inside"></div>
      </section>

      <section className="section-outside services">
        <div className="section-inside"></div>
      </section>

      <section className="section-outside footer">
        <div className="section-inside"></div>
      </section>
    </div>
  )
}

export default MainBlock
