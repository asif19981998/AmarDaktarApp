import  { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Joi from "joi-browser"
export default class Form extends Component{
    state = {
        data: {},
        // errors: {}
      };
   
    //  validate=()=>{
        
    //     const abortEarly = {abortEarly:false}
    //     const {error} = Joi.validate(this.state.data,this.schema,abortEarly)
    //     if(!error) return null;
    //     const errors = {};
    //     for(var item of error.details) errors[item.path[0]] = item.message;
       
       
    //     return errors;
    // }

    // validateProperty = ({ name, value }) => {
    //     const obj = { [name]: value };
    //     const schema = { [name]: this.schema[name] };
    //     const { error } = Joi.validate(obj, schema);
    //     return error ? error.details[0].message : null;
    //   };
 handleSubmit =e=>{
   
   e.preventDefault();
   console.log( "Handle Submit Called")
  //  console.log(this.state.errors)
    // const errors = this.validate()
    // this.setState({ errors: errors || {} })
   
    // if (errors) {
    //    console.log("error found",errors)
    //    return;


    // }
   this.doSubmit()
}

 handleChange=({ currentTarget: input })=> {
    // const errors_copy = {...this.errors}
    // const errorMessage = this.validateProperty(input)
    // if(errorMessage) errors_copy[input.name]=errorMessage
    // else delete errors_copy[input.name]
    // console.log(input.name)
    const data = { ...this.state.data };
    data[input.name] = input.value;
    // this.setState({ data, errors:errors_copy });
    this.setState({ data });
    console.log(input.value)
   }

    showPreview = e => {
      const data = {...this.state.data};
      if(e.target.files && e.target.files[0])
      {
        let imageFile = e.target.files[0];
        const reader = new FileReader();
        console.log(imageFile)
        
        reader.onload= x => {
          console.log(x.target.result)
          data["imageFile"] = e.target.files[0];
          data["imageSrc"]=x.target.result;
          this.setState({data})
        }
        reader.readAsDataURL(imageFile)
      }
    
    else{
      // this.setState({data,imageFile:null,imageSrc:'assets/img/myself.jpg'})
    }
}

   renderMaterialButton(label){
     return (
      // disabled={this.validate()}
      <Button    variant="contained" color="primary" type="submit">
     {label}
     </Button>
     )
   }

   renderMaterialInput(name,label,type="text"){
     const {data}=this.state
     return(
      <TextField
      label={label}
      name={name}
      value={data[name]}
      onChange={this.handleChange}
      type={type}
      margin="dense"
      variant="outlined"
      /> 
     )
   }

   renderInputForImage(name,label,type="file"){
     const {data}=this.state
     return (
       <input type={type} name={name} 
       label={label} 
      //  value={data[name]}
        onChange={this.showPreview}/>
     )
   }

   
  
}


