// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from "react-router-dom";

// // // import { Plus, Trash2, Check, Edit2, X } from 'lucide-react';

// // // const API = "http://localhost:8000";

// // // export default function TodoList() {
// // //     const navigate = useNavigate();

// // // useEffect(() => {
// // //   const isLoggedIn = localStorage.getItem("loggedIn");
// // //   if (!isLoggedIn) {
// // //     navigate("/");
// // //   }
// // // }, []);

// // //   const [todos, setTodos] = useState([]);
// // //   const [inputValue, setInputValue] = useState('');
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [editValue, setEditValue] = useState('');

// // //   // Load todos on mount
// // //   useEffect(() => {
// // //     loadTodos();
// // //   }, []);

// // //   const loadTodos = async () => {
// // //     try {
// // //       const res = await fetch(`${API}/show`);
// // //       const data = await res.json();
// // //       setTodos(data.todos || []);
// // //     } catch (error) {
// // //       console.error('Error loading todos:', error);
// // //     }
// // //   };

// // //   const addTask = async () => {
// // //     if (inputValue.trim()) {
// // //       try {
// // //         await fetch(`${API}/create/${encodeURIComponent(inputValue)}/false`);
// // //         setInputValue('');
// // //         loadTodos();
// // //       } catch (error) {
// // //         console.error('Error creating todo:', error);
// // //       }
// // //     }
// // //   };

// // //   const toggleTask = async (todo) => {
// // //     try {
// // //       await fetch(`${API}/update/${todo._id}`, {
// // //         method: 'PUT',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ completed1: !todo.completed1 })
// // //       });
// // //       loadTodos();
// // //     } catch (error) {
// // //       console.error('Error updating todo:', error);
// // //     }
// // //   };

// // //   const deleteTask = async (id) => {
// // //     try {
// // //       await fetch(`${API}/delete/${id}`);
// // //       loadTodos();
// // //     } catch (error) {
// // //       console.error('Error deleting todo:', error);
// // //     }
// // //   };

// // //   const startEdit = (todo) => {
// // //     setEditingId(todo._id);
// // //     setEditValue(todo.desc1);
// // //   };

// // //   const saveEdit = async (id) => {
// // //     if (editValue.trim()) {
// // //       try {
// // //         await fetch(`${API}/update/${id}`, {
// // //           method: 'PUT',
// // //           headers: { 'Content-Type': 'application/json' },
// // //           body: JSON.stringify({ desc1: editValue })
// // //         });
// // //         setEditingId(null);
// // //         setEditValue('');
// // //         loadTodos();
// // //       } catch (error) {
// // //         console.error('Error updating todo:', error);
// // //       }
// // //     }
// // //   };

// // //   const cancelEdit = () => {
// // //     setEditingId(null);
// // //     setEditValue('');
// // //   };

// // //   const handleKeyPress = (e) => {
// // //     if (e.key === 'Enter') {
// // //       addTask();
// // //     }
// // //   };

// // //   const handleEditKeyPress = (e, id) => {
// // //     if (e.key === 'Enter') {
// // //       saveEdit(id);
// // //     } else if (e.key === 'Escape') {
// // //       cancelEdit();
// // //     }
// // //   };

// // //   const completedCount = todos.filter(t => t.completed1).length;
// // //   const totalCount = todos.length;

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-white-50 p-6 flex items-center justify-center">
// // //       <div className="w-full max-w-2xl">
// // //         {/* Header */}
// // //         <div className="text-center mb-8">
// // //           <h1 className="text-4xl font-bold text-gray-800 mb-2">My Tasks</h1>
// // //           <p className="text-gray-600">
// // //             {completedCount} of {totalCount} completed
// // //           </p>
// // //         </div>

