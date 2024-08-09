import React from 'react'

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/background Image.jpg"
        alt="Background"
        className="absolute h-full w-full object-cover"
      />
      <div className="relative flex items-center justify-center h-full">
        <p className="w-[800px] bg-transparent text-white bg-opacity-75 text-center p-8 rounded-lg text-2xl font-sans">
          This project is a fully functional authentication system built using
          the MERN stack (MongoDB, Express.js, React.js, and Node.js). It allows
          users to securely log in to the application using their Google
          account, leveraging OAuth 2.0 for authentication.
        </p>
      </div>
    </div>
  );
}

export default Home