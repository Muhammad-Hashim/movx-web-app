
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { useSelector , useDispatch } from "react-redux";
import Home from "./Home/Home";
import Search from "./searchresult/Search";
import { fetchDataApi } from "./utils/apidata";
import { useEffect } from "react";
import { frtchApicongid } from "./storevaule/homeSlice";
import Header from "./Home/Scection/Header";
import Footer from "./Components/Footer/Footer";
import Details from "./Details/Details";

function  App () {
  const dispatch=useDispatch()
  const { hashIN } = useSelector((state) => state.home.url);

  useEffect(() => {
       getULl()
       getGenres()
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


    const getGenres= async ()=>{
      let genre=[];
     let endpoints=["tv","movie"]
     let promies=[]
     endpoints.forEach((endpoint)=>{
       promies.push(fetchDataApi(`/genre/${endpoint}/list`));
     
     })
     const data= await Promise.all(promies)
     console.log("🚀 ~ file: App.js:47 ~ getGenres ~ data:", data)
   
    } 


  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
