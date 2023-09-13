
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { useSelector , useDispatch } from "react-redux";
import Home from "./Home/Home";
import Search from "./searchresult/Search";
import { fetchDataApi } from "./utils/apidata";
import { useEffect } from "react";
import { frtchApicongid } from "./storevaule/homeSlice";

function  App () {
  const dispatch=useDispatch()
  const { hashIN } = useSelector((state) => state.home.url);

  useEffect(() => {
       getULl()
  }, [])


 const getULl = async () => {
   try {
     const res = await fetchDataApi("/configuration");
     const url = {
       backdrop: res.images.secure_base_url + "original",
       poster: res.images.secure_base_url + "original",
       profile: res.images.secure_base_url + "original",
     };
     dispatch(frtchApicongid(url))
   } catch (err) {
     console.error(err);
   }
 };


  return <div className="App">
    
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/search/:query" element={<Search/>}/>

      </Routes>
    </BrowserRouter>



  </div>;
}

export default App;
