import {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Register(){
    let[name,setName]=useState('');
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');

    return(
        <div className="container">
        <h4>Full name</h4>
        <p><input type="text" value={name} onChange={(ev)=>{setName(ev.target.value);}}  /></p>
         <h4>Mail id</h4>
        <p><input type="email" value={email} onChange={(ev)=>{setEmail(ev.target.value);}}  /></p>
        <h4>Password</h4>
        <p><input type="password" value={password} onChange={(ev)=>{setPassword(ev.target.value);}}  /></p>
    
      
      
      <p><input type="submit" className="btn btn-primary" onClick={async ()=>{
          var fd=new FormData();
          fd.append("name",name);
          fd.append("email",email);
          fd.append("password",password);
         
      
     
          var resp=await fetch("http://localhost:2000/user/signup",{
          method:'POST',
          body:fd,
          
      });
          var data=await resp.json();
              console.log(data);
      
      }} value="REGISTER"  /> </p>
      
        </div>
              );

}

export default Register;