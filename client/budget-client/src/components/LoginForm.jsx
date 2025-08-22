import React from "react";
import { useState } from "react";
import { supabase } from '../SupabaseClient';
import '../Form.css';

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async () => {
        const {data,error} = await supabase.auth.signInWithPassword({
            email,
            password 
        });
        
        if(error) console.log(error);
        else console.log("Login success for user:", data.user);

    };

    return (
        <>
            <div class="formClass">
            <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} />
             

             <button onClick = {handleLogin}>Login</button>
       </div>
        </>
    )
  
}
export default LoginForm;