import axios from 'axios';

function getDoctor (){
    const url = "https://localhost:5001/api/doctor"
    var data=[];
    axios.get(url).then(result=>{
     
     data = result.data;
   
    
 })

 return data;
}


export default getDoctor;