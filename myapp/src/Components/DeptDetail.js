import React, { useState, useEffect } from 'react';
import axios from "axios";
import topimg from "./top10.png"
import { Table } from "@mui/material"

export default function DeptDetail() {
    const [departmentCourses, setDepartmentCourses] = useState({});
  
    useEffect(() => {
      fetchDepartmentCourses();
    }, []);
  
    const fetchDepartmentCourses = async () => {
      try {
        const departments = [ "AE", "ChE", "CE", "CSE", "EE", "Math", "ME", "Physics"];
  
        const requests = departments.map(department =>
          axios.get(`dept/:dept_id/top_courses`)
        );
  
        const responses = await Promise.all(requests);
  
        const courses = responses.reduce((acc, response, index) => {
          const department = departments[index];
          acc[department] = response.data;
          return acc;
        }, {});
  
        setDepartmentCourses(courses);
      } catch (error) {
        console.error('Error fetching department courses:', error);
      }
    };
  
  


    return(
        <div className="department-detail">
            
            <div className="top10course">
                <img src={topimg} className="topimg" />
                
                    <Table className="table">
                        <thead>
                        <tr className="heading-table"> 
                            <th>Rank</th>
                            <th>Course</th>
                            
                            
                            <th>Dept. Average Rating</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                            {Object.keys(departmentCourses).map(department => (
                              <div key={department}>
                                  {departmentCourses[department].map(course => (
                                    <tr key={course.id}>
                                      <td>{course.name}</td>
                                      <td>{course.average_rating}</td>
                                    
                                    </tr>
                                  ))}
                              </div>
                            ))}
                        
                        
                        </tbody>
                        
                    </Table>
                    
                
            </div>

        </div>
    )
}