import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RightArrow = ({ onClick }) => (
  <div className="rArrow arrow">
    <FontAwesomeIcon
      onClick={() => onClick()}
      icon={faArrowRight}
      color="rgb(194, 153, 88);"
      size="lg"
    />
  </div>
);

export default RightArrow;
