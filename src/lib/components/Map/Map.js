import React, { Component } from 'react'

class Map extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Map" onClick={this.props.openMap} className={this.props.className ? this.props.className : ""}>
                <img src='https://storage.googleapis.com/gweb-uniblog-publish-prod/images/New-global-view.max-1000x1000.jpeg' alt='map'></img>
            </div>
        )
    }
}

export default Map