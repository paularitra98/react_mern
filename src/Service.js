import {useEffect} from 'react';
function Service(){
  useEffect(()=>{
   localStorage.removeItem("uname");

  });
	return(
  <div>
  <h1>Service page</h1>
  </div>
		);
}

export default Service;