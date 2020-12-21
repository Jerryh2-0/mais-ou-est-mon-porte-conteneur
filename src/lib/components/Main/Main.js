import React, { Component } from 'react'

import Timonerie from '../Timonerie/Timonerie'

import './Main.css'

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id='Main'>
                <Timonerie />
            </div>
        )
    }
}

export default Main