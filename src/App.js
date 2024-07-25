import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignIn, SignUp, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import ProtectedRoute from './client/router/ProtectedRoute';
import Home from './client/pages/Home';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-500 text-white align-center">
        <Link to="/" className="mr-4"> Home </Link>
        <Link to="/about" className="mr-4"> About </Link>
        <SignedOut> <SignInButton /> </SignedOut>
        <SignedIn> <UserButton /> </SignedIn>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/about" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
