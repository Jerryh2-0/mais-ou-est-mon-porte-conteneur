import React, { Component } from 'react'

import TimonerieSVG from './TimonerieSVG'
import Book from '../Book/Book'
import GPS from '../GPS/GPS'
import Map from '../Map/Map'
import Marin from './Marin'
import Sock from '../Sock'

import './Timonerie.css'

let timing = 25

class Timonerie extends Component {

    constructor() {
        super()
        this.state = {
            moving: '',
            x: 55
        }

        this.openBook = this.openBook.bind(this)
        this.openGPS = this.openGPS.bind(this)
        this.openMap = this.openMap.bind(this)
    }



    async openBook() {
        if(this.props.sockDropped) return this.props.openDetails('book')
        let marin = document.getElementById('marin')
        let xInPercentage = marin.getBoundingClientRect().x / window.innerWidth * 100
        let xToMove = Math.round((35 - xInPercentage) / 5) * 5

        let direction = xToMove < 0 ? 'left' : 'right'


        async function iteration(i) {
            await this.setState({ x: direction === "left" ? (xInPercentage - i * 5 / 100) : (xInPercentage + i * 5 / 100) })
            if (i <= Math.abs(xToMove) / 5 * 100 - 4) {
                await this.setState({ moving: direction})
            } else {
                console.log('Now stopping to move')
                await this.setState({ moving: '' })
                await this.props.openDetails('book')
                console.log('Now, opening book')
            }


            let promise = new Promise(function(resolve, reject) {
                setTimeout(() => {
                    resolve('Resolved')
                }, timing)
            })

            return promise
            
        }

        iteration = iteration.bind(this)

        await this.setState({ moving: direction })
        for(let i = 1; i <= Math.abs(xToMove) / 5 * 100; i += 4) {
            let promise = await iteration(i)
            console.log(promise)
        }
        await this.setState({ moving: '' })

    }

    
    async openGPS() {
        if(this.props.sockDropped) return this.props.openDetails('gps')
        let marin = document.getElementById('marin')
        
        let xInPercentage;
        if(marin.getBoundingClientRect().x / window.innerWidth * 100 < 43) {
            xInPercentage = (marin.getBoundingClientRect().x - 0.11 * window.innerHeight) / window.innerWidth * 100
        } else {
            xInPercentage = marin.getBoundingClientRect().x / window.innerWidth * 100
        }
        let xToMove = Math.round((43 - xInPercentage) / 5) * 5

        let direction = xToMove < 0 ? 'left' : 'right'

        
        async function iteration(i) {
            await this.setState({ x: direction === "left" ? (xInPercentage - i * 5 / 100) : (xInPercentage + i * 5 / 100) })
            if (i <= Math.abs(xToMove) / 5 * 100 - 4) {
                await this.setState({ moving: direction})
            } else {
                await this.setState({ moving: '' })
                await this.props.openDetails('gps')
            }


            let promise = new Promise(function(resolve, reject) {
                setTimeout(() => {
                    resolve('Resolved')
                }, timing)
            })

            return promise
            
        }

        iteration = iteration.bind(this)

        await this.setState({ moving: direction })
        for(let i = 1; i <= Math.abs(xToMove) / 5 * 100; i += 4) {
            let promise = await iteration(i)
            console.log(promise)
        }
        await this.setState({ moving: '' })

        

    }

    async openMap() {
        if(this.props.sockDropped) return this.props.openDetails('map')
        let marin = document.getElementById('marin')
        let xInPercentage = (marin.getBoundingClientRect().x - 0.11 * window.innerHeight) / window.innerWidth * 100
        let xToMove = Math.round((55 - xInPercentage) / 5) * 5

        let direction = xToMove < 0 ? 'left' : 'right'

        
        async function iteration(i) {
            await this.setState({ x: direction === "left" ? (xInPercentage - i * 5 / 100) : (xInPercentage + i * 5 / 100) })
            if (i <= Math.abs(xToMove) / 5 * 100 - 4) {
                await this.setState({ moving: direction})
            } else {
                await this.setState({ moving: '' })
                await this.props.openDetails('map')
            }


            let promise = new Promise(function(resolve, reject) {
                setTimeout(() => {
                    resolve('Resolved')
                }, timing)
            })

            return promise
            
        }

        iteration = iteration.bind(this)

        await this.setState({ moving: direction })
        for(let i = 1; i <= Math.abs(xToMove) / 5 * 100; i += 4) {
            let promise = await iteration(i)
            console.log(promise)
        }
        await this.setState({ moving: '' })

    }

    render() {
        const socks = []

        for(let i = 0; i < 50; i++) {
            socks.push(
                <Sock
                    style={{
                        top: `${84 + Math.random() * 15}vh`,
                        left: `${32 + Math.random() * 25}vw`,
                        transform: `rotate(${Math.random() * 360}deg)`
                    }}

                    onClick={this.props.openDetails}
                />
            )
        }

        return(
            <div id='timonerie'>
                <TimonerieSVG />
                <Book openBook={this.openBook} className="behind" />
                <GPS openGPS={this.openGPS} className="behind" />
                <Map openMap={this.openMap} className="behind" />
                {
                !this.state.moving ?
                    <div>
                        <Book openBook={this.openBook} className="inFront" />
                        <GPS openGPS={this.openGPS} className="inFront" />
                        <Map openMap={this.openMap} className="inFront" />
                    </div>
                :
                    undefined
                }
                {
                    !this.props.sockDropped
                    ?
                    <Marin x={this.state.x} moving={this.state.moving} />
                    :
                    socks
                }
            </div>
        )
    }
}

export default Timonerie