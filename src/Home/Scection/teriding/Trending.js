import React, { useState } from 'react'
import SwitchTab from '../../../Components/SwitchTab/SwitchTab';
import './Trending.css'
import Content from '../../../Components/ContentWraper/Content';
import useFetch from '../../../utils/useFetch';
import Poster from '../../../Components/Poster/Poster';
export default function Trending() {
   const [endpoints, setendpoints] = useState('day');
   
const onTabChange = (tab) => {
    setendpoints(tab=== "Today"? "day": "week")
};

    const { data, loading } = useFetch(`/trending/movie/${endpoints}`);

    console.log("🚀 ~ file: Trending.js:16 ~ Trending ~ data:", data)
  
  return (
    <div>
      <div className="Trending_Header">
        <span>Trending</span>
        <div>
          <SwitchTab data={["Today", "week"]} onTabChange={onTabChange} />
        </div>
      </div>
      <Poster data={data?.results} loading={loading} />
    </div>
  );
}
