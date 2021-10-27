import React,{useState,useEffect} from 'react';
import "./doctordetails.css";
import Card from '@material-ui/core/Card';
import { paginate } from '../../utils/paginate';
import Pagination from "../../common/HOC/pagination";
import axios from 'axios';
import getDoctor from "./doctorService"
import {apiUrl} from "../../configs/config.json"
      
function DoctorDetials() {
        const [doctorList,setDoctorList] = useState([]);
        const [currentPage,setCurrentPage]=useState(1)
        const [size,setSize]=useState(5)
        const [doctors,setDoctors]= useState([]);
        const [totalCount,setTotalCount]=useState(doctorList.length);


        const handlePageChange=(page)=>{
            setCurrentPage(page);
           
        }
        const getPageData=()=>{
            console.log("getPagecalled")
           
           
            // setTotalCount(doctors.length)
          
        }
       
        useEffect(() => {
            refreshDoctorList();
            
         
          },[currentPage])

          function refreshDoctorList() {
            const url = apiUrl + "doctor"
              var data=[];
              axios.get(url).then(result=>{
                  console.log(result.data)
                setTotalCount(result.data.length)
                setDoctorList(paginate(result.data,currentPage,size));
                
        })}
    return (

        
        <div className="container">
            
             <div >

         {doctorList.map(doctor=>(
                
        <Card className="doctor-card" key={doctor.id}>
        <div className="doctor-main">
            <section className="profile-pic">
                <img src={doctor.imageSrc} alt="doctor"></img>
            </section>
            <section className="doctor-info">
                <h5 className="name">{doctor.name}</h5>
                <p className="doctor-degree">{doctor.degree}</p>
                <p className="current-position">{doctor.position}</p>
            </section>
            {/* <hr className="border-area"></hr> */}
            <section className="doctor-more-info">
                  <h6>Experience: {doctor.yearsOfExperience} years</h6>
                  <h6>BMDC: {doctor.bmdc}</h6>
                  <h6>Fees: {doctor.fees}</h6>
                  <p>Contact Symbol</p>
                  <button className="appointment-button">Book Appointment </button>
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

export default DoctorDetials

