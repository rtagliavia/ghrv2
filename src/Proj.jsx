import React, { useState, useEffect, Component } from 'react';
import parse from "html-react-parser";
import { appendScript, removeScript } from "./LoadScritp";
import Jead from "./common/Head";
import "./style.css";
import JsonProj from "./assets/json/proj.json"; 
import ScriptTag from "react-script-tag";

import Jquery from 'jquery'

export default class Proj extends Component {


  componentDidMount(){
    // const { handle } = this.props.match.params
    // console.log(this.props.match.params)
    
  }

  render() {
    return (
      <>
        <Jead />
        <div className="loading-overlay">
          <div className="bounce-loader">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>  
        </div>
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
              <button className="hamburguer-btn hamburguer-btn-sticky-dark">
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
        <header
          id="header"
          className="side-header side-header-lg side-header-hide d-flex"
        >
          <div className="header-body">
            <div className="header-container container d-flex h-100">
              <div className="header-column flex-column justify-content-center h-100">
                <div className="header-row flex-row justify-content-center py-5">
                  <div className="header-logo">
                    <a href="/">
                      <img
                        alt="Porto"
                        width="100"
                        height="48"
                        src="../img/logo.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="header-row header-row-side-header flex-row h-100 overflow-hidden pb-5">
                  <div className="header-nav header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-links-vertical-slide align-self-center">
                    <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
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
        {/* Inicio de Cuerpo */}

        <div role="main" className="main">

          <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md ">
            <div className="container-fluid">
              <div className="row align-items-center">

                <div className="col">
                  <a href="#" className="portfolio-prev text-decoration-none d-block appear-animations" data-appear-animation="fadeInRightShorter">
                    <div className="d-flex align-items-center line-height-1">
                      <i className="fas fa-arrow-left text-dark text-4 mr-3"></i>
                      <div className="d-none d-sm-block line-height-1">
                        <span className="text-dark opacity-4 text-1">PREVIOUS PROJECT</span>
                        <h4 className="font-weight-bold text-3 mb-0">Okler Website Design</h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-md-12 align-self-center p-static order-2 text-center">
                      <div className="overflow-hidden pb-2">
                        <h1 className="text-dark font-weight-bold text-9 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="100">Porto Branding</h1>
                      </div>
                    </div>
                    <div className="col-md-12 align-self-center order-1">
                      <ul className="breadcrumb d-block text-center appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="300">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li className="active">Small Slider</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <a href="#" className="portfolio-next text-decoration-none d-block float-right appear-animation" data-appear-animation="fadeInLeftShorter">
                    <div className="d-flex align-items-center text-right line-height-1">
                      <div className="d-none d-sm-block line-height-1">
                        <span className="text-dark opacity-4 text-1">NEXT PROJECT</span>
                        <h4 className="font-weight-bold text-3 mb-0">Porto Admin Dev</h4>
                      </div>
                      <i className="fas fa-arrow-right text-dark text-4 ml-3"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="container pt-2 pb-4">

            <div className="row pb-4 mb-2">
              <div className="col-md-6 mb-4 mb-md-0 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="300">

                <div className="owl-carousel owl-theme nav-inside nav-inside-edge nav-squared nav-with-transparency nav-dark mt-3" data-plugin-options="{'items': 1, 'margin': 10, 'loop': false, 'nav': true, 'dots': false}">
                  <div>
                    <div className="img-thumbnail border-0 border-radius-0 p-0 d-block">
                      <img src="../img/projects/project-short.jpg" className="img-fluid border-radius-0" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="img-thumbnail border-0 border-radius-0 p-0 d-block">
                      <img src="../img/projects/project-short-2.jpg" className="img-fluid border-radius-0" alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="img-thumbnail border-0 border-radius-0 p-0 d-block">
                      <img src="../img/projects/project-short-3.jpg" className="img-fluid border-radius-0" alt="" />
                    </div>
                  </div>
                </div>

                <hr className="solid my-5 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="1000" />

                <div className="appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1100">
                  <strong className="text-uppercase text-1 mr-3 text-dark float-left position-relative top-2">Share</strong>
                  <ul className="social-icons">
                    <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                  </ul>
                </div>

              </div>
              <div className="col-md-6">
                <div className="overflow-hidden">
                  <h2 className="text-color-dark font-weight-normal text-4 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="600">Project <strong className="font-weight-extra-bold">Description</strong></h2>
                  
                </div>
                <p className="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">Donec volutpat nibh sit amet libero ornare non laoreet arcu luctus. Donec id arcu quis mauris euismod placerat sit amet ut metus. Sed imperdiet fringilla sem eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                <div className="overflow-hidden mt-4">
                  <h2 className="text-color-dark font-weight-normal text-4 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="1000">Project <strong className="font-weight-extra-bold">Details</strong></h2>
                </div>
                <ul className="list list-icons list-primary list-borders text-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1200">
                  <li><i className="fas fa-caret-right left-10"></i> <strong className="text-color-primary">Client:</strong> Okler Themes</li>
                  <li><i className="fas fa-caret-right left-10"></i> <strong className="text-color-primary">Date:</strong> January 2020</li>
                  <li><i className="fas fa-caret-right left-10"></i> <strong className="text-color-primary">Skills:</strong> <a href="#" className="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">DESIGN</a><a href="#" className="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">BRAND</a><a href="#" className="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">WEBSITES</a></li>
                  <li><i className="fas fa-caret-right left-10"></i> <strong className="text-color-primary">Project URL:</strong> <a href="#" target="_blank" className="text-dark">http://www.okler.net</a></li>
                </ul>
              </div>
            </div>

          </div>

        </div>


        {/* Fin de Cuerpo */}
        

    <ScriptTag src="../vendor/jquery/jquery.min.js"/>
    <ScriptTag src="../vendor/jquery.appear/jquery.appear.min.js"/>
    <ScriptTag src="../vendor/jquery.easing/jquery.easing.min.js"/>
    <ScriptTag src="../vendor/jquery.cookie/jquery.cookie.min.js"/>
    <ScriptTag src="../vendor/popper/umd/popper.min.js"/>
    <ScriptTag src="../vendor/bootstrap/js/bootstrap.min.js"/>
    <ScriptTag src="../vendor/common/common.min.js"/>
    <ScriptTag src="../vendor/jquery.validation/jquery.validate.min.js"/>
    <ScriptTag src="../vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"/>
    <ScriptTag src="../vendor/jquery.gmap/jquery.gmap.min.js"/>
    <ScriptTag src="../vendor/jquery.lazyload/jquery.lazyload.min.js"/>
    <ScriptTag src="../vendor/isotope/jquery.isotope.min.js"/>
    <ScriptTag src="../vendor/owl.carousel/owl.carousel.min.js"/>
    <ScriptTag src="../vendor/magnific-popup/jquery.magnific-popup.min.js"/>
    <ScriptTag src="../vendor/vide/jquery.vide.min.js"/>
    <ScriptTag src="../vendor/vivus/vivus.min.js"/>
    <ScriptTag src="../vendor/modernizr/modernizr.min.js"/>
    <ScriptTag src="../js/theme.js"/>
    <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.tools.min.js"/>
    <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"/>
    {/* <ScriptTag src="../js/custom.js"/> */}
    <ScriptTag src="../js/theme.init.js"/>


        
      </>
    );
  }
}
