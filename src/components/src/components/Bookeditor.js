import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Bookeditor() {

    const navigate = useNavigate();
  return (
    <div>
        <Card>
            <Form>
                <Form.Group className='m-3'>
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="title" />
                </Form.Group>
                <Form.Group className='m-3' >
                    <Form.Label>Harga</Form.Label>
                    <Form.Control type="price" />
                </Form.Group>
                <div className='middle'>
                <Button onClick={()=>navigate(-1)} className='w-50 mb-3'>Edit</Button>
                </div>
            </Form>
        </Card>
        <div className='mt-3 middle'><Link to="/" className='link'>Cancel</Link></div>
    </div>
  )
}
