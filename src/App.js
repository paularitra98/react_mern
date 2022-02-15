import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';



import './App.css';

import Adduser from './Adduser.js';
import Home from './Home.js';
import About from './About.js';
import Service from './Service.js';
import Contact from './Contact.js';
import Viewuser from './Viewuser.js';
import Edituser from './Edituser.js';
import Register from './Register.js';
import Login from './Login.js';
import Afterlogin from './Afterlogin.js';

function App() {

    



  return (
    <div>
    <BrowserRouter>

      


<Switch>
<Route exact path='/' component={Home} />
<Route exact path='/about' component={About} />
<Route exact path='/service' component={Service} />
<Route exact path='/contact' component={Contact} />
<Route exact path='/adduser' component={Adduser} />
<Route exact path='/viewuser' component={Viewuser} />
<Route exact path='/edituser/:id' component={Edituser} />
<Route exact path='/register' component={Register} />
<Route exact path='/login' component={Login} />
<Route exact path='/afterlogin' component={Afterlogin} />
</Switch>



</BrowserRouter>
    </div>
  );
}

export default App;
