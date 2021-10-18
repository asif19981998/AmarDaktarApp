import React,{useState,useEffect} from 'react';
import "./hospitalDetails.css";
import Card from '@material-ui/core/Card';
import { paginate } from '../../utils/paginate';
import Pagination from "../../common/HOC/pagination";
import axios from 'axios';


      
function HospitalDetials() {
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
       
        useEffect(() => {
            refreshHospitalList();
            
         
          },[currentPage])

          function refreshHospitalList() {
            const url = "https://localhost:5001/api/hospital"
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

export default HospitalDetials

