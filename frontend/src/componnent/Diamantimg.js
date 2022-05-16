import React from "react";
import Zoom from "react-img-zoom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Diamantimg(){

    const params=useParams();
    const {id:diamantId}=params;
    const diamantDetails = useSelector(state => state.diamantDetails);
    const { diamant } = diamantDetails;

    const { Component } = React

    const src = diamant.image;
    
    class Zoom extends Component {
      state = {
        backgroundImage: `url(${src})`,
        backgroundPosition: '0% 0%'
      }
    
      handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
      }
    
      render = () =>
        <figure onMouseMove={this.handleMouseMove} style={this.state}>
          <img src={src} />
        </figure>
    }
    
    ReactDO.render(<Zoom />, document.getElementById('root'))
    
}