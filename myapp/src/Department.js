import React from "react"

import DeptCard from "./Components/DeptCard"
// import DeptDetail from "./DeptDetail"

import Navbar from "./Components/component/Nav"

export default function Department(){
  return(
    <div>
        <Navbar/>
            <div className="MainContent">
            <DeptCard />
            {/* <DeptDetail/>  */}
            </div>
    </div>
  )
}


