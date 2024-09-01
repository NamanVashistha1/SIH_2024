import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../signup/signupform.css";
import SvgComponent from "../SvgComponent";
// import {  } from "react";
// import { AuthContext } from "../../context/AuthContext";


export default function Login() {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const [showLoginPassword, setShowLoginPassword] = useState(true);
   
   let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/loginUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json()
        // console.log(json);


        if (!json.success)
            alert('Enter Correct Credentials');

        if (json.success) {
            navigate("/", {state: 124 });
            localStorage.setItem("authToken", json.authToken);
            // localStorage.setItem("Email",  credentials.email );
            console.log(localStorage.getItem("authToken"));
        }
    }



    const onChanges = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
            <div className="signupFormContainer">
      <SvgComponent w={50} h={50} stroke="#202123" />
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
      <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChanges} /> 
        {/* <input
          type="email"
          name="loginEmail"
          id="loginEmail"
          placeholder="login email"
          value={credentials.email}
          onChange={onChanges} 
          required
        /> */}
        <div id="signupPassword">
        <input  type={showLoginPassword ? "text" : "password"}  id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChanges} />
          {/* <input
            type={showLoginPassword ? "text" : "password"}
            name="email"
            // id="loginPassword"
            placeholder="login password"
            value={credentials.password} 
            onChange={onChanges}
            required
            autoComplete="password"
          /> */}
          {/* eye icon */}
          <i onClick={() => setShowLoginPassword(!showLoginPassword)}>
            {!showLoginPassword ? (
              <svg
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="#202123"
                  strokeWidth={0.792}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7Z" />
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </g>
                <title>Show Password</title>
              </svg>
            ) : (
              <svg
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000"
              >
                <path
                  d="M20 14.834C21.308 13.332 22 12 22 12s-3.636-7-10-7a8.595 8.595 0 0 0-2 .236M12 9a2.995 2.995 0 0 1 3 3M3 3l18 18m-9-6a2.997 2.997 0 0 1-2.959-2.5M4.147 9c-.308.345-.585.682-.828 1C2.453 11.128 2 12 2 12s3.636 7 10 7c.341 0 .675-.02 1-.058"
                  stroke="#202123"
                  strokeWidth={0.768}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <title>Hide Password</title>
              </svg>
            )}
          </i>
        </div>

        <button type="submit">Continue</button>
        <Link to='/SignUp' className='btn btn-outline-warning'>New User</Link>
        {/* {errorMessage.trim() !== " " && <span>{errorMessage}</span>} */}
      </form>

    </div>
//         <div style={{margin: "0",
//           padding: 0,
//           backgroundColor: "#ff81009e",
//           color: "#fff",
//           fontFamily: "Arial, sans-serif" }}>
    
//             <div className="container" style={{display:"flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               height: "100vh"}}>
//              <div class="card" style={{width: "300px",
// 	backgroundColor: "rgb(69 69 72 / 87%)",
// 	padding: "20px",	borderRadius: "10px",
// 	borderTop: "4px solid #19d4ca",
// 	boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"}}>
//                  <h3 class="title" style={{color:"#19d4ca"}}>Sign In</h3>

//                 {/* <form onSubmit={handleSubmit}> */}
//                 <form onSubmit={handleSubmit} method="get">

//                     <div className="form-group">
//                                               <label htmlFor="exampleInputEmail1" style={{color:"white"}}>Email address</label>

//                         {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChanges} />
//                         {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                     </div>
//                     <div className="form-group my-2">
//                         <label htmlFor="exampleInputPassword1" style={{color:"white"}}>Password</label>
//                         <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChanges} />
//                     </div>
//                     <div class="buttons my-4">
//                     {/* <Link to='/Survey' type="submit" className='btn btn-outline-info mx-2'>Submit</Link> */}
//                     <button type="submit" className="mx-2 btn btn-outline-info">Submit</button>

// {/* <button type="submit" className="m-3 btn btn-success">Submit</button> */}
//                     <Link to='/SignUp' className='btn btn-outline-warning'>New User</Link>
//                     </div>
                    
//                 </form>
//                 </div>
//             </div>
//             </div>
       
    )
}




// import React, { useContext, useState } from "react";
// import "../signup/signupform.css";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { auth, goggleAuthProvider } from "../../firebase.config";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import SvgComponent from "../SvgComponent";

// const SignupForm = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showLoginPassword, setShowLoginPassword] = useState(true);

//   const { dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       let userCredential = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       const user = userCredential.user;
//       dispatch({ type: "LOGIN", payload: user });
//       // once user is signed in navigate them to the home page
//       navigate("/");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       setErrorMessage(errorMessage);
//     }
//   };

//   const handleSignInWithGoggle = async () => {
//     try {
//       let userCredential = await signInWithPopup(auth, goggleAuthProvider);
//       const user = userCredential.user;
//       dispatch({ type: "LOGIN", payload: user });
//       console.log("user", user);
//       // once user is signed in navigate them to the home page
//       navigate("/");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//       setErrorMessage(errorMessage);
//     }
//   };

//   return (
//     <div className="signupFormContainer">
//       <SvgComponent w={50} h={50} stroke="#202123" />
//       <h1>Welcome Back</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="loginEmail"
//           name="loginEmail"
//           id="loginEmail"
//           placeholder="login email"
//           value={loginEmail}
//           onChange={(e) => setLoginEmail(e.target.value)}
//           required
//         />
//         <div id="signupPassword">
//           <input
//             type={showLoginPassword ? "text" : "password"}
//             name="loginPassword"
//             id="loginPassword"
//             placeholder="login password"
//             value={loginPassword}
//             onChange={(e) => setLoginPassword(e.target.value)}
//             required
//             autoComplete="password"
//           />
//           {/* eye icon */}
//           <i onClick={() => setShowLoginPassword(!showLoginPassword)}>
//             {!showLoginPassword ? (
//               <svg
//                 width={26}
//                 height={26}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g
//                   stroke="#202123"
//                   strokeWidth={0.792}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7Z" />
//                   <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
//                 </g>
//                 <title>Show Password</title>
//               </svg>
//             ) : (
//               <svg
//                 width={26}
//                 height={26}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 stroke="#000"
//               >
//                 <path
//                   d="M20 14.834C21.308 13.332 22 12 22 12s-3.636-7-10-7a8.595 8.595 0 0 0-2 .236M12 9a2.995 2.995 0 0 1 3 3M3 3l18 18m-9-6a2.997 2.997 0 0 1-2.959-2.5M4.147 9c-.308.345-.585.682-.828 1C2.453 11.128 2 12 2 12s3.636 7 10 7c.341 0 .675-.02 1-.058"
//                   stroke="#202123"
//                   strokeWidth={0.768}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <title>Hide Password</title>
//               </svg>
//             )}
//           </i>
//         </div>
//         <button type="submit">Continue</button>
//         {errorMessage.trim() !== " " && <span>{errorMessage}</span>}
//       </form>

//     </div>
//   );
// };

// export default SignupForm;
