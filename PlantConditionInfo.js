import React, { Component } from "react";
import { useNavigate, withRouter } from "react-router-dom";




class PlantConditionInfo extends Component {

  openLink(link) {
    this.props.history.push(link);
 }

  render() {
    return <div className="plant-condition-main">
            <div className>
              <img className="sensor-img" src={this.props.image}></img>  
            </div> 
            <div className="sensor-detail-main">
              <div className="sensor-detail"><span className="sensor-label">Name : </span> <span className="sensor-value">{this.props.text}</span></div>  
              <div className="sensor-detail"><span className="sensor-label">Value : </span><span className="sensor-value">{this.props.value}</span></div>  
              <div className="sensor-detail"><span className="sensor-label">Condition : </span><span className="sensor-value">{this.props.condition}</span></div>  

            </div> 

          </div> 
  }
}

export default withRouter(PlantConditionInfo);
