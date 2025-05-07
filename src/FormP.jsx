import React, { useState } from "react";

function FormP() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[passwordError,setPasswordError]=useState(false)
    const[emailError, setEmailError]=useState(false)
    const emailRegex=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    const handleEmail=(e)=>{
        let email=e.target.value
        if(!email.match(emailRegex)) setEmailError(true)
        else setEmailError(false)
    }
    const handlePassword=(e)=>{
        let pass=e.target.value
        if(pass.length<8)
        {
            setPasswordError(true)
        }
        else setPasswordError(false)

    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>This is Form</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                
                <form >                         
                    <label>Enter name:</label>
                    <input type="text" name="name" value={name} required></input>
                    <br/><br/>
                    <label>Enter Email:</label>
                    <input type="text" name="email" value={email} onChange={handleEmail} required></input>
                    <br/>                   
                    {emailError ? <span style={{color:"red"}}>Enter valid Email</span>: " "}
                    <br/>
                    <label>Enter Password:</label>
                    <input type="text" name="password" onChange={handlePassword} required></input>
                    <br/><br/>
                    {passwordError ? <span style={{color:"red"}}>Enter 8 or more characters</span>: " "}
                    <br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default FormP;