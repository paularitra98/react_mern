import {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import axios from 'axios';


function Viewuser(){

let [users,setUsers]=useState([]);

useEffect(()=>{
  getstd();
},[]);

async function getstd(){
  var resp=await fetch("http://localhost:2000/user/sel");
  var data=await resp.json();
  setUsers(data);
 
}


		return(
	<div className="container">
            <Menu/>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>gender</th>
        <th>stream</th>
        <th>language</th>
        <th>image</th>
        <th>delete</th>
        <th>update</th>
      </tr>
    </thead>

    <tbody>
      {users.map((u)=>
      <tr key={u._id}>

      <td>{u.name}</td>
        <td>{u.email}</td>
      <td>{u.gender}</td>
      <td>{u.stream}</td>
      <td>{u.language}</td>
      <td><img className="imgsize" src={"http://localhost:2000/image_upload/"+u.pimg}/></td>


        <td><button type="submit" className="btn btn-danger" onClick={async ()=>{
          if(window.confirm('are you sure to delete ?')){
          var fd=new FormData();
          fd.append("id",u._id);
          var resp=await fetch("http://localhost:2000/user/del",{

            method:'POST',
            body:fd
          });
          var data=await resp.json();
          console.log(data);
          getstd();
         } }}>delete</button></td>

         <td><Link className="btn btn-primary" to={"/edituser/"+u._id}>Edit</Link></td>

      </tr>
      )}
    
    </tbody>
  </table>
</div>
);



}
export default Viewuser;