// // //         {/* Card Container */}
// // //         <div className="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-sm bg-opacity-95">
// // //           {/* Input Section */}
// // //           <div className="flex gap-3 mb-6">
// // //             <input
// // //               type="text"
// // //               value={inputValue}
// // //               onChange={(e) => setInputValue(e.target.value)}
// // //               onKeyPress={handleKeyPress}
// // //               placeholder="Add a new task..."
// // //               className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-400 transition-colors"
// // //             />
// // //             <button
// // //               onClick={addTask}
// // //               className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
// // //             >
// // //               <Plus size={20} />
// // //               Add
// // //             </button>
// // //           </div>

// // //           {/* Tasks List */}
// // //           <div className="space-y-3">
// // //             {todos.length === 0 ? (
// // //               <div className="text-center py-12 text-gray-400">
// // //                 <p className="text-lg">No tasks yet!</p>
// // //                 <p className="text-sm">Add your first task to get started</p>
// // //               </div>
// // //             ) : (
// // //               todos.map((todo) => (
// // //                 <div
// // //                   key={todo._id}
// // //                   className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
// // //                     todo.completed1
// // //                       ? 'bg-gray-50 border-gray-200'
// // //                       : 'bg-white border-purple-100 hover:border-purple-200'
// // //                   }`}
// // //                 >
// // //                   <button
// // //                     onClick={() => toggleTask(todo)}
// // //                     className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
// // //                       todo.completed1
// // //                         ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent'
// // //                         : 'border-gray-300 hover:border-purple-400'
// // //                     }`}
// // //                   >
// // //                     {todo.completed1 && <Check size={16} className="text-white" />}
// // //                   </button>
                  
// // //                   {editingId === todo._id ? (
// // //                     <input
// // //                       type="text"
// // //                       value={editValue}
// // //                       onChange={(e) => setEditValue(e.target.value)}
// // //                       onKeyDown={(e) => handleEditKeyPress(e, todo._id)}
// // //                       className="flex-1 px-3 py-1 border-2 border-purple-400 rounded-lg focus:outline-none"
// // //                       autoFocus
// // //                     />
// // //                   ) : (
// // //                     <span
// // //                       className={`flex-1 transition-all ${
// // //                         todo.completed1
// // //                           ? 'text-gray-400 line-through'
// // //                           : 'text-gray-800'
// // //                       }`}
// // //                     >
// // //                       {todo.desc1}
// // //                     </span>
// // //                   )}
                  
// // //                   <div className="flex gap-2">
// // //                     {editingId === todo._id ? (
// // //                       <>
// // //                         <button
// // //                           onClick={() => saveEdit(todo._id)}
// // //                           className="flex-shrink-0 text-green-500 hover:text-green-600 transition-colors p-1"
// // //                           title="Save"
// // //                         >
// // //                           <Check size={18} />
// // //                         </button>
// // //                         <button
// // //                           onClick={cancelEdit}
// // //                           className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1"
// // //                           title="Cancel"
// // //                         >
// // //                           <X size={18} />
// // //                         </button>
// // //                       </>
// // //                     ) : (
// // //                       <>
// // //                         <button
// // //                           onClick={() => startEdit(todo)}
// // //                           className="flex-shrink-0 text-gray-400 hover:text-blue-500 transition-colors p-1"
// // //                           title="Edit"
// // //                         >
// // //                           <Edit2 size={18} />
// // //                         </button>
// // //                         <button
// // //                           onClick={() => deleteTask(todo._id)}
// // //                           className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors p-1"
// // //                           title="Delete"
// // //                         >
// // //                           <Trash2 size={18} />
// // //                         </button>
// // //                       </>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               ))
// // //             )}
// // //           </div>

// // //           {/* Progress Bar */}
// // //           {todos.length > 0 && (
// // //             <div className="mt-6 pt-6 border-t border-gray-200">
// // //               <div className="flex items-center gap-3">
// // //                 <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
// // //                   <div
// // //                     className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300"
// // //                     style={{ width: `${(completedCount / totalCount) * 100}%` }}
// // //                   />
// // //                 </div>
// // //                 <span className="text-sm font-semibold text-gray-600">
// // //                   {Math.round((completedCount / totalCount) * 100)}%
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // src/components/TodoList.jsx
// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from "react-router-dom";
// // import { Plus, Trash2, Check, Edit2, X, LogOut } from 'lucide-react';

