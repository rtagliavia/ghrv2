import React, { Component } from 'react'

import Header from "../common/HeaderF";
import Footer from "../common/FooterF";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer />               
                
            </div>
        )
    }
}
