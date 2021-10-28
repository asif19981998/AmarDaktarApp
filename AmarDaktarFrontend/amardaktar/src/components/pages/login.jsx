import React, { useState } from 'react'
import { Redirect,Link } from 'react-router-dom';
import { useToasts } from "react-toast-notifications";
import "./login.css"
function Login(props) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [redirect,setredirect] = useState(false)
    const { addToast } = useToasts();
    const submit=async (e)=>{
        e.preventDefault()
        console.log("click submit button")
        const response = await fetch("http://localhost:5001/api/login",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:"include",
            body:JSON.stringify({
                email,
                password
            })
        });
        const content = await response.json();
       
        console.log(response)
        if(content.name){
            setredirect(true);
        }
        if(!content.name){
            addToast("Invaild Credential", { appearance: "error" });
        }
        
        props.setName(content.name) 
       
    }
    if(redirect){
        return <Redirect to="/" />
    }
    return (
        <div className="container">
             <form onSubmit={submit}>
   
   <h1 className="h3 mb-3 fw-normal">Please Login</h1>

   <div className="form-floating">
     <input type="email" className="form-control"  placeholder="name@example.com"
     onChange={e=>setemail(e.target.value)}/>
     <label htmlFor="floatingInput">Email address</label>
   </div>
   <div className="form-floating">
     <input type="password" className="form-control" placeholder="Password"
     onChange={e=>setpassword(e.target.value)}/>
     <label htmlFor="floatingPassword">Password</label>
   </div>

  
   <button style={{marginTop:"20px"}} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
   
 </form>
 <p style={{marginTop:"5px"}}>
    Are you New ? Please Sign Up 
    <Link
                to='/signUp'
                
    >
               <button style={{marginLeft:"4px"}} className="btn btn-danger">Sign-Up</button>
    </Link>
   
 </p> 
 <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

        </div>
    )
}

export default Login
