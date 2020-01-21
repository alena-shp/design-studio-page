import React from "react"

const MainBlock = () => {
  return (
    <div className="MainBlock">
      <section className="section-outside greeting">
        <div className="section-inside">
          <div className="greeting-header">
            <p className="greeting-header__logo">Creative Space</p>
            <div className="greeting-header__menu menu">
              <ul className="menu__links">
                <li className="menu__link">
                  <a href="0#">About us</a>
                </li>
                <li className="menu__link">
                  <a href="0#">Command</a>
                </li>
                <li className="menu__link">
                  <a href="0#">Portfolio</a>
                </li>
                <li className="menu__link">
                  <a href="0#">Services</a>
                </li>
                <li className="menu__link">
                  <a href="0#">Contacts</a>
                </li>
              </ul>
              <img className="menu__search" crs="" alt="" />
            </div>
          </div>
          <div className="greeting-content">
            <h1 className="greeting-content__title">
              Design and web development studio
            </h1>
            <h3 className="greeting-content__subtitle">
              We help companies gain a holistic image so that they adequately
              present themselves in the market
            </h3>
            <div className="greeting-content__links">
              <div className="greeting-content__links-instagram">
                <img src="" alt="" />
                <p>Subscribe to our beautiful instagram</p>
              </div>
              <div className="greeting-content__links-navigation navigation">
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
