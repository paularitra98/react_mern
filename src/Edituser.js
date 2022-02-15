
import {useState,useEffect} from 'react';


function Edituser(props){
	let [message,setMessage]=useState('');
	let [name,setName]=useState('');
	let [email,setEmail]=useState('');
	let [gender,setGender]=useState('');
	let [stream,setStream]=useState('');
	let [language,setLanguage]=useState([]);
	let [pimg,setPimg]=useState(null);

	let[img_url,setImgurl]=useState('');

	let [ismale,setIsmale]=useState(false);
let [isfemale,setIsfemale]=useState(false);

let[isBengali,setIsbengali]=useState(false);
let[isHindi,setIshindi]=useState(false);
let[isEnglish,setIsenglish]=useState(false);


    useEffect(()=>{
        editdata();
    },[]);

    async function editdata(){
        var id=props.match.params.id;
        var fd=new FormData();
        fd.append("id",id);
        var resp=await fetch("http://localhost:2000/user/edit",{
            method:'POST',
            body:fd
        }
        );
        var data=await resp.json();
        console.log(data);
        setName(data.name);
        setEmail(data.email);
		if(data.gender=="male"){
			setIsmale(true);
		}
		else{
			setIsfemale(true);
		}

		language=data.language.split(",");
		setLanguage(language);
		if(language.indexOf("bengali")!="-1"){
			setIsbengali(true);
		}
		if(language.indexOf("english")!="-1"){
			setIsenglish(true);
		}
		if(language.indexOf("hindi")!="-1"){
			setIshindi(true);
		}

		setStream(data.stream);
		setGender(data.gender);

        setImgurl(data.pimg);

    }


 	function slan(ev){
 	if(ev.target.checked==true){
 	language.push(ev.target.value);
	 if(ev.target.value=="bengali"){
		 setIsbengali(true);
	 }
	 if(ev.target.value=="hindi"){
		setIshindi(true);
	}
	if(ev.target.value=="english"){
		setIsenglish(true);
	}
 }
 else{
 var index=language.indexOf(ev.target.value);
 language.splice(index,1);
 if(ev.target.value=="bengali"){
	setIsbengali(false);
}
if(ev.target.value=="hindi"){
   setIshindi(false);
}
if(ev.target.value=="english"){
   setIsenglish(false);
}
}
console.log(language);
 }
	

	return(
  <div>
      
  <p>Full name</p>
  <p><input type="text" value={name} onChange={(ev)=>{setName(ev.target.value);}}  /></p>
   <p>Mail id</p>
  <p><input type="email" value={email} onChange={(ev)=>{setEmail(ev.target.value);}}  /></p>
<p>gender</p>
<p><input type="radio" checked={ismale} name="gender" value="male" onChange={(ev)=>{setGender(ev.target.value);
	setIsfemale(false);
		setIsmale(true);}} />male</p>
<p><input type="radio" checked={isfemale} name="gender" value="female" onChange={(ev)=>{setGender(ev.target.value);
setIsfemale(true);
		setIsmale(false);
		}} />female</p>

<p>Stream</p>
<select name="stream" value={stream} onChange={(ev)=>{setStream(ev.target.value);}}>
	<option value="">--select--</option>
	<option value="cse">cse</option>
	<option value="ece">ece</option>
	<option value="me">me</option>
</select>

<p>Languages</p>
<p><input type="checkbox" checked={isBengali} value="bengali" onChange={slan}  />bengali</p>
<p><input type="checkbox" checked={isEnglish} value="english" onChange={slan} />english</p>
<p><input type="checkbox" checked={isHindi} value="hindi" onChange={slan} />hindi</p>

<p>Profile picture</p>
<p><input type="file" onChange={(ev)=>{setPimg(ev.target.files[0]);}} /></p>
<p><img className="imgsize" src={"http://localhost:2000/image_upload/"+img_url}/></p>


<p><input type="submit" className="btn btn-primary" onClick={async ()=>{
	var id=props.match.params.id;
	var fd=new FormData();
	fd.append("name",name);
	fd.append("email",email);
	fd.append("gender",gender);
	fd.append("stream",stream);
	fd.append("language",language);
	fd.append("pimg",pimg);
    fd.append("id",id);
	/* var insobj={
		name:name,
		email:email,
		gender:gender,
		stream:stream,
		language:language
	}; */

	var resp=await fetch("http://localhost:2000/user/update",{
	method:'POST',
	body:fd,
	
});
	var data=await resp.json();
		console.log(data);

}} value="save"  /> </p>


     
  </div>
		);
}

export default Edituser;