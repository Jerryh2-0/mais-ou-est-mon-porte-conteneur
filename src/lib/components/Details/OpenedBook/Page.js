import React, { Component } from 'react'

// let plainContent = require('./plainContent')

import plainContent from './plainContent'

class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let content = []

        if(!plainContent[this.props.page]) return <div className="Page"></div>
        plainContent[this.props.page].forEach(([tag, text]) => {
            switch(tag) {
                case 'h1':
                    content.push(<h1>{text}</h1>)
                    break
                case 'h2':
                    content.push(<h2>{text}</h2>)
                    break
                case 'h3':
                    content.push(<h3>{text}</h3>)
                    break
                case 'p':
                    content.push(<p>{text}</p>)
                    break
            }
        })
        
        return (
            <div className="Page">
                {content}
            </div>
        )
    }
}

export default Page