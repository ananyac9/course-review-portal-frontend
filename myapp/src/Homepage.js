import Navbar from "./Components/component/Nav";
import StarRating from "./Components/component/StarRating";
import BottomCard from "./Components/component/BottomCard";
import Review from "./Components/component/Review";
import Footer from "./Components/component/Footer";
import React from "react";
import CourseCard from "./Components/component/CourseCard";
import CardTop from "./Components/component/CardTop";

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <CardTop/>
      <StarRating/>
      <Review/>
      <div className="page6">
        <div className="page6a">
          <BottomCard/>
        </div>
        <div className="page6b">
          <BottomCard/>
        </div>
        <div className="page6c">
          <BottomCard/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
