import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import { Link } from "react-router-dom";

function InitialHome() {
  const [form, setForm] = useState(null);



  return (
    <>
      <h1>Budget Ally</h1>
      <p>The perfect app for your budgeting needs!</p>
      <Link to = {"/signup"}><button >Signup</button></Link>
      <Link to = {"/login"}><button >Login</button></Link>
      

 
  
    </>
  );
}

export default InitialHome;
