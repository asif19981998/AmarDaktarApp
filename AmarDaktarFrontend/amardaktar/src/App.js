
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Doctor from './components/pages/doctor';
import Home from './components/pages/home';

import DoctorBlog from './components/pages/doctorBolg';
import Appiontment from './components/pages/appiontment';
import DoctorRegistration from './components/pages/doctorRegistration';

import AgentsRegistration from './components/pages/agentsRegistration';
import SignUp from './components/pages/Sign-up';
import { ToastProvider } from "react-toast-notifications";
import HospitalDetails from './components/pages/hospitalDetails';
import HospitalRegistration from './components/pages/hospitalRegistration';



function App() {
  return (
    <div className="App">
      
       <Router>
       <ToastProvider autoDismiss={true}>
          <Navbar/>
          <Switch>
            <Route path="/"  exact component={Home}/>
            <Route path="/doctor"  component={Doctor}/>
            <Route path="/hospital"  component={HospitalDetails}/>
            <Route path="/doctorBlog"  component={DoctorBlog}/>
            <Route path="/appointment"  component={Appiontment}/>
            <Route path="/doctorRegistration"  component={DoctorRegistration}/>
            <Route path="/hospitalRegistration"  component={HospitalRegistration}/>
            <Route path="/agentsRegistration"  component={AgentsRegistration}/>
            <Route path="/sign-up" component={SignUp}/>
            {/* <Route path=""   component={Home}/> */}
          </Switch>
          </ToastProvider>
       </Router>
     
    </div>
  );
}

export default App;
