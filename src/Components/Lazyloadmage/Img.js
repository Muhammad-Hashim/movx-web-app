import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Img({ src, className }) {
  return (
    <div>
      <LazyLoadImage
        src={src}
        alt=""
        affect="blur"
        className={className || ""}
      />
    </div>
  );
}
