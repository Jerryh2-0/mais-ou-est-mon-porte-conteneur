import React, { Component } from 'react'

import Leave from './Leave'
import OpenedBook from './OpenedBook/OpenedBook'
import Label from '../Label'

import './Details.css'

class Details extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Details">
                <Leave closeDetails={this.props.closeDetails} />
                {
                    this.props.details === 'gps' ?
                        <iframe name="marinetraffic" id="marinetraffic" scrolling="no" src="https://www.marinetraffic.com/en/ais/embed/zoom:2/centery:36/centerx:23/maptype:0/shownames:false/mmsi:248758000/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false" width="90%" height="80%" frameborder="1">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a></iframe>
                    : this.props.details === 'map' ?
                        <div id='map' style={{ color: 'white' }}><iframe src="https://storymaps.arcgis.com/stories/3d22050f524240da814e89b725413229" width="100%" height="100%" frameborder="0" allowfullscreen allow="geolocation"></iframe></div>
                    :
                        this.props.details === 'book' ?
                            <OpenedBook dropSock={this.props.dropSock} />
                        :
                            <Label />
                }
            </div>
        )
    }
}

export default Details