import React,{useState,useEffect} from 'react';
import "./hospitalDetails.css";
import Card from '@material-ui/core/Card';
import { paginate } from '../../utils/paginate';
import Pagination from "../../common/HOC/pagination";
import axios from 'axios';
import {apiUrl} from "../../configs/config.json";

      
function AllHospitalList() {
        const [hospitalList,setHospitalList] = useState([]);
        const [currentPage,setCurrentPage]=useState(1)
        const [size,setSize]=useState(5)
        const [hospitals,setHospitals]= useState([]);
        const [totalCount,setTotalCount]=useState(hospitalList.length);


        const handlePageChange=(page)=>{
            setCurrentPage(page);
           
        }
        const getPageData=()=>{
            console.log("getPagecalled")
          // setTotalCount(Hospitals.length)
       }

       
       const handleApproved=(hospital)=>{
        hospital.isApproved = true;
        console.log(hospital)
        const url = apiUrl + "hospital/Update"
        axios.put(url,hospital).then(result=>{
          refreshHospitalList()
      })}
      const handleNotApproved=(hospital)=>{
        hospital.isApproved = false;
        console.log(hospital)
        const url = apiUrl + "hospital/Update"
        axios.put(url,hospital).then(result=>{
          refreshHospitalList()
      })}

     
       
        useEffect(() => {
            refreshHospitalList();
            
         
          },[currentPage])

          function refreshHospitalList() {
            const url = apiUrl + "hospital/GetAllHospital";
            var data=[];
            axios.get(url).then(result=>{
                  console.log(result.data)
                setTotalCount(result.data.length)
                setHospitalList(paginate(result.data,currentPage,size));
                
        })}
    return (

        
        <div className="container">
            
             <div >

         {hospitalList.map(hospital=>(
                
        <Card className="hospital-card" key={hospital.id}>
        <div className="hospital-main">
            <section className="profile-pic">
                <img src={hospital.imageSrc} alt="hospital"></img>
            </section>
            <section className="hospital-info">
                <h5 className="name">{hospital.name}</h5>
                <p className="hospital-degree">{hospital.address}</p>
                <p className="current-position">{hospital.email}</p>
            </section>
            {/* <hr className="border-area"></hr> */}
            <section className="hospital-more-info">
                  {!hospital.isApproved && 
                  <button 
                  className="btn btn-success"
                  onClick={()=>handleApproved(hospital)}
                
                   >Approved</button>
                  
                  }
                  {hospital.isApproved && 
                  <button 
                  className="btn btn-danger"
                  onClick={()=>handleNotApproved(hospital)}
                
                   >Cancel Approvement</button>
                  
                  }
                  
            </section>
          
        </div>
       
        </Card>
   
         ))}
        
        
       

      
        </div>
       
        <div className="pagination-area">
            
             <Pagination
            itemsCount={totalCount}
            pageSize={size}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            />
            
            </div>
        </div>
       
  )
}

export default AllHospitalList