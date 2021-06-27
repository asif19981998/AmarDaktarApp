
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Doctor from './components/pages/doctor';
import Home from './components/pages/home';
import Hospital from './components/pages/hospital';
import DoctorBlog from './components/pages/doctorBolg';
import Appiontment from './components/pages/appiontment';
import DoctorRegistration from './components/pages/doctorRegistration';
import HospitalRegistration from './components/pages/hospitalRegistration';
import AgentsRegistration from './components/pages/agentsRegistration';
import SignUp from './components/pages/Sign-up';




function App() {
  return (
    <div className="App">
      
       <Router>
          <Navbar/>
          <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/doctor"  component={Doctor}/>
            <Route path="/hospital"  component={Hospital}/>
            <Route path="/doctorBlog"  component={DoctorBlog}/>
            <Route path="/appointment"  component={Appiontment}/>
            <Route path="/doctorRegistration"  component={DoctorRegistration}/>
            <Route path="/hospitalRegistration"  component={HospitalRegistration}/>
            <Route path="/agentsRegistration"  component={AgentsRegistration}/>
            <Route path="/sign-up" component={SignUp}/>
            {/* <Route path=""   component={Home}/> */}
          </Switch>
        
       </Router>
     
    </div>
  );
}

export default App;
