// // import React, { useState } from 'react';
// // import { useNavigate } from "react-router-dom";

// // import { Mail, Lock, LogIn, AlertCircle, CheckCircle } from 'lucide-react';

// // const API = "http://localhost:8000";

// // export default function LoginPage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const [message, setMessage] = useState({ type: '', text: '' });

// //   const validateForm = () => {
// //     if (!email.trim()) {
// //       setMessage({ type: 'error', text: 'Email is required' });
// //       return false;
// //     }
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       setMessage({ type: 'error', text: 'Please enter a valid email' });
// //       return false;
// //     }
// //     if (!password) {
// //       setMessage({ type: 'error', text: 'Password is required' });
// //       return false;
// //     }
// //     return true;
// //   };

// //   const handleLogin = async () => {
// //     setMessage({ type: '', text: 'hii' });

// //     if (!validateForm()) {
// //       return;
// //     }

// //     setIsLoading(true);

// //     try {
// //       const response = await fetch(`${API}/login`, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({
// //           email1: email,
// //           pwd1: password
// //         })
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setMessage({ type: 'success', text: data.msg || 'Login successful!' });
// //         // Store user data or redirect
// //         console.log('User data:', data.user);
// //         // Clear form after delay
// //         setTimeout(() => {
// //           setEmail('');
// //           setPassword('');
// //           setMessage({ type: '', text: '' });
// //         }, 2000);
// //       } else {
// //         setMessage({ type: 'error', text: data.msg || 'Login failed' });
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       setMessage({ type: 'error', text: 'Network error. Please try again.' });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //       handleLogin();
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
// //       <div className="w-full max-w-md">
// //         {/* Header */}
// //         <div className="text-center mb-8">
// //           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
// //             <LogIn size={32} className="text-white" />
// //           </div>
// //           <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
// //           <p className="text-gray-600">Login to manage your tasks</p>
// //         </div>

// //         {/* Login Form */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-95">
// //           <div className="space-y-5">
// //             {/* Email Input */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Email
// //               </label>
// //               <div className="relative">
// //                 <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   onKeyPress={handleKeyPress}
// //                   placeholder="Enter your email"
// //                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
// //                 />
// //               </div>
// //             </div>

// //             {/* Password Input */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-2">
// //                 Password
// //               </label>
// //               <div className="relative">
// //                 <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                 <input
// //                   type="password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   onKeyPress={handleKeyPress}
// //                   placeholder="Enter your password"
// //                   className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
// //                 />
// //               </div>
// //             </div>

// //             {/* Forgot Password Link */}
// //             <div className="text-right">
// //               <button className="text-sm text-purple-500 hover:text-purple-600 font-medium transition-colors">
// //                 Forgot Password?
// //               </button>
// //             </div>

// //             {/* Message Display */}
// //             {message.text && (
// //               <div
// //                 className={`flex items-center gap-2 p-4 rounded-xl ${
// //                   message.type === 'success'
// //                     ? 'bg-green-50 text-green-700 border-2 border-green-200'
// //                     : 'bg-red-50 text-red-700 border-2 border-red-200'
// //                 }`}
// //               >
// //                 {message.type === 'success' ? (
// //                   <CheckCircle size={20} />
// //                 ) : (
// //                   <AlertCircle size={20} />
// //                 )}
// //                 <span className="text-sm font-medium">{message.text}</span>
// //               </div>
// //             )}

// //             {/* Submit Button */}
// //             <button
// //               onClick={handleLogin}
// //               disabled={isLoading}
// //               className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg ${
// //                 isLoading
// //                   ? 'bg-gray-400 cursor-not-allowed'
// //                   : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
// //               }`}
// //             >
// //               {isLoading ? 'Logging In...' : 'Login'}
// //             </button>
// //           </div>

// //           {/* Sign Up Link */}
// //           <div className="mt-6 text-center">
// //             <p className="text-gray-600">
// //               Don't have an account?{' '}
// //               <button className="text-purple-500 font-semibold hover:text-purple-600 transition-colors">
// //                 Sign Up
// //               </button>
// //             </p>
// //           </div>

// //           {/* Divider */}
// //           <div className="relative my-6">
// //             <div className="absolute inset-0 flex items-center">
// //               <div className="w-full border-t border-gray-200"></div>
// //             </div>
// //             <div className="relative flex justify-center text-sm">
// //               <span className="px-4 bg-white text-gray-500">Or continue with</span>
// //             </div>
// //           </div>

// //           {/* Social Login Buttons */}
// //           <div className="grid grid-cols-2 gap-3">
// //             <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all">
// //               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
// //                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
// //                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
// //                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
// //               </svg>
// //               <span className="text-sm font-medium text-gray-700">Google</span>
// //             </button>
// //             <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all">
// //               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                 <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
// //               </svg>
// //               <span className="text-sm font-medium text-gray-700">GitHub</span>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <p className="text-center text-gray-500 text-sm mt-6">
// //           Protected by reCAPTCHA and subject to Privacy Policy
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import { useNavigate, Link } from "react-router-dom";
// import { Mail, Lock, LogIn, AlertCircle, CheckCircle } from 'lucide-react';

// const API = "http://localhost:8000";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const handleLogin = async () => {
//     setMessage({ type: '', text: '' });

//     if (!email || !password) {
//       setMessage({ type: 'error', text: 'Please fill in all fields' });
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch(`${API}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email1: email, pwd1: password })
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('loggedIn', 'true');
//         localStorage.setItem('user', JSON.stringify(data.user || {}));
//         // setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
//         setTimeout(() => navigate('/todo'), );
//       } else {
//         setMessage({ type: 'error', text: data.msg || 'Login failed' });
//       }
//     } catch (err) {
//       setMessage({ type: 'error', text: 'Network error' });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-6">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">  
//           <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>
//         </div>
    

//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <div className="space-y-5">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full px-4 py-3 border rounded-xl"
//             />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full px-4 py-3 border rounded-xl"
//               onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
//             />

//             {message.text && (
//               <div className={`p-4 rounded-xl text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
//                 {message.text}
//               </div>
//             )}

//             <button
//               onClick={handleLogin}
//               disabled={isLoading}
//               className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold"
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </button>

//             <p className="text-center">
//               No account? <Link to="/signup" className="text-purple-600 font-bold">Sign Up</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// ============ LoginPage.jsx ============
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn, AlertCircle, CheckCircle } from 'lucide-react';

const API = "http://localhost:8000";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleLogin = async () => {
    setMessage({ type: '', text: '' });
    
    if (!email || !password) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
      });
      
      const data = await res.json();

      if (res.ok) {
        // Store user data including userId
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('userId', data.user.userId);
        
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
        setTimeout(() => navigate('/todo'), 500);
      } else {
        setMessage({ type: 'error', text: data.error || 'Login failed' });
      }
    } catch (err) {
      console.error('Login error:', err);
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
            <LogIn size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to manage your tasks</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-5">
            {/* Email Input */}
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
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
            </div>

            {/* Message Display */}
            {message.text && (
              <div
                className={`flex items-center gap-2 p-4 rounded-xl ${
                  message.type === 'success'
                    ? 'bg-green-50 text-green-700 border-2 border-green-200'
                    : 'bg-red-50 text-red-700 border-2 border-red-200'
                }`}
              >
                {message.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span className="text-sm font-medium">{message.text}</span>
              </div>
            )}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-white-500 hover:from-blue-600 hover:to-white-600'
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 font-semibold hover:text-blue-600 transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}