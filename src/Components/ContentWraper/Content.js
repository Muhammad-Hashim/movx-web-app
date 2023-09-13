
import React from "react";
// import  './Conten.css';

const Content = React.memo(({ children }) => {
  return <div className="contentwrapper">{children}</div>;
});

export default Content;