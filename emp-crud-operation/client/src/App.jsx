import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import User from './component/getUser/User.jsx';
import AddUser from './component/add/Add.jsx';

import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<AddUser />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;