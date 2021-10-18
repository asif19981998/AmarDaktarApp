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
import "./hospitalRegistration.css"
import Hospital from '../../classes/Hospital.js';
// import MaterialTextField from '../../utils/textfield';
import Form from '../../common/form';
import {deleteable} from './../../common/deleteable';
import Card from '@material-ui/core/Card';
import withToast from '../../common/addToast';
const initialFieldValues = new Hospital();
class CreateHospital extends Form {
    
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
    this.setState({data:new Hospital()})
  
    
  }
  doSubmit=()=>{
    console.log(" Before Api")
    const url = "https://localhost:5001/api/hospital"
        // server call
        console.log(this.state.data)
        const formData = new FormData();
        var values = this.state.data;
       
       
        formData.append("id",values.id);
        formData.append("name",values.name);
        formData.append("imageFile",values.imageFile);
        formData.append("imageName",values.imageName);
        formData.append("imageSrc",values.imageSrc);
        formData.append("address",values.address);
        formData.append("phoneNo",values.phoneNo);
        formData.append("email",values.email);
        formData.append("aboutUs",values.aboutUs);
        formData.append("websiteUrl",values.linkinUrl);
        formData.append("isDeleted",values.isDeleted);
        formData.append("deletedById",values.deletedById);
        formData.append("deletedOn",values.deletedOn);
     
       
       
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
        <div className="create-hospital">
          <Card style={{marginTop:8}}>
            <div style={{padding:5}}>
            <h1 style={{textAlign:"center"}}>Create Hospital</h1>
         <form onSubmit={this.handleSubmit}  noValidate autoComplete="off" className="form">
         
          <div className="row">
            <div className="col-md-6">
              <div>
              {this.renderMaterialInput("name","Hospital Name")}
              </div>
              <div>
              {this.renderMaterialInput("phoneNo","Phone No")}
                </div>
              <div>
              {this.renderMaterialInput("email","Email")}
                </div>
              <div>
              {this.renderMaterialInput("address","Address")}
                </div>
            
             
         </div>
                <div className="col-md-6">
                <div>
              {this.renderMaterialInput("aboutUs","About Us")}
                </div>
                <div>
              {this.renderMaterialInput("websiteUrl","Website Url")}
                </div>
                <div>
                {this.renderInputForImage("imageUrl","Hospital Image","file")}
                    </div>
             
              <div>
                </div>
              <div>
                </div>
                
         

          
         
         
                </div>
          </div>
          
         
           
        
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

export default withToast(CreateHospital)

