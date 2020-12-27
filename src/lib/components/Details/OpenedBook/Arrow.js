import * as React from "react"

function Arrow(props) {
  return (
    <div class='arrow' id={props.id}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            isolation: "isolate",
        }}
        viewBox="0 0 18 30"
        {...props}
        >
        <defs>
            <clipPath id="prefix__a">
            <path d="M0 0h18v30H0z" />
            </clipPath>
        </defs>
        <g clipPath="url(#prefix__a)" fill="#D5D558">
            <path d="M0 5h10v20H0zM18 15l-8 15V0z" />
        </g>
        </svg>
    </div>
  )
}

export default Arrow