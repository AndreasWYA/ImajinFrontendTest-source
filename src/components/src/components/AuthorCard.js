import React from 'react'
import { Button, Card } from 'react-bootstrap'

class AuthorCard extends React.Component{
    render(){
        return(
            <Card className='mb-2 mt-2'>
            <center>    
                <Card.Img variant="top" src={this.props.photo} style={{width: '390px', height:'auto', padding: '20px'}}/>
                </center>
                <Card.Body>
                <div>
                    <strong>Name: </strong>{this.props.name}
                </div>
                <div className='mb-2'>
                    <strong>Telp: </strong>{this.props.telp}
                </div>
                <div>
                    <Button className='btn btn-primary w-100 mt-3'>Check Books</Button>
                </div>
                </Card.Body>
            </Card>
        )
    }
}

export default AuthorCard;
