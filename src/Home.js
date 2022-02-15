import {useEffect} from 'react';
import Menu from './Menu';
function Home(){
  useEffect(()=>{
    localStorage.setItem("uname", "Smith");
  });
	return(
  <div>
    <Menu/>
  <h1>Home page</h1>
  </div>
		);
}

export default Home;