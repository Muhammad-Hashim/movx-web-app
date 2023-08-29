import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN ="VeyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FIss";

const header = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjQyOTg0MWYwZGUzZmZjZTQ2NGM4YmJjMjNkNzdlMiIsInN1YiI6IjYyZTdiOTJiZjFiNTcxMDA1OTU2ZDM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvcOod1C9Dhrpih5KUmdcRS0NEXfF8LnWXDnmug42Xo",
};

export const fetchDataApi = async (url, params) => {

const options = {
  method: "GET",
  url: `https://api.themoviedb.org/3${url}`,
  params: params,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjQyOTg0MWYwZGUzZmZjZTQ2NGM4YmJjMjNkNzdlMiIsInN1YiI6IjYyZTdiOTJiZjFiNTcxMDA1OTU2ZDM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvcOod1C9Dhrpih5KUmdcRS0NEXfF8LnWXDnmug42Xo",
  },
};
  
  try {
    const response = await axios.request(options);
    const data = response.data;
    return data;
  
  } catch (err) {
 
    return err;
  }
};






// fetch("https://api.themoviedb.org/3/authentication", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
