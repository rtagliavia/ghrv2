import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TweenLite, TimelineLite, Power3 } from "gsap";

const HeaderF = () => {
  const menuItems = [
    {
      menuItem: "Inicio",
      menuToURL: "/",
    },
    {
      menuItemName: "Nosotros",
      menuItemToURL: "/",
    },
    {
      menuItemName: "Nuestras Marcas",
      menuItemToURL: "/",
    },
    {
      menuItemName: "Nuestros Proyectos",
      menuItemToURL: "/proyectos/1",
    },
    {
      menuItemName: "Contáctanos",
      menuItemToURL: "/",
    },
  ];
  /* refs for animatios */
  let sideBarMenu = useRef(null);
  let sideBarMenuButton = useRef(null);

  /* state */
  const [menuHidden, setMenuHidden] = useState(true);

  /* control functions */
  const toggleMenu = () => {
    menuHidden ? showMenu() : hideMenu();
  };
  /* animation functions */
  const showMenu = () => {
    setMenuHidden(false)
    TweenLite.from(sideBarMenu, 0.4, {
      scale: 2,
      opacity: 0,
      x: 90,
      ease: Power3.easeOut,
    });
  };
  const hideMenu = () => {
    setMenuHidden(true)
    TweenLite.to(sideBarMenu, 0.4, {
      scale: 2,
      opacity: 0,
      x: -90,
      ease: Power3.easeOut,
    });
  };
  

  /*lifecycle */
  useEffect(() => {});

  /*facade */
  const MenuItem = (props) => {
    const { menuItemName } = props;
    const { menuItemToURL } = props;
    return (
      <Link className="dropdown-item dropdown-toggle active" to={menuItemToURL}>
        {menuItemName}
      </Link>
    );
  };

  const SideBarMenu = (props) => {
    return (
      <header
        ref={(el) => (sideBarMenu = el)}
        id="header"
        className={`side-header side-header-lg ${
          menuHidden && "side-header-hide"
        } d-flex`}
      >
        <div className="header-body">
          <div className="header-container container d-flex h-100">
            <div className="header-column flex-column justify-content-center h-100">
              <div className="header-row flex-row justify-content-center py-5">
                <div className="header-logo">
                  <Link to="/">
                    <img
                      alt="Porto"
                      width="100"
                      height="48"
                      src="../img/logo.png"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-row header-row-side-header flex-row h-100 overflow-hidden pb-5">
                <div className="header-nav header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-links-vertical-slide align-self-center">
                  <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        {menuItems.map((item, key) => {
                          return (
                            <li key={key}>
                              <MenuItem
                                menuItemName={item.menuItemName}
                                menuItemToURL={item.menuItemToURL}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-row justify-content-end pb-3">
                <ul className="header-social-icons social-icons social-icons-clean">
                  <li className="social-icons-facebook">
                    <a
                      href="http://www.facebook.com/"
                      target="_blank"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-icons-twitter">
                    <a
                      href="http://www.twitter.com/"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-icons-linkedin">
                    <a
                      href="http://www.linkedin.com/"
                      target="_blank"
                      title="Linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <p className="text-1 pt-3">
                  © 2020 GHR International. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <div className="side-header-narrow-bar">
        <div className="side-header-narrow-bar-logo bg-color-dark d-flex justify-content-center">
          <a href="/" className="p-3 mb-4 mt-2">
            <img
              alt="GHR International"
              width="40"
              height="40"
              src="../img/logo-symbol-light.png"
            />
          </a>
        </div>
        <div className="side-header-narrow-bar-content d-flex align-items-center text-center h-100">
          <strong className="side-header-narrow-bar-content-vertical">
            GRH International
          </strong>
        </div>
        <div className="side-header-narrow-bar-bottom d-flex justify-content-center">
          <div className="mb-4">
            <button
              className={`hamburguer-btn hamburguer-btn-sticky-dark ${menuHidden===false && "active"}`}
              onClick={toggleMenu}
            >
              <span className="hamburguer">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="close">
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <SideBarMenu />
    </>
  );
};

export default HeaderF
