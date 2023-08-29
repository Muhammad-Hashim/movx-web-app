import React, { useEffect, useState } from "react";
import "./HeroBaner.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../utils/useFetch";

export default function HeroBaner() {
  const [input, setinput] = useState("");
  const [background, setbackground] = useState("");

  const Navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
     setbackground(bg)
  }, [data]);

  const Queryinput = (e) => {
    if (e.key === "Enter" && input.length > 0) {
      Navigate(`/Search/${input}`);
    }
  };

  return (
    <div className="HeroBaner">
      <div className="HeroBaner_main">
        <div className="HeroBaner_content">
          <span className="title">Watch Movies</span>
          <span className="subtitle">fghghghhhhgfhh</span>

          <div className="HeroBaner_search">
            <input
              type="text"
              placeholder="Search Movise"
              onChange={(e) => setinput(e.target.value)}
              onKeyUp={Queryinput}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
