import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {HashRouter as Route, Link } from 'react-router-dom';


class BooksCard extends React.Component{
    render(){
        return(
            <Card className='mb-2 mt-3'>
            <center>
                </center>
                <Card.Body>
                <div className='mt-2 mb-1'>
                    <strong>Judul: </strong>{this.props.title}
                </div>
                <div>
                    <strong>Harga: </strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(this.props.price)}
                </div>
                </Card.Body>
                <div style={{textAlign: 'right'}}>
                <Link to="/editor"><Button className='w-25 m-3'>Edit</Button></Link>
                </div>
            </Card>      
        )
    }
}

export default BooksCard;
