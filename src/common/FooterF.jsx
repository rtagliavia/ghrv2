import React, { Component } from 'react';
import ScriptTag from "react-script-tag";


export default class FooterF extends Component {
    render() {
        return (
            <>
            <footer
              id="footer"
              className="mt-0 appear-animation"
              data-appear-animation="fadeIn"
            >
              <div className="container">
                <div className="row justify-content-center py-5 my-5">
                  <div className="col-lg-8 text-center">
                    <h2 className="text-8 line-height-4 text-lg-10 line-height-lg-1 font-weight-semibold ls-0 mt-5">
                      Create your new website now!
                    </h2>
                    <p className="text-4 font-weight-normal px-3 mb-5">
                      Porto Admin Integration - 100% Fully Responsive - Retina Ready
                      - Google Fonts - Super Fast Top-Level Support - Customizable -
                      RTL Support - SEO Friendly
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      className="btn btn-primary px-5 py-3 font-weight-semibold text-color-light mt-3 mb-5"
                    >
                      GET STARTED NOW <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <div className="container py-2">
                  <div className="row py-4">
                    <div className="col text-center">
                      <ul className="footer-social-icons social-icons social-icons-clean social-icons-icon-light mb-3">
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
                      <p>
                        <strong>PORTAL TEMPLATE</strong> - © Copyright 2020. All
                        Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            

         
        {/* Control
        <ScriptTag src="../vendor/modernizr/modernizr.min.js"/>
    <ScriptTag src="../js/theme.js"/>
    <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.tools.min.js"/>
    <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"/>
    <ScriptTag src="../js/custom.js"/>
    <ScriptTag src="../js/theme.init.js"/> */}
        
          </>
        )
    }
}
