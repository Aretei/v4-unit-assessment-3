import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import './App.css';
import React, { Component } from 'react'
import data from './data'

class App extends Component {

  constructor () {
    super ()

    this.state = {
      books: data,
      shelf: []
    }

  }

  render () {
    return (
      <div className="App">
  
         <Header />
         <BookList books={ this.state.books } />
         <Shelf />
  
      </div>
    );
  }
}

export default App;
