import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";
import axios from "axios";


const labels = {
  0.0: "not there",
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function StarRating() {
  const [ratingValue, setRatingValue] = React.useState(2.5);
  const [sliderValue, setSliderValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
    // Set slider value based on rating
    setSliderValue(newValue );
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    // Set rating value based on slider
    setRatingValue(newValue );
  };
  // here we have to use the post attribute of the axios
  
  /*  const handlerating = (e)=>{
        e.preventDefault();
        axios.post(" " , { // api add karni hai 
          rating:ratingValue,
          sliderValue:sliderValue
        })
        .then((response=>{
          console.log(response);
        }))
        .catch((error=>{
          console.log("there is error " , error )
        }))
    } */

  return (
    <div className="d6">
      <h1> YOUR RATING </h1>
      <div className="d5">
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="hover-feedback"
            defaultValue={2.5}
            value={ratingValue}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={handleRatingChange}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {ratingValue !== null && (
            <Box sx={{ ml: 2 }}>
              {labels[hover !== -1 ? hover : ratingValue]}
            </Box>
          )}
        </Box>
      </div>
      <br />
      <div className="d6c">
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          aria-label="Rating"
          valueLabelDisplay="auto"
          min={0}
          max={5}
          step={.5} // this creates gap of .5 between each value 
        />
      </div>
      <br />
      <button type="button" className="btn btn-submit" >
        Submit
      </button>
    </div>
  );
}
