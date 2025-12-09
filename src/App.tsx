// import React from "react";
// import TodoApp from "./components/TodoApp.jsx";
// import SignUpPage from "./components/LoginApp.jsx"
// import LoginPage from "./components/LoginAPPP.jsx"

// function App() {
//   // return <TodoApp />;
//   // return <SignUpPage />;
//   return <LoginPage />;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import SignUpPage from "./components/LoginApp.jsx";
import TodoList from "./components/TodoApp.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;

