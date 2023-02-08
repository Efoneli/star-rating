import React, { useState } from "react";
import Star from "./Star";


const StarRating = () => {
  // Initialize a 'courseRating' state
    const [courseRating, setCourseRating] = useState(0)
  // Write a function that returns 5 Star components
  const renderStars = () => {
    const stars = []
    const maxStars = 5
    for (let i = 0; i < maxStars; i++) {
        stars.push(
            <Star 
            key = {i}
            setRating =  {() => handleCourseRating()}
            // isSelected = {}
            />
        ); 
    }
    return stars;
  }
  // Write an event handler that updates the courseRating state.
  const handleCourseRating = (event) => {
    setCourseRating(event)
  }
  // Pass the function to a Star component via props
  
  return (
    <ul className="course--stars">
      {/* Render the Star components */}
      {renderStars()}
    </ul>
  );
};

export default StarRating;
