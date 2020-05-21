import React, { Component } from "react";

export default class HeaderF extends Component {
  render() {
    return (
      <>
        <div class="side-header-narrow-bar">
          <div class="side-header-narrow-bar-logo bg-color-dark d-flex justify-content-center">
            <a href="/" class="p-3 mb-4 mt-2">
              <img
                alt="Porto"
                width="40"
                height="40"
                src="img/logo-symbol-light.png"
              />
            </a>
          </div>
          <div class="side-header-narrow-bar-content d-flex align-items-center text-center h-100">
            <strong class="side-header-narrow-bar-content-vertical">
              GHR International
            </strong>
          </div>
          <div class="side-header-narrow-bar-bottom d-flex justify-content-center">
            <div class="mb-4">
              <button class="hamburguer-btn hamburguer-btn-sticky-dark">
                <span class="hamburguer">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span class="close">
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <header
          id="header"
          class="side-header side-header-lg side-header-hide d-flex"
        >
          <div class="header-body">
            <div class="header-container container d-flex h-100">
              <div class="header-column flex-column justify-content-center h-100">
                <div class="header-row flex-row justify-content-center py-5">
                  <div class="header-logo">
                    <a href="index.html">
                      <img
                        alt="Porto"
                        width="100"
                        height="48"
                        src="img/logo.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="header-row header-row-side-header flex-row h-100 overflow-hidden pb-5">
                  <div class="header-nav header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-links-vertical-slide align-self-center">
                    <div class="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
                      <nav className="collapse">
                        <ul className="nav nav-pills" id="mainNav">
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Inicio
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Nosotros
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Nuestras marcas
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Nuestros proyectos
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Contáctanos
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="header-row justify-content-end pb-3">
                  <ul class="header-social-icons social-icons social-icons-clean">
                    <li class="social-icons-facebook">
                      <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        title="Facebook"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="social-icons-twitter">
                      <a
                        href="http://www.twitter.com/"
                        target="_blank"
                        title="Twitter"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="social-icons-linkedin">
                      <a
                        href="http://www.linkedin.com/"
                        target="_blank"
                        title="Linkedin"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                  <p class="text-1 pt-3">
                    © 2020 GHR International. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
