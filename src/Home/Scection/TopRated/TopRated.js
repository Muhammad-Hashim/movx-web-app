import React, { useState } from "react";
import SwitchTab from "../../../Components/SwitchTab/SwitchTab";
import "./TopRated.css";
import Content from "../../../Components/ContentWraper/Content";
import useFetch from "../../../utils/useFetch";
import Poster from "../../../Components/Poster/Poster";
export default function TopRated() {
  const [endpoints, setendpoints] = useState("movie");

  const onTabChange = (tab) => {
    setendpoints(tab === "Movies" ? "movie" : "tv");
  };

  const { data, loading } = useFetch(`/${endpoints}/top_rated`);

  return (
    <div>
      <div className="Trending_Header">
        <span>Top Rated </span>
        <div>
          <SwitchTab data={["Movies", "series "]} onTabChange={onTabChange} />
        </div>
      </div>
      <Poster data={data?.results} loading={loading} />
    </div>
  );
}
