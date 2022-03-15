import React from 'react'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'
import { Container, Nav, Navbar, Form , Button} from 'react-bootstrap'
import "../App.css"
import NavbarC from './Navbar'

const Metamask   = () => {
  // const { authenticate, signup } = useMoralis();

  const { signup, authenticate, user,logout, setUserData, isAuthenticated } = useMoralis()
  const [name, setName] = useState(user.attributes.email)
  const [email, setEmail] = useState(user.attributes.username)
  const [useraddress, setUseraddress] = useState(user.attributes.useraddress)
  const [phone, setPhone] = useState(user.attributes.phone)
  const [dob, setDob] = useState(user.attributes.dob)
  const [password, setPassword] = useState()
  const [aadhar, setAadhar] = useState(user.attributes.useraddress)

  if (isAuthenticated) {
    return (
      <>
      <NavbarC/>
  
      <div>
      <h1>Welcome {user.get("username")}</h1>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
    </>
    );
  }

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
      <Button onClick={() => authenticate()}>Login</Button>
    </>
  )
}

export default Metamask
