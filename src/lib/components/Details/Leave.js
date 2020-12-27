import React, { Component } from 'react'

class Leave extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Leave" onClick={this.props.closeDetails}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    isolation: "isolate",
                }}
                viewBox="0 0 100 100"
                id="leave"
                >
                <defs>
                    <clipPath id="prefix__a">
                    <path d="M0 0h100v100H0z" />
                    </clipPath>
                </defs>
                <g clipPath="url(#prefix__a)">
                    <mask id="prefix__b">
                    <circle
                        vectorEffect="non-scaling-stroke"
                        cx={50}
                        cy={50}
                        r={50}
                        fill="#fff"
                    />
                    </mask>
                    <circle
                    vectorEffect="non-scaling-stroke"
                    cx={50}
                    cy={50}
                    r={50}
                    fill="red"
                    />
                    <circle
                    vectorEffect="non-scaling-stroke"
                    cx={50}
                    cy={50}
                    r={50}
                    fill="red"
                    mask="url(#prefix__b)"
                    strokeWidth={10}
                    stroke="#D90A0A"
                    strokeLinecap="square"
                    strokeMiterlimit={3}
                    />
                    <path
                    vectorEffect="non-scaling-stroke"
                    strokeWidth={5}
                    stroke="#FFF"
                    strokeLinecap="square"
                    strokeMiterlimit={3}
                    d="M25 25l50 50M75 25L25 75"
                    />
                </g>
                </svg>
            </div>
        )
    }
}

export default Leave