import React, { Component } from 'react'

class BookList extends Component {

    constructor () {
        super()
    }

    render () {
        return (
            <section>
                <ul> { this.props.books.map( e => <li> { e.title } </li> ) } </ul>
                <ul> { this.props.books.map( e => <li> { e.author } </li> ) } </ul>
                <ul> { this.props.books.map( e => <img  src={ e.img }/> ) } </ul>
            </section>
        )
    }

}

export default BookList