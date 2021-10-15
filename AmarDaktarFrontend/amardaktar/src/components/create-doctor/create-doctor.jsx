import React from 'react'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import Joi from "joi-browser"
import "./create-doctor.css"
import Doctor from '../../classes/Doctor.jsx';
// import MaterialTextField from '../../utils/textfield';
import Form from '../../common/form';
import {deleteable} from './../../common/deleteable';
class CreateDoctor extends Form {
    
     state={
            data:new Doctor(),
            // errors:{}
        }
        
    
  //  schema={
  //       name:Joi.string().required().label("Full Name"),
  //       phoneNo:Joi.string().required(),
  //       bmdc:Joi.string().required(),
  //       email:Joi.string().required().label("Email"),
  //       password:Joi.string().required(),
  //       gender:Joi.string().required(),
  //       department:Joi.string().required(),
  //           id:0,
            
  //           imageName:"",
  //           // imageSrc:"",
  //           // imageFile:null,
  //           degree:"",
  //           specialList:"",
  //           description:"",
  //           yearsOfExperience:0,
  //           fees:0,
  //           meetUrl:"",
  //           facebookUrl:"",
  //           twitterUrl:"",
  //           LinkinUrl:"",

  //           isDeteted:false,
  //           deletedById:0,
  //           deletedOn:Date()
        
  //     }
    
  
  doSubmit=()=>{
    console.log(" Before Api")
    const url = "https://localhost:5001/api/doctor"
    axios.get(url).then(result=>{
         console.log(result)
       })
        // server call
        console.log(this.state.data)
        axios.post(url,this.state.data).then(result=>{
          console.log(result)
        })
       
        console.log(this.state.data)
        
  }

  

render(){
    const {data,errors}=this.state
    return (
      <div className="container">
        <div className="create-doctor ">
        <h1>Create Doctor</h1>
       <form onSubmit={this.handleSubmit}  noValidate autoComplete="off" className="form">
  
          {this.renderMaterialInput("name","Full Name")}
            
          {/* {errors.name && <div style={{color:"red"}}>{errors.name}</div>} */}
          
          {this.renderMaterialInput("phoneNo","Phone No")}
          {this.renderMaterialInput("email","Email")}
          
          {/* {errors.email && <div style={{color:"red"}}>{errors.email}</div>} */}
          {this.renderMaterialInput("password","Password","password")}
          {this.renderMaterialInput("bmdc","BMDC Number")}
      
          {this.renderInputForImage("imageSrc","DoctorImage")}


       <div  className="radio-area">
       <FormLabel component="legend">Gender:</FormLabel>
        <RadioGroup row aria-label="gender" name="gender" value={data.gender} onChange={this.handleChange} >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
           
       </RadioGroup>
       </div>
       <FormControl variant="outlined" >
          <InputLabel htmlFor="department">Department</InputLabel>
          <Select
      native
      label="Department"
      inputProps={{
        name: 'department',
        id: 'department',
      }}
      value={data.department}
      onChange={this.handleChange}
    >
      <option aria-label="None" value="" />
      <option value={"cardiology"}>Cardiology</option>
      <option value={"laser"}>Laser</option>
      <option value={"medicine"}>Medicine</option>
    </Select>
       </FormControl>
       {/* {this.renderInput("imageUrl","Doctor Image","file")}    */}
        
  <div className="submitButton">
    {this.renderMaterialButton("Submit")}
   
    </div>
    </form>  
  
    </div>
     
        </div>
       
        )
}
   
}

export default CreateDoctor
