import React, { Component } from "react";

class PlantInfo extends Component {
  render() {
    var self=this;
    return <div><button className="plant-info" type="button" onClick={()=>{this.props.selectPlant()}}>
          <div><img className="plant-image" src={"./images/"+this.props.image}></img></div>
          <div><b>{this.props.text}</b></div>
        </button></div> 
            
   
  }
}

export default PlantInfo;
