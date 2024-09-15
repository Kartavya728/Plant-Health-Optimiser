import React, { Component } from "react";
import PlantInfo from "./PlantInfo";
import plantData from './../data/plantdetails.json';
import LOADING_ICON from  "./../images/loading.gif";
import {  withRouter } from "react-router-dom";

import PlantModal from "./PlantModal";

class PlantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlant:null, 
    };
  }

  setPlant(p)
  {
    this.setState({selectedPlant:p});
  }

  render() {
   
    return <div className="plant-details">
            <div className="plant-details-header">{this.props.type}</div>
              <div className="plant-container">
                    {plantData.map(p=> <div><PlantInfo image={p.image} text={p.name} selectPlant={()=>this.setPlant(p)}></PlantInfo></div>
                    )}
              </div>
              <div>
                  <PlantModal selectedPlant={this.state.selectedPlant} type={this.props.type} setPlant={(p)=>this.setPlant(p)}></PlantModal>
              </div>
        </div>
  }
}

export default withRouter(PlantDetails);
