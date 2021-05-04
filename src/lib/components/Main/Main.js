import React, { Component } from 'react'

import Timonerie from '../Timonerie/Timonerie'

import Details from '../Details/Details'

import './Main.css'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            details: '',
            sockDropped: false
        }

        this.openDetails = this.openDetails.bind(this)
        this.closeDetails = this.closeDetails.bind(this)
        this.dropSock = this.dropSock.bind(this)
    }

    openDetails(details) {
        this.setState({ details })
        console.log(details)
    }

    closeDetails() {
        this.setState({ details: "" })
    }

    dropSock() {
        console.log('DROPPED')
        this.setState({ sockDropped: true })
    }

    componentDidMount() {
        window.addEventListener('keyup', (e) => {
            if(e.key === "Escape") {
                this.closeDetails()
            }
        })
    }

    render() {
        return (
            <div id='Main'>
                <Timonerie openDetails={ this.openDetails } sockDropped={ this.state.sockDropped } />
                {this.state.details ? <Details details={this.state.details} closeDetails={this.closeDetails} dropSock={this.dropSock} />: ''}
            </div>
        )
    }
}

export default Main