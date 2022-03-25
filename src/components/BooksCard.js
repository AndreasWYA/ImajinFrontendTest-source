import React from 'react'
import { Card } from 'react-bootstrap'

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
                <div className='mb-2'>
                    <strong>Harga: </strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(this.props.price)}
                </div>
                </Card.Body>
            </Card>
        )
    }
}

export default BooksCard;