// // const API = "http://localhost:8000";

// // export default function TodoList() {
// //   const navigate = useNavigate();
// //   const [todos, setTodos] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [editingId, setEditingId] = useState(null);
// //   const [editValue, setEditValue] = useState('');

// //   // PROTECTED ROUTE - Redirect if not logged in
// //   useEffect(() => {
// //     if (!localStorage.getItem('loggedIn')) {
// //       navigate('/');
// //     }
// //   }, [navigate]);

// //   // Load todos
// //   const loadTodos = async () => {
// //     try {
// //       const res = await fetch(`${API}/show`);
// //       const data = await res.json();
// //       setTodos(data.todos || []);
// //     } catch (err) {
// //       console.error("Failed to load todos");
// //     }
// //   };

// //   useEffect(() => {
// //     loadTodos();
// //   }, []);

// //   const addTask = async () => {
// //     if (!inputValue.trim()) return;
// //     await fetch(`${API}/create/${encodeURIComponent(inputValue)}/false`);
// //     setInputValue('');
// //     loadTodos();
// //   };

// //   const toggleTask = async (todo) => {
// //     await fetch(`${API}/update/${todo._id}`, {
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ completed1: !todo.completed1 })
// //     });
// //     loadTodos();
// //   };

// //   const deleteTask = async (id) => {
// //     await fetch(`${API}/delete/${id}`);
// //     loadTodos();
// //   };

// //   const startEdit = (todo) => {
// //     setEditingId(todo._id);
// //     setEditValue(todo.desc1);
// //   };

// //   const saveEdit = async (id) => {
// //     if (!editValue.trim()) return;
// //     await fetch(`${API}/update/${id}`, {
// //       method: 'PUT',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ desc1: editValue })
// //     });
// //     setEditingId(null);
// //     setEditValue('');
// //     loadTodos();
// //   };

// //   const logout = () => {
// //     localStorage.removeItem('loggedIn');
// //     localStorage.removeItem('user');
// //     navigate('/');
// //   };

// //   const completedCount = todos.filter(t => t.completed1).length;

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
// //       <div className="max-w-2xl mx-auto">
// //         <div className="text-center mb-8">
// //           <h1 className="text-4xl font-bold text-gray-800">My Tasks</h1>
// //           <p className="text-gray-600 mt-2">
// //             {completedCount} of {todos.length} completed
// //           </p>
// //           <button
// //             onClick={logout}
// //             className="mt-4 text-sm text-red-600 hover:text-red-800 flex items-center gap-2 mx-auto"
// //           >
// //             <LogOut size={18} /> Logout
// //           </button>
// //         </div>

// //         <div className="bg-white rounded-2xl shadow-xl p-8">
// //           <div className="flex gap-3 mb-6">
// //             <input
// //               type="text"
// //               value={inputValue}
// //               onChange={(e) => setInputValue(e.target.value)}
// //               onKeyPress={(e) => e.key === 'Enter' && addTask()}
// //               placeholder="Add a new task..."
// //               className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition"
// //             />
// //             <button
// //               onClick={addTask}
// //               className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg transition"
// //             >
// //               <Plus size={20} /> Add
// //             </button>
// //           </div>

// //           <div className="space-y-3">
// //             {todos.length === 0 ? (
// //               <p className="text-center text-gray-500 py-10">No tasks yet! Add one above</p>
// //             ) : (
// //               todos.map((todo) => (
// //                 <div
// //                   key={todo._id}
// //                   className={`flex items-center gap-4 p-4 rounded-xl border-2 transition ${
// //                     todo.completed1 ? 'bg-gray-50 border-gray-200' : 'bg-white border-purple-100'
// //                   }`}
// //                 >
// //                   <button
// //                     onClick={() => toggleTask(todo)}
// //                     className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
// //                       todo.completed1
// //                         ? 'bg-purple-500 text-white'
// //                         : 'border-2 border-gray-300'
// //                     }`}
// //                   >
// //                     {todo.completed1 && <Check size={16} />}
// //                   </button>

