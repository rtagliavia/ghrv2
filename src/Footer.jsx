import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer
          id="footer"
          class="mt-0 appear-animation"
          data-appear-animation="fadeIn"
        >
          <div class="container">
            <div class="row justify-content-center py-5 my-5">
              <div class="col-lg-8 text-center">
                <h2 class="text-8 line-height-4 text-lg-10 line-height-lg-1 font-weight-semibold ls-0 mt-5">
                  Create your new website now!
                </h2>
                <p class="text-4 font-weight-normal px-3 mb-5">
                  Porto Admin Integration - 100% Fully Responsive - Retina Ready
                  - Google Fonts - Super Fast Top-Level Support - Customizable -
                  RTL Support - SEO Friendly
                </p>
                <a
                  href="#"
                  target="_blank"
                  class="btn btn-primary px-5 py-3 font-weight-semibold text-color-light mt-3 mb-5"
                >
                  GET STARTED NOW <i class="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container py-2">
              <div class="row py-4">
                <div class="col text-center">
                  <ul class="footer-social-icons social-icons social-icons-clean social-icons-icon-light mb-3">
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
                  <p>
                    <strong>PORTAL TEMPLATE</strong> - © Copyright 2020. All
                    Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
