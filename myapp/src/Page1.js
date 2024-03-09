import { useState } from "react";

function Page1(){
    const [course,setcourse]=useState();
    const [deparments,setdeparments]=useState();
    
    function handlechange(event){
        setcourse(event.target.value);
    }

    function handlechange2(event){
        setdeparments(event.target.value);
    }
return(
    <>
    <nav> 
        <div className="d22">COURSE REVIEW SYSTEM
        </div>
        <div className="d21">
            <tr>
                <td> Home </td>
                <td> Department</td>
                <td> Statistics </td>
            </tr>
        </div>
        </nav>
        <br/><br/>
        <div className="d23">
            <h1> REVIEW </h1>
            <br/>
            <p> Departments</p>
        <select value ={deparments} onChange={handlechange2}> 
            <option value="" > select a deparment</option>
            <option value="aerospace">aerospace</option>
            <option value="maths"> maths</option>
            <option value="physics">physics</option>
            <option value="chemistry">chemistry</option>     
            <option value="meta">meta</option>    
            <option value="chemical">chemical</option>  
            <option value="mechanical">mechanical</option>  
            <option value="electrical">electrical</option>  
            <option value="computer">computer</option>  
            </select>
        
        <br/>
        <p> Courses</p>
        {deparments=="aerospace" &&(
        <select value={course} onChange={handlechange}>
            <option value="" > select an option </option>
            <option value="ae102"> ae102</option>
            <option value="ae219">ae219</option>
            <option value="ae216">ae216</option>     
            <option value="ae215">ae215</option>    
            <option value="ae214">ae214</option>   
            </select>
        )}
            </div>
        </>
);}

export default Page1 ; 