import React from 'react'
import { Button } from 'react-bootstrap';
import {HashRouter as Route, Link  } from 'react-router-dom';
import BooksCard from './BooksCard'

class BooksList extends React.Component{
 
  state = {
    buku: [],
  }

  componentDidMount () {
    fetch(`https://imajin.id/interview/api/1/books/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(response => this.setState({ 
        buku: response.books,
      }));
  }

  render(){
    console.log(this.props.match.params.id)
    const { buku } = this.state;
    return(
      <div>
      <br/>
        <Link to="/" className='link'><Button className='btn btn-primary'>Return</Button></Link>
        {buku.map(book => (
              <div key={book.judul}>
              <BooksCard title={book.judul} price={book.harga}/>
              </div>
            ))
          }
      </div>
    )
  }
}

export default BooksList;