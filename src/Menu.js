import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';


function Menu(){
    let [islogin,setIslogin]=useState(false);
    let [name,setName]=useState("");


    async function getdata(token){
      var resp=await fetch("http://localhost:2000/user/getuser",{
        headers :{
        'Authorization' : "Bearer " +  token
      }
      });
      var data=await resp.json();
        // console.log(data);
        setIslogin(true);
       setName(data.name);
    }
    

    useEffect(()=>{
      // var uname=localStorage.getItem("uname");
      var uid=localStorage.getItem("token");
      if(uid!=null){
      //  setIslogin(true);
      //   setName(uname);
        getdata(uid);


      }
      else{
        setIslogin(false);
        setName("");


      }

      console.log(islogin);

    })

    return(

        <nav className="navbar navbar-expand-sm bg-light">

  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
    </li>
    <li className="nav-item">
     <Link className="nav-link" to="/service">Service</Link>
    </li>
     <li className="nav-item">
     <Link className="nav-link" to="/contact">Contact</Link>
    </li>
     <li className="nav-item">
     <Link className="nav-link" to="/adduser">Adduser</Link>
    </li>
     <li className="nav-item">
     <Link className="nav-link" to="/viewuser">Viewuser</Link>
    </li>
      <li className="nav-item">
     <Link className="nav-link" to="/afterlogin">Afterlogin</Link>
    </li>

    {!islogin?<li className="nav-item ml-auto"><Link className="nav-link" to="/register">Register</Link></li>:''}
    {!islogin?<li className="nav-item ml-auto"><Link className="nav-link" to="/login">Login</Link></li>:''}


{islogin?<li className="nav-item ml-auto"><Link className="nav-link" to="/register">Welcome {name}</Link></li>:''}
    {islogin?<li className="nav-item ml-auto"><button className="nav-link btn btn-primary" onClick={()=>{ localStorage.removeItem("token");window.location='/login';
      }} >logout</button></li>:''}



  </ul>

</nav>
    )
}

export default Menu;