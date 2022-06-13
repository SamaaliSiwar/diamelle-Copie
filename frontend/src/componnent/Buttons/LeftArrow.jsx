import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LeftArrow = ({ onClick }) => (
  <div className="lArrow arrow">
    <FontAwesomeIcon
      onClick={() => onClick()}
      icon={faArrowLeft}
      color="white"
      size="lg"
    />
  </div>
);

export default LeftArrow;
