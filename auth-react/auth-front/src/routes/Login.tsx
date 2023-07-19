import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

export default function Login(){

    const [username,setUsername] =useState("");
    const [password,setPassword] =useState("");

    return (
        <DefaultLayout>

            <form action="">
                <h1>Login</h1>
                
                <label>Username</label>
                <input type="text" value={username} 
                onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>
                <input type="password" value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />

                <button>Login</button>
            </form>

        </DefaultLayout>
        
    )
}