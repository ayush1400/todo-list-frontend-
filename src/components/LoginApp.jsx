// import React, { useState } from 'react';
// import { User, Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react';

// const API = "http://localhost:8000";

// export default function SignUpPage() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const validateForm = () => {
//     if (!username.trim()) {
//       setMessage({ type: 'error', text: 'Username is required' });
//       return false;
//     }
//     if (username.length < 3) {
//       setMessage({ type: 'error', text: 'Username must be at least 3 characters' });
//       return false;
//     }
//     if (!email.trim()) {
//       setMessage({ type: 'error', text: 'Email is required' });
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage({ type: 'error', text: 'Please enter a valid email' });
//       return false;
//     }
//     if (!password) {
//       setMessage({ type: 'error', text: 'Password is required' });
//       return false;
//     }
//     if (password.length < 6) {
//       setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
//       return false;
//     }
//     if (password !== confirmPassword) {
//       setMessage({ type: 'error', text: 'Passwords do not match' });
//       return false;
//     }
//     return true;
//   };

//   const handleSignUp = async () => {
//     setMessage({ type: '', text: '' });

//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await fetch(
//         `${API}/signup/${encodeURIComponent(username)}/${encodeURIComponent(email)}/${encodeURIComponent(password)}`
//       );
//       const data = await response.json();

//       if (response.ok) {
//         setMessage({ type: 'success', text: 'Account created successfully!' });
//         // Clear form
//         setTimeout(() => {
//           setUsername('');
//           setEmail('');
//           setPassword('');
//           setConfirmPassword('');
//           setMessage({ type: '', text: '' });
//         }, 2000);
//       } else {
//         setMessage({ type: 'error', text: data.error || 'Sign up failed' });
//       }
//     } catch (error) {
//       console.error('Error during sign up:', error);
//       setMessage({ type: 'error', text: 'Network error. Please try again.' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSignUp();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
//             <User size={32} className="text-white" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Create Account</h1>
//           <p className="text-gray-600">Sign up to get started with your tasks</p>
//         </div>

//         {/* Sign Up Form */}
//         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
//           <div className="space-y-5">
//             {/* Username Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Username
//               </label>
//               <div className="relative">
//                 <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Enter your username"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Email Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email
//               </label>
//               <div className="relative">
//                 <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Enter your email"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Create a password"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Confirm Password Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Confirm your password"
//                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
//                 />
//               </div>
//             </div>

//             {/* Message Display */}
//             {message.text && (
//               <div
//                 className={`flex items-center gap-2 p-4 rounded-xl ${
//                   message.type === 'success'
//                     ? 'bg-green-50 text-green-700 border-2 border-green-200'
//                     : 'bg-red-50 text-red-700 border-2 border-red-200'
//                 }`}
//               >
//                 {message.type === 'success' ? (
//                   <CheckCircle size={20} />
//                 ) : (
//                   <AlertCircle size={20} />
//                 )}
//                 <span className="text-sm font-medium">{message.text}</span>
//               </div>
//             )}

//             {/* Submit Button */}
//             <button
//               onClick={handleSignUp}
//               disabled={isLoading}
//               className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg ${
//                 isLoading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
//               }`}
//             >
//               {isLoading ? 'Creating Account...' : 'Sign Up'}
//             </button>
//           </div>

//           {/* Sign In Link */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <button className="text-purple-500 font-semibold hover:text-purple-600 transition-colors">
//                 Sign In
//               </button>
//             </p>
//           </div>
//         </div>

//         {/* Footer */}
//         <p className="text-center text-gray-500 text-sm mt-6">
//           By signing up, you agree to our Terms and Privacy Policy
//         </p>
//       </div>
//     </div>
//   );
// }
// src/components/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react';

const API = "http://localhost:8000";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const validateForm = () => {
    if (!username.trim()) {
      setMessage({ type: 'error', text: 'Username is required' });
      return false;
    }
    if (username.length < 3) {
      setMessage({ type: 'error', text: 'Username must be at least 3 characters' });
      return false;
    }
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Email is required' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email' });
      return false;
    }
    if (!password) {
      setMessage({ type: 'error', text: 'Password is required' });
      return false;
    }
    if (password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return false;
    }
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    setMessage({ type: '', text: '' });

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Account created! Redirecting to login...' });
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setMessage({ type: 'error', text: data.error || 'Sign up failed' });
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-white-500 rounded-2xl mb-4 shadow-lg">
            <User size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Sign up to get started with your tasks</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <div className="relative">
                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                  onKeyPress={(e) => e.key === 'Enter' && handleSignUp()}
                />
              </div>
            </div>

            {message.text && (
              <div
                className={`flex items-center gap-2 p-4 rounded-xl ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-700 border-2 border-green-200'
                    : 'bg-red-50 text-red-700 border-2 border-red-200'
                }`}
              >
                {message.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span className="text-sm font-medium">{message.text}</span>
              </div>
            )}

            <button
              onClick={handleSignUp}
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-white-500 hover:from-blue-600 hover:to-white-600'
              }`}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 font-semibold hover:text-blue-600 transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}