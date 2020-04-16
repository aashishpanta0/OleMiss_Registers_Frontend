import axios from 'axios';
 const removecourse= async(courseinfo, callback)=>{
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
    const url='http://localhost:5000/student/removecourses'
    await axios.post(url, courseinfo,config)
    .then((result)=>callback(result))
    .catch((error)=>callback(error))
    
 }

 export {removecourse};
 
