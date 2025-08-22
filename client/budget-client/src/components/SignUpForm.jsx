import { useState } from "react";
import { supabase } from "../SupabaseClient";

  const handleSignup = async () =>{
    const {data, error} = await supabase.auth.signUp({
        
})
}


function SignUpForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return(
        <>
              <div class="formClass">
            <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} />
            <label>First Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} />
             <label>Last Name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} />    
            
             

             <button onClick = {handleSignup}>Signup</button>
       </div>
        </>
    );
}
export default SignUpForm;