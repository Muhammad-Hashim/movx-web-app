
import  { useEffect, useState } from "react";
import { fetchDataApi } from "./apidata";


function useFetch(url) {
  const [loading, setloading] = useState(null);
  const [error, setError] = useState(null);
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setloading("loading...");
      setdata(null);
  
    
     await fetchDataApi(url).then((res)=>{
  
       setdata(res);
      setloading(false);
     }).catch((res)=>{
      setloading(null);
        setError("Something went wrong!");
     });
        
      
    }
   fetchData();
  }, [url]);

  return { data, loading, error };
};

// function async useFetch (url) {
//   const [loading, setloading] = useState(null);
//   const [error, setError] = useState(null);
//   const [data, setdata] = useState(null);
//   useEffect(() => {
//     setloading("loading...");
//     setdata(null);
    
//     try {
//       const res = await fetchDataApi(url);
//       console.log("adaa",res)
//       setdata(res)
//       setloading(null)

//     } catch (err) {
//       setloading(false);
//       setError("Something went wrong!");
     
//     }

    
//   }, [url]);

//   return { data, loading, error };
// }

export default useFetch;
