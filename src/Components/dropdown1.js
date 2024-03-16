import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";



export default function Selectdepartment() {
    const [department, setDepartment] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button className="Department"sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
                Department
            </Button>
            <FormControl sx={{ m: 1, minWidth: 400 }}>
                <InputLabel id="demo-controlled-open-select-label">Select The Department</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={department}
                    label="Department"
                    onChange={handleChange}
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
    );
}
