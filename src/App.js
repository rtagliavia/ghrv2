import React, { Component } from "react";
import ScriptTag from "react-script-tag";
import parse from "html-react-parser";
import { appendScript, removeScript } from "./LoadScritp";
import JsonProj from "./assets/json/proj.json";
import "./style.css";

import ElFooter from "./Footer";

export default class App extends Component {
  render() {
    return (
      <>       

        <div role="main" class="main">
          <div
            class="slider-container rev_slider_wrapper"
            style={{ height: "100vh" }}
          >
            <div
              id="revolutionSlider"
              class="slider rev_slider"
              data-version="5.4.8"
              data-plugin-revolution-slider
              data-plugin-options="{'sliderLayout': 'fullscreen', 'delay': 9000, 'gridwidth': 1170, 'gridheight': 700, 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,500], 'navigation' : {'arrows': { 'enable': true, 'style': 'arrows-style-1 arrows-primary' }, 'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 70, 'h_offset': 0}}}"
            >
              <ul>
                <li
                  class="slide-overlay slide-overlay-gradient slide-overlay-gradient-animated slide-overlay-level-8"
                  data-transition="fade"
                >
                  <img
                    src="img/slides/slide-corporate-11-1.jpg"
                    alt=""
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat"
                    class="rev-slidebg"
                  />

                  <div
                    class="tp-caption text-color-light font-weight-normal"
                    data-frames='[{"delay":700,"speed":1000,"frame":"0","from":"opacity:0;y:-50%;","to":"opacity:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-y="center"
                    data-voffset="['-100','-100','-100','-160']"
                    data-fontsize="['20','20','20','40']"
                    data-lineheight="['25','25','25','45']"
                  >
                    WE BUILD ONLY THE BEST
                  </div>

                  <div
                    class="tp-caption bg-color-light"
                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"opacity:0;x:-50%;","to":"opacity:0.4;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-y="center"
                    data-voffset="['-65','-65','-65','-98']"
                    data-width="['362','362','362','575']"
                    data-height="8"
                  ></div>

                  <div
                    class="tp-caption bg-color-light"
                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"opacity:0;x:50%;","to":"opacity:0.4;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-y="center"
                    data-voffset="['65','65','65','98']"
                    data-width="['362','362','362','575']"
                    data-height="8"
                  ></div>

                  <div
                    class="tp-caption bg-color-light"
                    data-frames='[{"delay":1850,"speed":1000,"frame":"0","from":"opacity:0;y:-50%;","to":"opacity:0.4;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-hoffset="['-185','-185','-185','-284']"
                    data-y="center"
                    data-width="8"
                    data-height="['138','138','138','190']"
                  ></div>

                  <div
                    class="tp-caption bg-color-light"
                    data-frames='[{"delay":1850,"speed":1000,"frame":"0","from":"opacity:0;y:50%;","to":"opacity:0.4;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-hoffset="['185','185','185','284']"
                    data-y="center"
                    data-width="8"
                    data-height="['138','138','138','190']"
                  ></div>

                  <h1
                    class="tp-caption font-weight-extra-bold text-color-light"
                    data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-y="center"
                    data-fontsize="['95','95','95','150']"
                    data-lineheight="['105','105','105','155']"
                  >
                    DESIGNS
                  </h1>

                  <div
                    class="tp-caption font-weight-light text-color-light ws-normal text-center"
                    data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2300,"split":"chars","splitdelay":0.05,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                    data-x="center"
                    data-y="center"
                    data-voffset="['110','110','110','200']"
                    data-width="['325','325','325','550']"
                    data-fontsize="['18','18','18','40']"
                    data-lineheight="['26','26','26','45']"
                  >
                    Porto is a huge success in the one of largest world's
                    MarketPlace.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container py-4 my-5">
          <div class="row text-center mb-5">
            <div class="col-md-10 mx-md-auto">
              <h1
                class="word-rotator-title font-weight-bold text-8 mb-3 appear-animation"
                data-appear-animation="fadeInUpShorter"
              >
                Porto is incredibly beautiful and fully responsive.
              </h1>
              <p
                class="lead text-4 font-weight-normal appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                elementum, nulla vel pellentesque consequat, ante nulla
                hendrerit arcu, ac tincidunt mauris lacus sed leo. vamus
                suscipit molestie vestibulum.
              </p>
            </div>
          </div>
          <div class="row justify-content-center counters counters-lg">
            <div
              class="col-md-3 appear-animation"
              data-appear-animation="fadeInLeftShorter"
              data-appear-animation-delay="500"
            >
              <div class="counter counter-with-unit counter-unit-on-top">
                <strong
                  class="text-color-dark font-weight-extra-bold text-13 text-lg-15"
                  data-to="100"
                >
                  0
                </strong>
                <strong class="unit text-color-dark font-weight-bold text-5 text-lg-8">
                  %
                </strong>
                <label class="font-weight-normal text-3 text-lg-4 px-5 px-lg-4">
                  Percent of happy users using Porto
                </label>
              </div>
            </div>
            <div
              class="col-md-4 col-lg-3 appear-animation"
              data-appear-animation="fadeIn"
              data-appear-animation-delay="300"
            >
              <div class="counter counter-with-unit counter-unit-on-top">
                <strong
                  class="text-color-dark font-weight-extra-bold text-13 text-lg-15"
                  data-to="50"
                >
                  0
                </strong>
                <strong class="unit text-color-dark font-weight-bold text-5 text-lg-8">
                  +
                </strong>
                <label class="font-weight-normal text-3 text-lg-4 px-5">
                  Projects made with total success
                </label>
              </div>
            </div>
            <div
              class="col-md-3 appear-animation"
              data-appear-animation="fadeInRightShorter"
              data-appear-animation-delay="500"
            >
              <div class="counter counter-with-unit counter-unit-on-top">
                <strong
                  class="text-color-dark font-weight-extra-bold text-13 text-lg-15"
                  data-to="350"
                >
                  0
                </strong>
                <strong class="unit text-color-dark font-weight-bold text-5 text-lg-8">
                  +
                </strong>
                <label class="font-weight-normal text-3 text-lg-4 px-5">
                  Number of clients around the world
                </label>
              </div>
            </div>
          </div>
        </div>

        <section
          class="section bg-color-grey-scale-1 section-height-3 border-0 m-0 appear-animation"
          data-appear-animation="fadeIn"
        >
          <div class="container my-3">
            <div class="row justify-content-center">
              <div
                class="col-sm-10 col-md-7 col-lg-4 mb-4 mb-lg-0 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="200"
              >
                <div class="featured-boxes featured-boxes-modern-style-1">
                  <div class="featured-box overlay overlay-show">
                    <div
                      class="featured-box-background"
                      style={{
                        "background-image":
                          "url(img/generic/generic-corporate-11-1.jpg)",
                        "background-size": "cover",
                        "background-position": "center",
                      }}
                    ></div>
                    <div class="box-content px-lg-4 px-xl-5 py-lg-5">
                      <i class="icon-featured icons icon-screen-smartphone"></i>
                      <h2>Mobile Apps</h2>
                      <p class="font-weight-light">
                        Lorem ipsum dolor sit amet, coctetur adipiscing elit.
                      </p>
                      <a
                        href="/"
                        class="btn btn-light-2 btn-outline font-weight-semibold btn-px-5 btn-py-2 border-width-1 text-1"
                      >
                        GET STARTED
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-10 col-md-7 col-lg-4 mb-4 mb-lg-0 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="400"
              >
                <div class="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-primary">
                  <div class="featured-box">
                    <div class="box-content px-lg-4 px-xl-5 py-lg-5">
                      <i class="icon-featured icons icon-layers text-color-primary"></i>
                      <h2>Creative Websites</h2>
                      <p class="font-weight-light">
                        Lorem ipsum dolor sit amet, coctetur adipiscing elit.
                      </p>
                      <a
                        href="/"
                        class="btn btn-light btn-outline font-weight-semibold text-color-dark btn-px-5 btn-py-2 border-width-1 text-1"
                      >
                        GET STARTED
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-10 col-md-7 col-lg-4 appear-animation"
                data-appear-animation="fadeInRightShorter"
                data-appear-animation-delay="600"
              >
                <div class="featured-boxes featured-boxes-modern-style-1">
                  <div class="featured-box overlay overlay-show">
                    <div
                      class="featured-box-background"
                      style={{
                        "background-image":
                          "url(img/generic/generic-corporate-11-2.jpg)",
                        "background-size": "cover",
                        "background-position": "center",
                      }}
                    ></div>
                    <div class="box-content px-lg-4 px-xl-5 py-lg-5">
                      <i class="icon-featured icons icon-screen-desktop"></i>
                      <h2>Brand Solutions</h2>
                      <p class="font-weight-light">
                        Lorem ipsum dolor sit amet, coctetur adipiscing elit.
                      </p>
                      <a
                        href="/"
                        class="btn btn-light-2 btn-outline font-weight-semibold btn-px-5 btn-py-2 border-width-1 text-1"
                      >
                        GET STARTED
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="row align-items-center text-center text-md-left py-5 my-5">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <h2 class="font-weight-bold text-6 line-height-1 ls-0 mb-4">
                About Our Clients
              </h2>
              <p class="text-4">
                There are so many styles you can combine that is possible to
                create almost any kind of layout based on Porto Template.
              </p>
              <p class="mb-4 pr-md-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur imperdiet hendrerit volutpat. Sed in nunc nec ligula
                consectetur mollis in vel justo.
              </p>
              <a
                href="#"
                class="btn btn-dark font-weight-semibold rounded-0 text-2 btn-px-5 btn-py-2"
              >
                LEARN MORE
              </a>
            </div>
            <div class="col-lg-5 text-center">
              <div class="row justify-content-center">
                <div class="col-9 col-md-4 px-0 mb-4 mb-md-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-1.png"
                    alt=""
                  />
                </div>
                <div class="col-9 col-md-4 px-0 mb-4 mb-md-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-4.png"
                    alt=""
                  />
                </div>
                <div class="col-9 col-md-4 px-0 mb-4 mb-md-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-3.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center py-md-3 my-md-4">
                <div class="col-9 col-md-4 px-0 mb-4 mb-md-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-5.png"
                    alt=""
                  />
                </div>
                <div class="col-9 col-md-4 px-0 mb-4 mb-md-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-6.png"
                    alt=""
                  />
                </div>
                <div class="col-9 col-md-4 px-0 mb-4 mb-md-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-7.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-9 col-md-4 px-0">
                  <img
                    class="img-fluid hover-effect-3"
                    src="img/logos/logo-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-0" />

        <div class="container">
          <div class="row py-4 my-5">
            <div
              class="col appear-animation"
              data-appear-animation="fadeInUpShorter"
            >
              <div
                class="owl-carousel owl-theme nav-bottom rounded-nav mb-0"
                data-plugin-options="{'items': 1, 'loop': false, 'autoHeight': true}"
              >
                <div>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/clients/client-1.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eget risus porta, tincidunt turpis at, interdum
                        tortor. Suspendisse potenti. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Fusce ante tellus, convallis non consectetur sed,
                        pharetra nec ex.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - John Smith. Okler
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="testimonial testimonial-style-2 testimonial-with-quotes testimonial-quotes-dark mb-0">
                    <div class="testimonial-author">
                      <img
                        src="img/clients/client-1.jpg"
                        class="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <blockquote>
                      <p class="text-color-dark text-5 line-height-5 mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed eget risus porta, tincidunt turpis at, interdum
                        tortor. Suspendisse potenti. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                      </p>
                    </blockquote>
                    <div class="testimonial-author">
                      <p>
                        <strong class="font-weight-extra-bold text-2">
                          - John Smith. Okler
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          class="section bg-color-grey-scale-1 section-height-3 border-0 m-0 appear-animation"
          data-appear-animation="fadeIn"
        >
          <div class="container my-3">
            <div class="row">
              <div
                class="col text-center appear-animation"
                data-appear-animation="fadeInUpShorter"
                data-appear-animation-delay="200"
              >
                <h2 class="font-weight-bold line-height-1 mb-3">Proyectos</h2>
                <p class="text-4 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  elementum, nulla vel pellen.
                </p>
              </div>
            </div>

            <div class="container py-2">
              <ul
                class="nav nav-pills sort-source sort-source-style-3 justify-content-center"
                data-sort-id="portfolio"
                data-option-key="filter"
                data-plugin-options="{'layoutMode': 'fitRows', 'filter': '*'}"
              >
                <li class="nav-item active" data-option-value="*">
                  <a class="nav-link text-1 text-uppercase active" href="#">
                    Ver Todos
                  </a>
                </li>
                <li class="nav-item" data-option-value=".Arquitectura">
                  <a class="nav-link text-1 text-uppercase" href="#">
                    Arquitectura
                  </a>
                </li>
                <li class="nav-item" data-option-value=".logos">
                  <a class="nav-link text-1 text-uppercase" href="#">
                    Logos
                  </a>
                </li>
                <li class="nav-item" data-option-value=".brands">
                  <a class="nav-link text-1 text-uppercase" href="#">
                    Brands
                  </a>
                </li>
                <li class="nav-item" data-option-value=".medias">
                  <a class="nav-link text-1 text-uppercase" href="#">
                    Medias
                  </a>
                </li>
              </ul>

              <div class="sort-destination-loader sort-destination-loader-showing mt-4 pt-2">
                <div
                  class="row portfolio-list sort-destination"
                  data-sort-id="portfolio"
                >
                  {/* Inicio loop */}
                  {JsonProj.map((item, index) => {
                    return (
                      <>
                        <div class={"col-md-6 col-lg-4 isotope-item "+item.catComplete} key="index">
                          <div class="portfolio-item">
                            <a href={`/proyectos/${item.id}`}>
                              <span class="thumb-info thumb-info-lighten border-radius-0">
                                <span class="thumb-info-wrapper border-radius-0">
                                  <img
                                    src={`img/projects/proj-${item.id}/${item.id}.jpg`}
                                    class="img-fluid border-radius-0"
                                    alt=""
                                  />

                                  <span class="thumb-info-title">
                                    <span class="thumb-info-inner">
                                      {item.name}
                                    </span>
                                    <span class="thumb-info-type">{item.catComplete}</span>
                                  </span>
                                  <span class="thumb-info-action">
                                    <span class="thumb-info-action-icon bg-dark opacity-8">
                                      <i class="fas fa-plus"></i>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  {/* Fin Loop */}
                </div>
              </div>
            </div>
            {/* Fin de Sección */}            
          </div>
        </section>
      </>
    );
  }
}
