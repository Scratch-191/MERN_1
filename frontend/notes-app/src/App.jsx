import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const routes = (
  <Router>
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />
      <Route path='login' exact element={<Login />} />
      <Route path='/signup' exact element={<SignUp />} />


      <Route
  path="*"
  element={
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4 italic">404</h1>
      <p className="text-lg mb-8">aw snap! The page you're looking for doesn't exist.</p>
      <Link
        to="/dashboard"
        className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  }
/>
    </Routes>
  </Router>
)
const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App