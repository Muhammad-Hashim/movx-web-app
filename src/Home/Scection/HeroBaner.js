import React, { useEffect, useState } from "react";
import "./HeroBaner.css";
import { useNavigate } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import { useSelector } from "react-redux";
import Img from "../../Components/Lazyloadmage/Img";
import Content from "../../Components/ContentWraper/Content";
import './HeroBaner.css'
export default  function HeroBaner() {
  const [input, setinput] = useState("");
  const [background, setbackground] = useState("");

  const {url} = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  const Navigate = useNavigate();

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  const Queryinput = (e) => {
    if (e.key === "Enter" && input.length > 0) {
      Navigate(`/Search/${input}`);
    }
  };

  return (
    <div className="HeroBaner">
      {!loading && (
        <div className="backDrop_img">
          <Img src={background} className="background_img" />
        </div>
      )}
      <div className="optcylatyer"></div>
      <Content>
        <div className="HeroBaner_main">
          <div className="HeroBaner_content">
            <span className="title">Watch Movies</span>
            <span className="subtitle">
              we have a container with a box inside it. The box is given
            </span>

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
      </Content>
    </div>
  );
}
