import React, { Component } from 'react'

import TimonerieSVG from './TimonerieSVG'
import GPS from '../GPS/GPS'
import Map from '../Map/Map'
import Marin from './Marin'

import './Timonerie.css'

class Timonerie extends Component {

    constructor() {
        super()
        this.state = {
            moving: '',
            x: 55
        }

        this.openGPS = this.openGPS.bind(this)
        this.openMap = this.openMap.bind(this)
    }

    
    async openGPS() {
        console.log('GO TO GPS')
        let marin = document.getElementById('marin')
        let xInPercentage = marin.getBoundingClientRect().x / window.innerWidth * 100
        let xToMove = Math.round((43 - xInPercentage) / 5) * 5

        let direction = xToMove < 0 ? 'left' : 'right'
        
        console.log(this.state.moving)

        
        function iteration(i) {
            console.log(i)
            return new Promise(async (resolve) => { 
                setTimeout(() => {
                    this.setState({ x: direction === "left" ? (xInPercentage - i * 5 / 100) : (xInPercentage + i * 5 / 100) })
                    console.log(marin.getBoundingClientRect().x)
                    if (i < Math.abs(xToMove) / 5 * 100) {
                        this.setState({ moving: direction})
                    } else {
                        this.setState({ moving: '' })
                        this.props.openDetails('gps')
                    }
                }, 25);
            });
        }

        iteration = iteration.bind(this)

        await this.setState({ moving: direction })
        console.log(Math.abs(xToMove) / 5)
        for(let i = 1; i <= Math.abs(xToMove) / 5 * 100; i++) {
            await console.log(iteration(i))
            console.log(i)
        }
        await this.setState({ moving: '' })
        console.log('class removed')

        

    }

    async openMap() {
        console.log('GO TO MAP')
        let marin = document.getElementById('marin')
        let xInPercentage = marin.getBoundingClientRect().x / window.innerWidth * 100
        let xToMove = Math.round((55 - xInPercentage) / 5) * 5

        let direction = xToMove < 0 ? 'left' : 'right'
        
        console.log(this.state.moving)

        
        function iteration(i) {
            console.log(i)
            return new Promise(async (resolve) => { 
                setTimeout(() => {
                    this.setState({ x: direction === "left" ? (xInPercentage - i * 5 / 100) : (xInPercentage + i * 5 / 100) })
                    console.log(marin.getBoundingClientRect().x)
                    if (i < Math.abs(xToMove) / 5 * 100) {
                        this.setState({ moving: direction})
                    } else {
                        this.setState({ moving: '' })
                        this.props.openDetails('map')
                    }
                }, 25);
            });
        }

        iteration = iteration.bind(this)

        await this.setState({ moving: direction })
        console.log(Math.abs(xToMove) / 5)
        for(let i = 1; i <= Math.abs(xToMove) / 5 * 100; i++) {
            await console.log(iteration(i))
            console.log(i)
        }
        await this.setState({ moving: '' })
        console.log('class removed')

    }

    render() {
        return(
            <div id='timonerie'>
                <TimonerieSVG />
                <GPS openGPS={this.openGPS} />
                <Map openMap={this.openMap} />
                <Marin x={this.state.x} moving={this.state.moving} />
            </div>
        )
    }
}

export default Timonerie