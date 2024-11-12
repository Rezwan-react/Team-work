import React, { useState, useEffect } from 'react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (formData.password === formData.confirmPassword) {
        setIsSignUp(false); // Switch to login form after sign-up
      } else {
        alert('Passwords do not match!');
      }
    } else {
      setIsLoggedIn(true); // Simulate successful login
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Web Speech API for voice message
      const message = new SpeechSynthesisUtterance("Login successful! Welcome!");
      window.speechSynthesis.speak(message);
    }
  }, [isLoggedIn]);

  // If the user is logged in, show success page with animation
  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center animate-bounce">
          <h2 className="text-4xl font-bold mb-4">Success!</h2>
          <p className="text-xl">You have successfully logged in!</p>
        </div>
      </div>
    );
  }

  return (
   <div className=' flex h-screen justify-center items-center'>
     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6">
        {isSignUp ? 'Sign Up' : 'Login'}
      </h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter your name"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Enter your password"
          />
        </div>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Confirm your password"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500"
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p className="mt-4 text-center">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-600 hover:underline"
        >
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
   </div>
  );
};

export default Login;
