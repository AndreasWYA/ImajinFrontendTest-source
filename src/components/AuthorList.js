import React from 'react'
import {HashRouter as Route, Link } from 'react-router-dom';
import AuthorCard from './AuthorCard'
import "./styles.css"

class AuthorList extends React.Component{
  state = {
    authors: [],
  }

  componentDidMount () {
    fetch('https://imajin.id/interview/api/1/')
      .then(response => response.json())
      .then(response => { 
        this.setState({ 
        authors: response
      })
    });
  }

  render(){
    const { authors } = this.state;
    return(
      <div>
        {authors.map(author => (
              <div key={author.id}>
              <Link to={`books/${author.id}`} className='link'> 
                <AuthorCard photo={author.photo} name={author.name} telp={author.telp} id={author.id}/>
                </Link>
              </div>
            ))
          }
      </div>
    )
  }
}

export default AuthorList;