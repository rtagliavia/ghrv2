import React, { Component } from "react";

import {Helmet} from "react-helmet";

export default class Head extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="shortcut icon"
            href="../img/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="../img/apple-touch-icon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light%7CPlayfair+Display:400"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="../vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="../vendor/fontawesome-free/css/all.min.css"
          />
          <link rel="stylesheet" href="../vendor/animate/animate.min.css" />
          <link
            rel="stylesheet"
            href="../vendor/simple-line-icons/css/simple-line-icons.min.css"
          />
          <link
            rel="stylesheet"
            href="../vendor/owl.carousel/assets/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="../vendor/owl.carousel/assets/owl.theme.default.min.css"
          />
          <link
            rel="stylesheet"
            href="../vendor/magnific-popup/magnific-popup.min.css"
          />
          <link rel="stylesheet" href="../css/theme.css" />
          <link rel="stylesheet" href="../css/theme-elements.css" />
          <link rel="stylesheet" href="../css/theme-blog.css" />
          <link rel="stylesheet" href="../css/theme-shop.css" />
          <link rel="stylesheet" href="../vendor/rs-plugin/css/settings.css" />
          <link rel="stylesheet" href="../vendor/rs-plugin/css/layers.css" />
          <link
            rel="stylesheet"
            href="../vendor/rs-plugin/css/navigation.css"
          />
          <link rel="stylesheet" href="../css/skins/skin-corporate-11.css" />
          <link rel="sty.lesheet" href="../css/custom.css" />
          <script src="../vendor/modernizr/modernizr.min.js"></script>
        </Helmet>
      </>
    );
  }
}
