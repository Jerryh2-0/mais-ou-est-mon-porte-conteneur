import React, { Component } from 'react'

import './Label.css'

class Label extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Label">
                <h1>Made in France</h1>
                <h2>Projet tricoté avec soin par Mathilde Cordary, Cyrille Sanchez, Kévin Bui et Jean-Paul</h2>
                <span>Petite anecdote inutile : Ce projet est composé de ???? lignes de codes, ce qui représente environ 670Ko. En considérant qu'un caractère est codé sur 4 octets environ en UTF-8, cela représenterait environ 167 500 caractères soit 600 tweets complets de 280 caractères.</span>
            </div>
        )
    }
}

export default Label