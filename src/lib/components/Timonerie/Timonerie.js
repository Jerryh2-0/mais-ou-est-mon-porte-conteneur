import React, { Component } from 'react'

import TimonerieSVG from './TimonerieSVG'
import GPS from '../GPS/GPS'
import Map from '../Map/Map'
import Marin from './Marin'

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
                <Map />
                <Marin />
            </div>
        )
    }
}

export default Timonerie