// //                   {editingId === todo._id ? (
// //                     <input
// //                       type="text"
// //                       value={editValue}
// //                       onChange={(e) => setEditValue(e.target.value)}
// //                       onKeyDown={(e) => {
// //                         if (e.key === 'Enter') saveEdit(todo._id);
// //                         if (e.key === 'Escape') setEditingId(null);
// //                       }}
// //                       className="flex-1 px-3 py-1 border-2 border-purple-400 rounded-lg"
// //                       autoFocus
// //                     />
// //                   ) : (
// //                     <span className={`flex-1 ${todo.completed1 ? 'line-through text-gray-500' : 'text-gray-800'}`}>
// //                       {todo.desc1}
// //                     </span>
// //                   )}

// //                   <div className="flex gap-2">
// //                     {editingId === todo._id ? (
// //                       <>
// //                         <button onClick={() => saveEdit(todo._id)} className="text-green-600">
// //                           <Check size={18} />
// //                         </button>
// //                         <button onClick={() => setEditingId(null)} className="text-gray-500">
// //                           <X size={18} />
// //                         </button>
// //                       </>
// //                     ) : (
// //                       <>
// //                         <button onClick={() => startEdit(todo)} className="text-blue-600">
// //                           <Edit2 size={18} />
// //                         </button>
// //                         <button onClick={() => deleteTask(todo._id)} className="text-red-600">
// //                           <Trash2 size={18} />
// //                         </button>
// //                       </>
// //                     )}
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </div>

// //           {todos.length > 0 && (
// //             <div className="mt-8 pt-6 border-t border-gray-200">
// //               <div className="flex items-center justify-between text-sm text-gray-600">
// //                 <span>{completedCount} completed</span>
// //                 <span>{todos.length} total</span>
// //               </div>
// //               <div className="mt-3 bg-gray-200 rounded-full h-3 overflow-hidden">
// //                 <div
// //                   className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
// //                   style={{ width: `${(completedCount / todos.length) * 100 || 0}%` }}
// //                 />
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Plus, Trash2, Check, Edit2, X, LogOut } from 'lucide-react';

// const API = "http://localhost:8000";

// export default function TodoList() {
//   const navigate = useNavigate();
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const [editValue, setEditValue] = useState('');
//   const [userId, setUserId] = useState(null);
//   const [username, setUsername] = useState('');

//   // PROTECTED ROUTE - Redirect if not logged in
//   useEffect(() => {
//     const loggedIn = localStorage.getItem('loggedIn');
//     const storedUserId = localStorage.getItem('userId');
//     const userStr = localStorage.getItem('user');

//     if (!loggedIn || !storedUserId) {
//       navigate('/');
//       return;
//     }

//     setUserId(storedUserId);
    
//     if (userStr) {
//       try {
//         const user = JSON.parse(userStr);
//         setUsername(user.username || 'User');
//       } catch (e) {
//         console.error('Error parsing user data');
//       }
//     }
//   }, [navigate]);

//   // Load todos for this user
//   const loadTodos = async () => {
//     if (!userId) return;

//     try {
//       const res = await fetch(`${API}/todos/${userId}`);
//       const data = await res.json();
//       setTodos(data.todos || []);
//     } catch (err) {
//       console.error("Failed to load todos:", err);
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       loadTodos();
//     }
//   }, [userId]);

//   const addTask = async () => {
//     if (!inputValue.trim() || !userId) return;

//     try {
//       const res = await fetch(`${API}/todos/create`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           userId: userId,
//           description: inputValue
//         })
//       });

//       if (res.ok) {
//         setInputValue('');
//         loadTodos();
//       }
//     } catch (err) {
//       console.error("Failed to create todo:", err);
//     }
//   };

//   const toggleTask = async (todo) => {
//     try {
//       await fetch(`${API}/todos/toggle/${todo._id}`, {
//         method: 'PATCH'
//       });
//       loadTodos();
//     } catch (err) {
//       console.error("Failed to toggle todo:", err);
//     }
//   };

