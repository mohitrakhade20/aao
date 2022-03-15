import React from 'react'
import { Button, Input } from 'antd'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'
import { Container, Nav, Navbar, Form } from 'react-bootstrap'
import "../App.css"
import NavbarC from './Navbar'

const User = () => {
  // const { authenticate, signup } = useMoralis();

  const { signup, authenticate, user, setUserData } = useMoralis()
  const [name, setName] = useState(user.attributes.email)
  const [email, setEmail] = useState(user.attributes.username)
  const [useraddress, setUseraddress] = useState(user.attributes.useraddress)
  const [phone, setPhone] = useState(user.attributes.phone)
  const [dob, setDob] = useState(user.attributes.dob)
  const [password, setPassword] = useState()
  const [aadhar, setAadhar] = useState(user.attributes.useraddress)

  const handleChange = () => {
    setUserData({
      email,
      password,
      aadhar,
      useraddress,
      phone,
      dob,
    })
  }

  return (
    <>
      <NavbarC/>
    <div className='user-schema'>
      <h1> Edit User Data</h1>
      <div className='user-form'>
      <h3>Email</h3>
      <Input
        className='user-input'
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />

      <h3>Address</h3>
      <Input
        className='user-input'
        value={useraddress}
        onChange={(event) => setUseraddress(event.currentTarget.value)}
      />
      <h3>Phone No.</h3>
      <Input
        className='user-input'
        value={phone}
        onChange={(event) => setPhone(event.currentTarget.value)}
      />
      <h3>Aadhar number</h3>
      <Input
        className='user-input'
        value={aadhar}
        onChange={(event) => setAadhar(event.currentTarget.value)}
      />
      <h3>Date of Birth</h3>
      <Form.Control
        className='user-input'
        type="date"
        value={dob}
        name="date_of_birth"
        onChange={(event) => setDob(event.currentTarget.value)}
        style={{ width: '70%' }}
      />
      <h6>*click save to save data</h6>
      <Button className='profile-button user-input' onClick={() => handleChange()}>Save User Data</Button>
      </div>
    </div>
    </>
  )
}

export default User
