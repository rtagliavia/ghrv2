import React, { useState, useEffect, useRef, Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { appendScript, removeScript } from "./LoadScritp";
import Jead from "./common/Head";
import "./style.css";
import ProjectData from "./assets/json/projectData.js";
import ScriptTag from "react-script-tag";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Animated } from "react-animated-css";
import { TweenLite, TimelineLite } from "gsap";

const Proj = (props) => {
  const projectId = parseInt(props.match.params.id) - 1;
  let currentProject = ProjectData[projectId];
  let nextProjectId = projectId === ProjectData.length - 1 ? 0 : projectId + 1;
  let prevProjectId = projectId == 0 ? ProjectData.length - 1 : projectId - 1;
  let nextProject = ProjectData[nextProjectId];
  let prevProject = ProjectData[prevProjectId];



  useEffect(() => {});

  const ProjectHeader = () => {
    return (
      <section className="page-header page-header-modern bg-color-light-scale-1 page-header-md ">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <Animated
                animationIn="fadeInRight"
                animationOut="fadeOut"
                animationInDelay={0.3}
              >
                <Link
                  to={`/proyectos/${prevProjectId + 1}`}
                  className="portfolio-prev text-decoration-none d-block animate__animated animate__fadeInRight"
                  data-appear-animation="fadeInRightShorter"
                >
                  <div className="d-flex align-items-center line-height-1">
                    <i className="fas fa-arrow-left text-dark text-4 mr-3"></i>
                    <div className="d-none d-sm-block line-height-1">
                      <span className="text-dark opacity-4 text-1">
                        PREVIOUS PROJECT
                      </span>
                      <h4 className="font-weight-bold text-3 mb-0">
                        {prevProject.projectName}
                      </h4>
                    </div>
                  </div>
                </Link>
              </Animated>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-md-12 align-self-center p-static order-2 text-center">
                  <Animated animationIn="fadeInUp" animationOut="fadeOut">
                    <div className="overflow-hidden pb-2">
                      <h1 className="text-dark font-weight-bold text-9">
                        {currentProject.projectName}
                      </h1>
                    </div>
                  </Animated>
                </div>

                <div className="col-md-12 align-self-center order-1">
                  <Animated animationIn="fadeIn" animationOut="fadeOut">
                    <ul
                      className="breadcrumb d-block text-center  "
                      data-appear-animation="fadeIn"
                      data-appear-animation-delay="300"
                    >
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li className="active">Small Slider</li>
                    </ul>
                  </Animated>
                </div>
              </div>
            </div>

            <div className="col">
              <Animated
                animationIn="fadeInLeft"
                animationOut="fadeOut"
                animationInDelay={0.3}
              >
                <Link
                  to={`/proyectos/${nextProjectId + 1}`}
                  className="portfolio-next text-decoration-none d-block float-right  "
                  data-appear-animation="fadeInLeftShorter"
                >
                  <div className="d-flex align-items-center text-right line-height-1">
                    <div className="d-none d-sm-block line-height-1">
                      <span className="text-dark opacity-4 text-1">
                        NEXT PROJECT
                      </span>
                      <h4 className="font-weight-bold text-3 mb-0">
                        {nextProject.projectName}
                      </h4>
                    </div>
                    <i className="fas fa-arrow-right text-dark text-4 ml-3"></i>
                  </div>
                </Link>
              </Animated>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ImageThumbnail = (props) => {
    const image = props.image || "notfound404.jpg";
    console.log(`image ${image}`);
    return (
      <div>
        <div className="img-thumbnail border-0 border-radius-0 p-0 d-block">
          <img src={image} className="img-fluid border-radius-0" alt="" />
        </div>
      </div>
    );
  };
  return (
    <>
      <Jead />
      {/* Inicio de Cuerpo */}

      <div role="main" className="main">
        <ProjectHeader />

        <div className="container pt-2 pb-4">
          <div className="row pb-4 mb-2">
            <div
              className="col-md-6 mb-4 mb-md-0  "
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay="300"
            >
              <Animated
                animationIn="fadeInUp"
                animationInDelay={0.3}
                animationOut="fadeOut"
              >
                <OwlCarousel
                  items={1}
                  className="owl-theme nav-inside nav-inside-edge nav-squared nav-with-transparency nav-dark mt-3"
                  loop
                  nav
                  margin={10}
                >
                  {/*<div
                className="owl-carousel owl-theme nav-inside nav-inside-edge nav-squared nav-with-transparency nav-dark mt-3"
                data-plugin-options="{'items': 1, 'margin': 10, 'loop': false, 'nav': true, 'dots': false}"
              >*/}
                  {currentProject.ProjectThumbnails.map((image, key) => {
                    return <ImageThumbnail image={image} key={key} />;
                  })}
                  {/*</div>*/}
                </OwlCarousel>
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationInDelay={0.4}
                animationOut="fadeOut"
              >
                <hr
                  className="solid my-5  "
                  data-appear-animation="fadeIn"
                  data-appear-animation-delay="1000"
                />
              </Animated>
              <Animated
                animationIn="fadeInUp"
                animationInDelay={0.5}
                animationOut="fadeOut"
              >
                <div
                  className=""
                  data-appear-animation="fadeInRightShorter"
                  data-appear-animation-delay="1100"
                >
                  <strong className="text-uppercase text-1 mr-3 text-dark float-left position-relative top-2">
                    Share
                  </strong>
                  <ul className="social-icons">
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
                </div>
              </Animated>
            </div>
            <div className="col-md-6">
              <div className="overflow-hidden">
                <Animated
                  animationIn="fadeInUp"
                  animationOut="fadeOut"
                  animationInDelay={0.4}
                >
                  <h2
                    className="text-color-dark font-weight-normal text-4 mb-0  "
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="600"
                  >
                    Project {` ${currentProject.projectName} `}
                    <strong className="font-weight-extra-bold">
                      Description
                    </strong>
                  </h2>
                </Animated>
              </div>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                animationInDelay={0.6}
              >
                <p
                  className=""
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="800"
                >
                  {` ${currentProject.projectDescription} `}
                </p>
              </Animated>
              <div className="overflow-hidden mt-4">
                <Animated
                  animationIn="fadeInUp"
                  animationOut="fadeOut"
                  animationInDelay={0.8}
                >
                  <h2
                    className="text-color-dark font-weight-normal text-4 mb-0  "
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="1000"
                  >
                    Project{` ${currentProject.projectName} `}
                    <strong className="font-weight-extra-bold">Details</strong>
                  </h2>
                </Animated>
              </div>
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                animationInDelay={1}
              >
                <ul
                  className="list list-icons list-primary list-borders text-2  "
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="1200"
                >
                  <li>
                    <i className="fas fa-caret-right left-10"></i>{" "}
                    <strong className="text-color-primary">Client:</strong>{" "}
                    {` ${currentProject.projectClientName} `}
                  </li>
                  <li>
                    <i className="fas fa-caret-right left-10"></i>{" "}
                    <strong className="text-color-primary">Date:</strong>{" "}
                    {` ${currentProject.projectDate} `}
                  </li>
                  <li>
                    <i className="fas fa-caret-right left-10"></i>{" "}
                    <strong className="text-color-primary">Skills:</strong>{" "}
                    {currentProject.projectSkillsUsed.map((skill, key) => {
                      return (
                        <a
                          href="#"
                          className="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1"
                          key={key}
                        >
                          {skill}
                        </a>
                      );
                    })}
                  </li>
                  <li>
                    <i className="fas fa-caret-right left-10"></i>{" "}
                    <strong className="text-color-primary">Project URL:</strong>{" "}
                    <a
                      href={currentProject.projectURL}
                      target="_blank"
                      className="text-dark"
                    >
                      {` ${currentProject.projectURL} `}
                    </a>
                  </li>
                </ul>
              </Animated>
            </div>
          </div>
        </div>
      </div>

      {/* Fin de Cuerpo */}

      {/*<ScriptTag src="../vendor/jquery/jquery.min.js"/>

      <ScriptTag src="../vendor/jquery.appear/jquery.appear.min.js" />
      <ScriptTag src="../vendor/jquery.easing/jquery.easing.min.js" />
      <ScriptTag src="../vendor/jquery.cookie/jquery.cookie.min.js" />
      <ScriptTag src="../vendor/popper/umd/popper.min.js" />
      <ScriptTag src="../vendor/bootstrap/js/bootstrap.min.js" />
      <ScriptTag src="../vendor/common/common.min.js" />
      <ScriptTag src="../vendor/jquery.validation/jquery.validate.min.js" />
      <ScriptTag src="../vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js" />
      <ScriptTag src="../vendor/jquery.gmap/jquery.gmap.min.js" />
      <ScriptTag src="../vendor/jquery.lazyload/jquery.lazyload.min.js" />
      <ScriptTag src="../vendor/isotope/jquery.isotope.min.js" />
      <ScriptTag src="../vendor/owl.carousel/owl.carousel.min.js" />
      <ScriptTag src="../vendor/magnific-popup/jquery.magnific-popup.min.js" />
      <ScriptTag src="../vendor/vide/jquery.vide.min.js" />
      <ScriptTag src="../vendor/vivus/vivus.min.js" />
      <ScriptTag src="../vendor/modernizr/modernizr.min.js" />
      <ScriptTag src="../js/theme.js" />
      <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.tools.min.js" />
      <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.revolution.min.js" />
      */}
      {/* <ScriptTag src="../js/custom.js"/> */}
      {/*<ScriptTag src="../js/theme.init.js" />*/}
    </>
  );
};

export default Proj;
