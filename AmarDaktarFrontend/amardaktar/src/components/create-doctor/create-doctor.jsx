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
import Doctor from '../../classes/Doctor.js';
// import MaterialTextField from '../../utils/textfield';
import Form from '../../common/form';
import {deleteable} from './../../common/deleteable';
import Card from '@material-ui/core/Card';
import withToast from '../../common/addToast';
import {apiUrl} from "../../configs/config.json";
const initialFieldValues = new Doctor();
class CreateDoctor extends Form {
    
     state={
            data:initialFieldValues,
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
  
  resetForm =()=>{
    document.getElementById('imageSrc').value = null;
    this.setState({data:new Doctor()})
  
    
  }
  doSubmit=()=>{
    console.log(" Before Api")
    const url = apiUrl + "doctor"
        // server call
        console.log(this.state.data)
        const formData = new FormData();
        var values = this.state.data;
       
       
        formData.append("id",values.id);
        formData.append("name",values.name);
        formData.append("imageFile",values.imageFile);
        formData.append("imageName",values.imageName);
        formData.append("imageSrc",values.imageSrc);
        formData.append("degree",values.degree);
        formData.append("specialList",values.specialList);
        formData.append("description",values.description);
        formData.append("yearsOfExperience",values.yearsOfExperience);
        formData.append("bmdc",values.bmdc);
        formData.append("fees",values.fees);
        formData.append("phoneNo",values.phoneNo);
        formData.append("password",values.password);
        formData.append("gender",values.gender);
        formData.append("department",values.department);
        formData.append("email",values.email);
        formData.append("meetUrl",values.meetUrl);
        formData.append("facebookUrl",values.faceBookUrl);
        formData.append("twitterUrl",values.twitterUrl);
        formData.append("linkinUrl",values.linkinUrl);
        formData.append("isDeleted",values.isDeleted);
        formData.append("deletedById",values.deletedById);
        formData.append("deletedOn",values.deletedOn);
        formData.append("position",values.position);
       
       
        console.log(values)
        console.log(formData)
        axios.post(url,formData).then(result=>{
          this.props.addToast("Submitted successfully", { appearance: "success" });
          this.resetForm()
        })
       
       
        
  }

  

render(){
    const {data,errors}=this.state
    return (
      <div className="container">
        <div className="create-doctor ">
          <Card style={{marginTop:8}}>
            <div style={{padding:5}}>
            <h2>Create Doctor</h2>
         <form onSubmit={this.handleSubmit}  noValidate autoComplete="off" className="form">
         
          <div className="row">
            <div className="col-md-6">
              <div>
              {this.renderMaterialInput("name","Full Name")}
              </div>
              <div>
              {this.renderMaterialInput("phoneNo","Phone No")}
                </div>
              <div>
              {this.renderMaterialInput("email","Email")}
                </div>
              <div>
              {this.renderMaterialInput("password","Password","password")}
                </div>
              <div>
              {this.renderMaterialInput("bmdc","BMDC Number")}
                </div>
              <div >
              {this.renderMaterialInput("degree","Degree")}
                </div>
             
         </div>
                <div className="col-md-6">
                <div>
                {this.renderMaterialInput("position","Position")}
                </div>
              <div>
              {this.renderMaterialInput("yearsOfExperience","Years of Experience","number")}
                </div>
              <div>
              {this.renderMaterialInput("fees","Fees","number")}
                </div>
              <div>
              {this.renderInputForImage("imageSrc","DoctorImage")}
                </div>
                <div  className="radio-area">
            <FormLabel component="legend">Gender:</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" value={data.gender} onChange={this.handleChange} >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              
          </RadioGroup>
          </div>
              <div>
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
                </div>
              <div>
                </div>
              <div>
                </div>
                
         

          
         
         
                </div>
          </div>
          
         
       {/* {this.renderInput("imageUrl","Doctor Image","file")}    */}
        
           <div className="submitButton">
    {this.renderMaterialButton("Submit")}
   
            </div>
            
         </form>
              </div>
        
          </Card>
          
  
    </div>
     
        </div>
      
        )
}
   
}

export default withToast(CreateDoctor)
