// import { useState } from "react";

// const { useEffect } = require("react")

// function Covid() {
//     const [datas,getDatas] = useState([]);
//     useEffect(()=>{
//         fetch('https://api.covid19api.com/countries')
//         .then(res=>res.json())
//         .then(data=>{getDatas(data)})
//         .catch((e)=>{console.log(e);});
//     },[])
    
//     return(
//         <div>
//             {datas.filter((country)=>country.Country==="Vietnam").map((country)=>{
//                  <div key={country.Slug}>
//                  <h2>{country.Country}</h2>
//                  <p>{country.Slug}</p>
//                </div>
//             })}
//         </div>
//     )
// }
// export default Covid;