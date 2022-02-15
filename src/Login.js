import {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Login(){
   
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');

    return(
        <div className="container">
        
         <h4>Mail id</h4>
        <p><input type="email" value={email} onChange={(ev)=>{setEmail(ev.target.value);}}  /></p>
        <h4>Password</h4>
        <p><input type="password" value={password} onChange={(ev)=>{setPassword(ev.target.value);}}  /></p>
    
      
      
      <p><input type="submit" className="btn btn-primary" onClick={async ()=>{
          var fd=new FormData();
          
          fd.append("email",email);
          fd.append("password",password);
         
      
     
          var resp=await fetch("http://localhost:2000/user/login",{
          method:'POST',
          body:fd,
          
      });
          var data=await resp.json();
              if(data.msg=="invalid login"){
                alert("invalid login");
              }
              else{

                // localStorage.setItem("uid",data._id);
                // localStorage.setItem("uname",data.uname);
                // localStorage.setItem("uemail",data.email);
                // window.location='/';

                  // console.log(data);

                  localStorage.setItem("token",data.jwttoken)
                  window.location="/";

              }
      
      }} value="LOGIN"  /> </p>
      
        </div>
              );

}

export default Login;