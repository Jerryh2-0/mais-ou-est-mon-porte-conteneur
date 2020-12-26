import React, { Component  } from 'react'

import BookSVG from './BookSVG'

import './Book.css'

class Book extends Component{

    constructor() {
        super()
    }

    render() {
        return (
            <div id='book' onClick={this.props.openBook}>
                <BookSVG />
            </div>
            
          )
    }
    
}

export default Book
