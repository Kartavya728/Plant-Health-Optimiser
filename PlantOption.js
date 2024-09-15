import React, { Component } from "react";
import { useNavigate, withRouter } from "react-router-dom";




class PlantOption extends Component {

  openLink(link) {
    this.props.history.push(link);
 }

  render() {
    return <div className="home-bottom-option">
            <div className="plant-option-img-container">
                <img className="plant-option-img" src={this.props.imageSrc}></img>
            </div>
            <div className="plant-option-link"><a  onClick={()=>this.openLink(this.props.link)} >{this.props.text}</a></div>
        </div>
  }
}

export default withRouter(PlantOption);
