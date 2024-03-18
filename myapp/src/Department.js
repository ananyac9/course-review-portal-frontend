import React from "react"
import Navbar from "./Components/Navbar"
import DeptCard from "./Components/DeptCard"
// import DeptDetail from "./DeptDetail"



export default function Department(){
  return(
    <div>
        <Navbar />
            <div className="MainContent">
            <DeptCard />
            {/* <DeptDetail/>  */}
            </div>
    </div>
  )
}


