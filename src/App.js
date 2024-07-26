import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignIn, SignUp, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import ProtectedRoute from './client/router/ProtectedRoute';
import Home from './client/pages/Home';
import Service from './client/pages/Service';
import About from './client/pages/About';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      {/* header & navigation */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-blue-500 text-white shadow-md">
        <Link to="/" className="ml-4 hover:cursor-point"> <img src={logo} alt="Logo" className="h-8 w-auto" /> </Link>
        <div className="flex items-center">
          <Link to="/" className="mr-4 hover:underline"> Home </Link>
          <Link to="/service" className="mr-4 hover:underline"> Service </Link>
          <Link to="/about" className="mr-4 hover:underline"> About </Link>
          <SignedOut> <SignInButton className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded" /> </SignedOut>
          <SignedIn> <UserButton className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded" /> </SignedIn>
        </div>
      </nav>

      {/* route pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/service" element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          } 
        />
      </Routes>
      {/* footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-blue-500 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Built by Takumi Kato. All rights reserved.</p>
        <p>
          <Link to="/" className="hover:underline">Privacy Policy</Link> | 
          <Link to="/" className="hover:underline">Terms of Service</Link>
        </p>
      </footer>
    </Router>
  );
}

export default App;
