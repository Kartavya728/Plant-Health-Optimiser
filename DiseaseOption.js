import React, { Component } from "react";

class DiseaseOption extends Component {
  render() {
    return <div className="option">
            <div className="disease-option">
                <img className="plant-option-img" src={this.props.imageSrc}></img>
            </div>
            <div className="plant-option-link">{this.props.text}</div>
        </div>
  }
}

export default DiseaseOption;
