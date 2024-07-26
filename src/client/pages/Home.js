import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-28">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Business Registry!</h1>
      
      <p className="text-lg text-center mb-6">
        Japan is home to a vibrant array of businesses, and we understand the importance of making your website both fashionable and valuable.
      </p>

      <p className="text-lg text-center mb-6">
        Our services aim to help businesses like yours shine in the digital landscape. We provide:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">✨ A platform for businesses to register and gain visibility.</li>
        <li className="mb-2">✨ User-friendly features for browsing different businesses.</li>
        <li className="mb-2">✨ Tailored services to enhance your online presence.</li>
        <li className="mb-2">✨ Support for building a fashionable and valuable website.</li>
      </ul>

      <p className="text-lg text-center mb-6">
        We’re here to support you on your journey to success! 🎉
      </p>

      <Link to="/service">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-2xl font-semibold hover:bg-blue-600 transition duration-300">
          Join Us Today!
        </button>
      </Link>

      <p className="text-lg text-center mt-5">
        Together, let's take your business to the next level. Feel free to register your business with us and explore the vast opportunities our platform offers! 😊
      </p>
    </div>
  );
}

export default Home;
