import React, { Component } from 'react'

import Page from './Page'
import Arrow from './Arrow'

import './OpenedBook.css'

class OpenedBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leftPage: 0
        }

        this.turnLeftPage = this.turnLeftPage.bind(this)
        this.turnRightPage = this.turnRightPage.bind(this)
    }

    turnLeftPage() {
        this.setState({ leftPage: this.state.leftPage -= 2})
    }

    turnRightPage() {
        this.setState({ leftPage: this.state.leftPage += 2})
    }

    render() {
        return (
            <div id="OpenedBook">
                <Page page={this.state.leftPage} />
                <div class='sep'></div>
                <Page page={this.state.leftPage + 1} />
                <Arrow id={'leftArrow'} onClick={this.state.leftPage !== 0 ? this.turnLeftPage : () => { }} />
                <Arrow id={'rightArrow'} onClick={this.state.leftPage !== 2 ? this.turnRightPage : () => { }} />
            </div>
        )
    }
}

export default OpenedBook