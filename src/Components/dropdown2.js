import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";




export default function SelectOptions() {
    const [course, setCourse] = React.useState("");
    const [openD, setOpenD] = React.useState(false);
    const [openC, setOpenC] = React.useState(false);
    const [department, setDepartment] = React.useState("");
    let navigate = useNavigate();
    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };
    const handleCloseDepartment = () => {
        setOpenD(false);
        console.log(1)
    };

    const handleOpenDepartment = () => {
        setOpenD(true);
        setOpenC(false);
        console.log(2)
    };
    const handleCloseCourse = () => {
        setOpenC(false);
        console.log(3)
    };

    const handleOpenCourse = () => {
        setOpenC(true);
        setOpenD(false);
        console.log(4)
    };


    return (
        <div>
            <div>
                <Button className="department" sx={{ display: "block", mt: 2 }} onClick={handleOpenDepartment}>
                    Department
                </Button>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-controlled-open-select-label">Select The Department</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openD}
                        onClose={handleCloseDepartment}
                        onOpen={handleOpenDepartment}
                        value={department}
                        label="Department"
                        onChange={handleDepartmentChange}
                    >

                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Computer Science Engineering</MenuItem>
                        <MenuItem value={20}>Electrical Engineering</MenuItem>
                        <MenuItem value={30}>Mechanical Engineering</MenuItem>

                    </Select>
                </FormControl>
            </div>
            <div>
                <Button className="course" sx={{ display: "block", mt: 2 }} onClick={handleOpenCourse}>
                    course
                </Button>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-controlled-open-select-label">Select The Course</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={openC}
                        onClose={handleCloseCourse}
                        onOpen={handleOpenCourse}
                        value={course}
                        label="Course"
                        onChange={handleCourseChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>CS101</MenuItem>
                        <MenuItem value={20}>CS209</MenuItem>
                        <MenuItem value={30}>DS111</MenuItem>

                    </Select>
                </FormControl>
            </div>
            <div className="flex gap-5 justify-between mt-12 whitespace-nowrap max-md:mt-10">
                <div className="grow justify-center px-14 py-3 text-black rounded-md border border-solid bg-neutral-200 border-zinc-500 max-md:px-5" onClick={() => { setCourse("None"); setDepartment("None") }}>
                    Clear
                </div>
                <div className="grow justify-center px-12 py-3.5 text-center text-white bg-cyan-600 rounded-lg max-md:px-5" onClick={()=>{
                    console.log(course);
                    navigate('/course/'+course)
                }}>
                    Submit
                </div>
            </div>
        </div>
    );
}
