import React from 'react';
import { useUser } from '@clerk/clerk-react';

function Home() {
  const { user } = useUser();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>Welcome, {user?.fullName}!</p>
    </div>
  );
}

export default Home;
