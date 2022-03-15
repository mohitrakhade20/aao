import React from 'react'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarC from './Navbar.js'
import Header from "../components/Header";

import { Button, Container, Form, Nav } from 'react-bootstrap'
import '../App.css'
import { Content } from 'antd/lib/layout/layout'

const LogIn = () => {
  const { user, login, authenticate } = useMoralis()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    login(email, password).then(() => {
      window.location.reload()
    })
  }

  return (
    <div>
      <Container className="profile-schema">
        <h1 className='profile-title'>Log In</h1>
        <Form className='profile-form'>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className='profile-lable'>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className='profile-lable'>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            type="button"
            onClick={() => handleLogin(email, password)}
            className="profile-button"
          >
            LogIn
          </Button>
        </Form>
      </Container>
    </div>
  )
}

// Metamask -------------------------------------------------

// const Metamask = () => {
//   const { authenticate,isAuthenticated,user,logout } = useMoralis()
//   if(isAuthenticated){
//     return <div>
//     <h1>Profile LoggedIn {user.attributes.username}</h1>
//     <Button onClick={logout}>Logout</Button>
//     <Link to="/user">User</Link>

//     </div>
//   }  return (
//     <div>
//       <h1>Metamask</h1>
//       <Button onClick={()=>authenticate()}>Login</Button>
//     </div>
//   )
// }

// -------------------------------------------------

const Profile = () => {
  // const { authenticate, signup } = useMoralis();

  const {
    signup,
    authenticate,
    isAuthenticated,
    login,
    logout,
    isAuthenticating,
    user,
  } = useMoralis()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()

  const [password, setPassword] = useState()
  const [aadhar, setAadhar] = useState()

  const handleSignup = () => {
    signup(email, password).then(() => {
      window.location.reload()
    })
  }

  if (isAuthenticated) {
    return (
      <div>
        <NavbarC/>

        <h1 className='user-schema'> User with email {user.attributes.username} is logged in</h1>  
        <div className='button-it'  style={{ marginBottom:'70px' }}  >
 <Link to="/user">
 <Button
            variant="primary"
            type="button"
            className="profile-button"
            style={{ display: 'block', margin: 'auto', marginRight:'300px' }}  
          >
            Edit User Profile 
          </Button> 
          </Link>
      
        <Button
            variant="primary"
            onClick={() => logout()}
            type="button"
            className="profile-button"
            style={{ display: 'block', margin  : 'auto', marginLeft: '300px' }}
          >
            Log Out
          </Button>       

        </div>

        <div className='show-info'>
          <div>
            <h1> Username :</h1>
            <h1> Adhar No : </h1>
            <h1> DOB : </h1>
            <h1> Phone no : </h1>
            <h1> Address :  </h1>

          </div>
          <div>
           <h1>
           {user.attributes.username}
           </h1>
           <h1>
           {user.attributes.aadhar ? user.attributes.aadhar : '________'}
           </h1>
           <h1>
           {user.attributes.dob ? user.attributes.dob : '________'}
           </h1>
           <h1>
           {user.attributes.phone ? user.attributes.phone : '________'}
           </h1>  
           <h1>
           {user.attributes.useraddress ? user.attributes.useraddress : '________'}
           </h1>  
          </div>
        </div>


      </div>
    )
  }

  return (
    <>
      <NavbarC/>
      <Container className="profile-schema">
        <h1 className="profile-title">Sign Up</h1>
        <Form className="profile-form">
          <Form.Group className="mb-3">
            <Form.Label className="profile-lable">email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className='profile-lable'>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => handleSignup(email, password)}
            type="button"
            className="profile-button"
          >
            Signup
          </Button>

          <div></div>
        </Form>
      </Container>
      <LogIn />
      <Header/>

    </>
  )
}

export default Profile
