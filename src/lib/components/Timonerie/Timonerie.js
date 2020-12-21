import React, { Component } from 'react'

import TimonerieSVG from './TimonerieSVG'
import GPS from '../GPS/GPS'

import './Timonerie.css'

class Timonerie extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div id='timonerie'>
                <TimonerieSVG />
                <GPS />
            </div>
        )
    }
}

export default Timonerie