import "./normal.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginForm from "./components/login/LoginForm";
import Signup from "./components/signup/SignUpForm";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./context/RequireAuth"; 
import UploadFile from "./pages/UploadFilePage" 
import FAQs from "./pages/FAQs";
// import VoiceRecognitionInput from "./components/VoiceInputRecognition";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Protected route: Home */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        {/* Public routes: Signup and Login */}
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/UploadFile" element={<UploadFile />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;


// import "./normal.css";
// import "./App.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import LoginForm from "./components/login/LoginForm";
// import Signup from "./components/signup/SignUpForm";
// import { Navigate, Route, Routes } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

// function App() {
//   const { currentUser } = useContext(AuthContext);

//   const RequireAuth = ({ children }) => {
//     return currentUser ? children : <Navigate to="auth/login" />;
//   };

//   return (
//     <div className="App">
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/SignUp" element={<Signup />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/LoginForm" element={<LoginForm />} />

//       </Routes>


//       {/* <Routes>
//         {/* <Route
//           // index
//           // exact
//           // path="/"
//           // element={
//           //   // <RequireAuth>
//           //     <Home />
//           //   // </RequireAuth>
//           // }

//         /> */}
//         {/* <Home /> */}
//         {/* <Login /> */}
//         {/* <LoginForm /> */}
//         {/* <Signup /> */}
//         {/* <Route exact path="auth/login" element={<Login />} />
//         <Route exact path="login" element={<LoginForm />} /> */}
//       {/* </Routes> */}
//     </div>
//   );
// }

// export default App;
