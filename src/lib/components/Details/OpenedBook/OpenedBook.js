import React, { Component } from 'react'

import Page from './Page'

import './OpenedBook.css'

class OpenedBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leftPage: 0
        }
    }

    render() {
        return (
            <div id="OpenedBook">
                <Page page={this.state.leftPage} />
                <div class='sep'></div>
                <Page page={this.state.leftPage + 1} />
            </div>
        )
    }
}

export default OpenedBook