//   const deleteTask = async (id) => {
//     try {
//       await fetch(`${API}/todos/delete/${id}`, {
//         method: 'DELETE'
//       });
//       loadTodos();
//     } catch (err) {
//       console.error("Failed to delete todo:", err);
//     }
//   };

//   const startEdit = (todo) => {
//     setEditingId(todo._id);
//     setEditValue(todo.description);
//   };

//   const saveEdit = async (id) => {
//     if (!editValue.trim()) return;

//     try {
//       await fetch(`${API}/todos/update/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ description: editValue })
//       });
//       setEditingId(null);
//       setEditValue('');
//       loadTodos();
//     } catch (err) {
//       console.error("Failed to update todo:", err);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('loggedIn');
//     localStorage.removeItem('user');
//     localStorage.removeItem('userId');
//     navigate('/');
//   };

//   const completedCount = todos.filter(t => t.completed).length;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-white-50 p-6">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
            
//           <h1 className="text-4xl font-bold text-gray-800">
            
//             {username}'s Tasks
//           </h1>
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-white-500 rounded-2xl mb-4 shadow-lg">
//             <User size={32} className="text-white" />
//           </div>
//           <p className="text-gray-600 mt-2">
//             {completedCount} of {todos.length} completed
//           </p>
//           <button
//             onClick={logout}
//             className="mt-4 text-sm text-red-600 hover:text-red-800 flex items-center gap-2 mx-auto transition-colors"
//           >
//             <LogOut size={18} /> Logout
//           </button>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <div className="flex gap-3 mb-6">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && addTask()}
//               placeholder="Add a new task..."
//               className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
//             />
//             <button
//               onClick={addTask}
//               className="bg-gradient-to-r from-blue-500 to-white-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg transition"
//             >
//               <Plus size={20} /> Add
//             </button>
//           </div>

//           <div className="space-y-3">
//             {todos.length === 0 ? (
//               <p className="text-center text-gray-500 py-10">No tasks yet! Add one above</p>
//             ) : (
//               todos.map((todo) => (
//                 <div
//                   key={todo._id}
//                   className={`flex items-center gap-4 p-4 rounded-xl border-2 transition ${
//                     todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-blue-100'
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleTask(todo)}
//                     className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
//                       todo.completed
//                         ? 'bg-blue-500 border-blue-500 text-white'
//                         : 'border-gray-300 hover:border-blue-400'
//                     }`}
//                   >
//                     {todo.completed && <Check size={16} />}
//                   </button>

//                   {editingId === todo._id ? (
//                     <input
//                       type="text"
//                       value={editValue}
//                       onChange={(e) => setEditValue(e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Enter') saveEdit(todo._id);
//                         if (e.key === 'Escape') setEditingId(null);
//                       }}
//                       className="flex-1 px-3 py-1 border-2 border-blue-400 rounded-lg focus:outline-none"
//                       autoFocus
//                     />
//                   ) : (
//                     <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
//                       {todo.description}
//                     </span>
//                   )}

