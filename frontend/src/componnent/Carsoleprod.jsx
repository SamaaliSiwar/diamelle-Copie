import React, { useEffect } from "react";
import courses from "./courses";
import Carousel from "react-multi-carousel";
import LeftArrow from "./Buttons/LeftArrow";
import RightArrow from "./Buttons/RightArrow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";

import "../styles/Carsoleprod.css";
import { useDispatch, useSelector } from "react-redux";
import { ListeBaguestest } from "../actions/baguetestActions";
import Baguetest from "./Baguetest";
const dispatch= useDispatch();
const baguetestList = useSelector((state) => state.baguetestList);
const { loading, error, baguestest } = baguetestList;
useEffect(()=>
{
dispatch(ListeBaguestest({}));
},[dispatch]);

const Carsoleprod = () => {
  return (
    <div className="wrapper">
      <Carousel
        arrows={true}
        additionalTransfrom={0}
        autoPlaySpeed={9000}
        autoPlay={true}
        centerMode={false}
        className=""
        containerClass="container"
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
       
      </Carousel>
    </div>
  );
};

export default Carsoleprod;
