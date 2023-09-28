import React from "react";
import "./Poster.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Details from "../../Details/Details";
import { useNavigate } from "react-router-dom";


export default function Poster({data,loading}) {
  const { url } = useSelector((state) => state.home);
           const navigate = useNavigate();
   const skItem = () => {
     return (
       <div className="skeletonItem">
         <div className="posterBlockSkeleton skeleton">
              
         </div>
         <div className="textBlockSkeleton">
           <div className="titleSkeleton skeleton"></div>
           <div className="dateSkeleton skeleton"></div>
         </div>
       </div>
     );
   };

  const details = (id, media_type) => {
    navigate(`/Details/${id}/${media_type}`);
  }
  return (
    <div className="carousel">
      {/* <div className="carousel_arrow_">
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
      </div> */}

      {!loading ? (
        <div className="carouselItems">
          {data?.map((items) => {
            const posturl = items.poster_path
              ? url.poster + items.poster_path
              : "";

            return (
              <div
                key={items.id}
                className="carouselItem"
                onClick={ () =>details(items.id, items.media_type)}
              >
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
          {skItem()}
        </div>
      )}
    </div>
  );
}