//                   <div className="flex gap-2">
//                     {editingId === todo._id ? (
//                       <>
//                         <button onClick={() => saveEdit(todo._id)} className="text-green-600 hover:text-green-700 transition">
//                           <Check size={18} />
//                         </button>
//                         <button onClick={() => setEditingId(null)} className="text-gray-500 hover:text-gray-700 transition">
//                           <X size={18} />
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button onClick={() => startEdit(todo)} className="text-blue-600 hover:text-blue-700 transition">
//                           <Edit2 size={18} />
//                         </button>
//                         <button onClick={() => deleteTask(todo._id)} className="text-red-600 hover:text-red-700 transition">
//                           <Trash2 size={18} />
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {todos.length > 0 && (
//             <div className="mt-8 pt-6 border-t border-gray-200">
//               <div className="flex items-center justify-between text-sm text-gray-600">
//                 <span>{completedCount} completed</span>
//                 <span>{todos.length} total</span>
//               </div>
//               <div className="mt-3 bg-gray-200 rounded-full h-3 overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-blue-500 to-white-500 transition-all duration-500"
//                   style={{ width: `${(completedCount / todos.length) * 100 || 0}%` }}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, Check, Edit2, X, LogOut, User } from 'lucide-react';

const API = "http://localhost:8000";

export default function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState('');

  // PROTECTED ROUTE - Redirect if not logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    const storedUserId = localStorage.getItem('userId');
    const userStr = localStorage.getItem('user');

    if (!loggedIn || !storedUserId) {
      navigate('/');
      return;
    }

    setUserId(storedUserId);
    
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUsername(user.username || 'User');
      } catch (e) {
        console.error('Error parsing user data');
      }
    }
  }, [navigate]);

  // Load todos for this user
  const loadTodos = async () => {
    if (!userId) return;

    try {
      const res = await fetch(`${API}/todos/${userId}`);
      const data = await res.json();
      setTodos(data.todos || []);
    } catch (err) {
      console.error("Failed to load todos:", err);
    }
  };

  useEffect(() => {
    if (userId) {
      loadTodos();
    }
  }, [userId]);

  const addTask = async () => {
    if (!inputValue.trim() || !userId) return;

    try {
      const res = await fetch(`${API}/todos/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          description: inputValue
        })
      });

      if (res.ok) {
        setInputValue('');
        loadTodos();
      }
    } catch (err) {
      console.error("Failed to create todo:", err);
    }
  };

  const toggleTask = async (todo) => {
    try {
      await fetch(`${API}/todos/toggle/${todo._id}`, {
        method: 'PATCH'
      });
      loadTodos();
    } catch (err) {
      console.error("Failed to toggle todo:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API}/todos/delete/${id}`, {
        method: 'DELETE'
      });
      loadTodos();
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo._id);
    setEditValue(todo.description);
  };

  const saveEdit = async (id) => {
    if (!editValue.trim()) return;

    try {
      await fetch(`${API}/todos/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: editValue })
      });
      setEditingId(null);
      setEditValue('');
      loadTodos();
    } catch (err) {
      console.error("Failed to update todo:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    navigate('/');
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-white-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
            {/* User Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-white-500 rounded-2xl my-4 shadow-lg">
            <User size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            {username}'s Tasks
          </h1>
          <p className="text-gray-600 mt-2">
            {completedCount} of {todos.length} completed
          </p>
          <button
            onClick={logout}
            className="mt-4 text-sm text-red-600 hover:text-red-800 flex items-center gap-2 mx-auto transition-colors"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />
            <button
              onClick={addTask}
              className="bg-gradient-to-r from-blue-500 to-white-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:shadow-lg transition"
            >
              <Plus size={20} /> Add
            </button>
          </div>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-10">No tasks yet! Add one above</p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo._id}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition ${
                    todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-blue-100'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(todo)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                      todo.completed
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {todo.completed && <Check size={16} />}
                  </button>

                  {editingId === todo._id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEdit(todo._id);
                        if (e.key === 'Escape') setEditingId(null);
                      }}
                      className="flex-1 px-3 py-1 border-2 border-blue-400 rounded-lg focus:outline-none"
                      autoFocus
                    />
                  ) : (
                    <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {todo.description}
                    </span>
                  )}

                  <div className="flex gap-2">
                    {editingId === todo._id ? (
                      <>
                        <button onClick={() => saveEdit(todo._id)} className="text-green-600 hover:text-green-700 transition">
                          <Check size={18} />
                        </button>
                        <button onClick={() => setEditingId(null)} className="text-gray-500 hover:text-gray-700 transition">
                          <X size={18} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEdit(todo)} className="text-blue-600 hover:text-blue-700 transition">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => deleteTask(todo._id)} className="text-red-600 hover:text-red-700 transition">
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {todos.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{completedCount} completed</span>
                <span>{todos.length} total</span>
              </div>
              <div className="mt-3 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-white-500 transition-all duration-500"
                  style={{ width: `${(completedCount / todos.length) * 100 || 0}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}