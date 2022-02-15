
import {useState,useEffect} from 'react';
import Menu from './Menu';

function Adduser(){
	let [message,setMessage]=useState('');
	let [name,setName]=useState('');
	let [email,setEmail]=useState('');
	let [gender,setGender]=useState('');
	let [stream,setStream]=useState('');
	let [language,setLanguage]=useState([]);
	let [pimg,setPimg]=useState(null);





 	function slan(ev){
 	if(ev.target.checked==true){
 	language.push(ev.target.value);
 }
 else{
 var index=language.indexOf(ev.target.value);
 language.splice(index,1);
}
console.log(language);
 }
	

	return(
  <div>
	  <Menu/>
  <p>Full name</p>
  <p><input type="text" value={name} onChange={(ev)=>{setName(ev.target.value);}}  /></p>
   <p>Mail id</p>
  <p><input type="email" value={email} onChange={(ev)=>{setEmail(ev.target.value);}}  /></p>
<p>gender</p>
<p><input type="radio" name="gender" value="male" onChange={(ev)=>{setGender(ev.target.value);}} />male</p>
<p><input type="radio" name="gender" value="female" onChange={(ev)=>{setGender(ev.target.value);}} />female</p>

<p>Stream</p>
<select name="stream" onChange={(ev)=>{setStream(ev.target.value);}}>
	<option value="">--select--</option>
	<option value="cse">cse</option>
	<option value="ece">ece</option>
	<option value="me">me</option>
</select>

<p>Languages</p>
<p><input type="checkbox" value="bengali" onChange={slan} />bengali</p>
<p><input type="checkbox" value="english" onChange={slan} />english</p>
<p><input type="checkbox" value="hindi" onChange={slan} />hindi</p>

<p>Profile picture</p>
<p><input type="file" onChange={(ev)=>{setPimg(ev.target.files[0]);}} /></p>


<p><input type="submit" className="btn btn-primary" onClick={async ()=>{
	var fd=new FormData();
	fd.append("name",name);
	fd.append("email",email);
	fd.append("gender",gender);
	fd.append("stream",stream);
	fd.append("language",language);
	fd.append("pimg",pimg);

	/* var insobj={
		name:name,
		email:email,
		gender:gender,
		stream:stream,
		language:language
	}; */

	var resp=await fetch("http://localhost:2000/user/ins",{
	method:'POST',
	body:fd,
	
});
	var data=await resp.json();
		console.log(data);

}} value="save"  /> </p>

  </div>
		);
}

export default Adduser;