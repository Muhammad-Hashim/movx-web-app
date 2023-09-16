import React from "react";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import Content from "../../Components/ContentWraper/Content";
export default function Header() {
  //     const openSerach()=>{

  //     }

  //   const openSerachMobile()=>{

  //     }

  return (
    <div className="header">
        
      <div className="header_log">
        <img
          alt="ok"
          src="https://gust-production.s3.amazonaws.com/uploads/accelerator/logo_image/36575/Captura_20de_20ecra_CC_83_202020-10-15_2C_20a_CC_80s_2015.13.24.png"
        />
      </div>
      <div className="header_link">
        <ul>
          <li>Movies</li>
          <li>TVshows</li>
        </ul>
        <AiOutlineSearch style={{ fontSize: "24px", color: "white" }} />
      </div>
    </div>
  );
}



    
//         
//         <p>Movies</p>
//         <p>TVshows</p>