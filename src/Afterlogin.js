import {useEffect} from 'react';



function Afterlogin(){

	useEffect(()=>{
	getdata();
},[])

async function getdata(){
	var resp=await fetch("http://localhost:2000/user/getuser",{
		headers :{
		'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicTEyMyIsImVtYWlsIjoicUAxMjMiLCJpZCI6IjYwZjNiNzc2YzYwMWRjMjcxNDg1MGIyYiIsImlhdCI6MTYyNjU4ODg2OH0.ZglS6hq7iZSGG2T32q4SqrmUo2VUbBG0ZhZgDBACdqE"
	}
	});
	var data=await resp.json();
		console.log(data);
}


	return(
  <div>
  <h1>After login page</h1>
  </div>
		);
}

export default Afterlogin;