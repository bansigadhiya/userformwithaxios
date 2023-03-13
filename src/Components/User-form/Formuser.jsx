import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { CreateUserActionAcync } from '../../Services/Actions/Formuser.action';

function Formuser() {

  const dispatch = useDispatch();

  const [initial, setInitial] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInitial({
      ...initial, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(CreateUserActionAcync(initial));

    setInitial({
      name : '',
      email : '',
      password : ''
    })
  }

  return (
    <Container style={{ textAlign: "left" }}>
      <h3 style={{ textAlign: 'center' }} className='mb-3 mt-5'>Sign Up For Creating Your Account..</h3>
      <Form onSubmit={(e) => {handleSubmit(e)}} className='w-50 mx-auto border border-dark p-3 rounded-2'>

        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" value={initial.name} onChange={(e) => { handleChange(e) }} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={initial.email} onChange={(e) => { handleChange(e) }} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={initial.password} onChange={(e) => { handleChange(e) }} />
        </Form.Group>


        <Button variant="info" type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  )
}

export default Formuser
