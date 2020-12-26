import React, { Component } from 'react'

import './Details.css'

class Details extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Details">
                {
                    this.props.details === 'gps' ?
                        <iframe name="marinetraffic" id="marinetraffic" scrolling="no" src="https://www.marinetraffic.com/en/ais/embed/zoom:2/centery:36/centerx:23/maptype:0/shownames:false/mmsi:248758000/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false" width="90%" height="80%" frameborder="1">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a></iframe>
                    : this.props.details === 'map' ?
                        <div id='map' style={{ color: 'white' }}>Carte pas encore disponible</div>
                    :
                        <div id='book' style={{ color: 'white' }}>Carnet de bord pas encore disponible</div>
                }
            </div>
        )
    }
}

export default Details