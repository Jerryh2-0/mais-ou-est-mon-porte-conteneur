import React, { Component } from 'react'


class GPS extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div id="GPS" onClick={this.props.openGPS}>
                {/* <iframe name="marinetraffic" id="marinetraffic" scrolling="no" src="http://www.marinetraffic.com/en/ais/embed/zoom:-5/centery:36/centerx:23/maptype:0/shownames:false/mmsi:248758000/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false" width="100%" height="100%" frameborder="1">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a></iframe> */}
                <iframe name="vesselfinder" id="vesselfinder" src="https://www.vesselfinder.com/aismap?zoom=-20&amp;lat=undefined&amp;lon=undefined&amp;width=100%&amp;height=100%&amp;names=false&amp;mmsi=248758000&amp;track=false&amp;fleet=false&amp;fleet_name=false&amp;fleet_hide_old_positions=false&amp;clicktoact=false&amp;store_pos=true&amp;ra=http%3A%2F%2F127.0.0.1%3A5500%2Findex.html" width="100%" height="140%" frameborder="0">Browser does not support embedded objects.</iframe>
            </div>

        )
    }
}

export default GPS