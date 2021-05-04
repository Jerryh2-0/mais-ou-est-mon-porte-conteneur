import * as React from "react"

function Socket(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        isolation: "isolate",
        className='Socket'
      }}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h52v104H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <mask id="prefix__b">
          <path
            d="M4.07 82.453L4 82.397l23-28.794V0h25v60h-.079a12.225 12.225 0 01-.832 3.255l.121.096-.362.453a12.47 12.47 0 01-3.637 4.554L23.533 98l-.22-.176A12.52 12.52 0 0112.5 104C5.601 104 0 98.445 0 91.603c0-3.622 1.569-6.883 4.07-9.15z"
            fillRule="evenodd"
            fill="#fff"
          />
        </mask>
        <path
          d="M4.07 82.453L4 82.397l23-28.794V0h25v60h-.079a12.225 12.225 0 01-.832 3.255l.121.096-.362.453a12.47 12.47 0 01-3.637 4.554L23.533 98l-.22-.176A12.52 12.52 0 0112.5 104C5.601 104 0 98.445 0 91.603c0-3.622 1.569-6.883 4.07-9.15z"
          fillRule="evenodd"
          fill="#FFF"
        />
        <path
          d="M4.07 82.453L4 82.397l23-28.794V0h25v60h-.079a12.225 12.225 0 01-.832 3.255l.121.096-.362.453a12.47 12.47 0 01-3.637 4.554L23.533 98l-.22-.176A12.52 12.52 0 0112.5 104C5.601 104 0 98.445 0 91.603c0-3.622 1.569-6.883 4.07-9.15z"
          fillRule="evenodd"
          fill="#FFF"
          mask="url(#prefix__b)"
          vectorEffect="non-scaling-stroke"
          strokeWidth={0.5}
          stroke="#000"
          strokeLinecap="square"
          strokeMiterlimit={3}
        />
        <path
          fill="#2D679D"
          d="M27 0h25v5H27zM27 10h25v5H27zM27 20h25v5H27zM27 30h25v5H27zM27 40h25v5H27zM27 50h25v5H27zM7.453 78.53l19.55 15.6-3.12 3.91-19.55-15.6zM13.456 71.038l19.55 15.6-3.12 3.91-19.55-15.6zM19.96 62.928l19.55 15.6-3.12 3.91-19.55-15.6zM26.123 55.032l19.55 15.6-3.12 3.91-19.55-15.6z"
        />
        <path
          fill="#2D679D"
          d="M26.998 52.22l24.807 8.973-1.7 4.7-24.807-8.973z"
        />
      </g>
    </svg>
  )
}

export default Socket