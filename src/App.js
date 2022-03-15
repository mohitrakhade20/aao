import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import './App.css';
import User from './pages/User';
import Metamask from './pages/Metamask';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="categories" element={<Categories />} />
    <Route path="user" element={<User />} />
    <Route path="meta" element={<Metamask />} />


  </Routes>
);

export default App;
