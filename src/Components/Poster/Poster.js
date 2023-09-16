import React from "react";
import "./Poster.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

export default function Poster({data,Loading}) {
  const { url } = useSelector((state) => state.home);
          
   const skItem = () => {
     return (
       <div className="skeletonItem">
         <div className="posterBlockSkeleton skeleton"></div>
         <div className="textBlockSkeleton">
           <div className="titleSkeleton skeleton"></div>
           <div className="dateSkeleton skeleton"></div>
         </div>
       </div>
     );
   };

  const navigation = () => {};
  return (
    <div className="carousel">
      <BsFillArrowLeftCircleFill
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      {!Loading ? (
        <div className="carouselItems">
          {data?.map((items) => {
            const posturl = items.poster_path
              ? url.poster + items.poster_path
              : "";
           
            return (
              <div key={items.id} className="carouselItem">
                <div className="posterBlock">
                  <img src={posturl} alt={items.name || items.title} />
                </div>
                <div className="textBlock">
                  <span className="title">{items.title}</span>
                  <span className="date">
                    {dayjs(items.release_date).format("MMM D, YYYY")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="loadingSkeleton">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
        </div>
      )}
    </div>
  );
}
