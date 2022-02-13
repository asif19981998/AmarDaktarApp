
import './App.css';
import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Doctor from './components/pages/doctor';
import Home from './components/pages/home';

import DoctorBlog from './components/pages/doctorBolg';
import Appiontment from './components/pages/appiontment';
import DoctorRegistration from './components/pages/doctorRegistration';

import AgentsRegistration from './components/pages/agentsRegistration';
import Register from './components/pages/register';
import Login from './components/pages/login';
import { ToastProvider } from "react-toast-notifications";
import HospitalDetails from './components/pages/hospitalDetails';
import HospitalRegistration from './components/pages/hospitalRegistration';
import AllDoctorList from './components/pages/allDoctorList';
import DoctorDetials from './components/doctor-details/doctordetails';
import AllHospitalList from './components/pages/allHospitalList';
import DoctorAppoinement from './components/pages/doctorAppointment';

function App() {
  const [name,setname]= useState('')
  useEffect(() => {
    (
       async()=>{
             const response = await fetch("http://localhost:5001/api/user",{
                 headers:{'Content-Type':'application/json'},
                 credentials:"include"
                 
             });
            
             const content = await response.json();
             setname(content.name)
             console.log(name +"appjs")
         }
     )();
     
 })
  return (
    <div className="App">
      
       <Router>
       <ToastProvider autoDismiss={true}>
          <Navbar name={name} setName={setname}/>
          <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/doctor"  component={Doctor}/>
            <Route path="/hospital"  component={HospitalDetails}/>
            <Route path="/doctorBlog"  component={DoctorBlog}/>
            <Route path="/appointment"  component={Appiontment}/>
            <Route path="/doctorRegistration"  component={DoctorRegistration}/>
            <Route path="/hospitalRegistration"  component={HospitalRegistration}/>
            <Route path="/agentsRegistration"  component={AgentsRegistration}/>
            <Route path="/signUp" component={Register}/>
            <Route path="/login" component={()=><Login setName={setname}/>}></Route>
            <Route path="/allDoctorList" component={AllDoctorList}></Route>
            <Route path="/doctorDetails" component={DoctorDetials}></Route>
            <Route path="/allHospitalList" component={AllHospitalList}></Route>
            <Route path="/hospitalDetails" component={HospitalDetails}></Route>
            <Route path="/doctorAppointment" component={DoctorAppoinement}></Route>
            {/* <Route path=""   component={Home}/> */}
          </Switch>
          </ToastProvider>
       </Router>
     
    </div>
  );
}

export default App;
