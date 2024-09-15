import React, { Component } from "react";
import Modal from "react-modal";

class PlantModal extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    return <Modal  isOpen={this.props.selectedPlant} style={{
      content: {
       top: '50%',
       left: '50%',
       right: 'auto',
       bottom: 'auto',
       marginRight: '-50%',
       width: '600px',
       maxHeight:'600px',
       transform: 'translate(-50%, -50%)',
       overflowY: 'scroll'
     }
   }
   }>
     <div>
       <div className="pb-1"><b>{this.props.type}</b></div>
       <div><ul className="plant-detail-text"> {this.props.selectedPlant && this.props.selectedPlant[this.props.type.toLowerCase()].map(p=><li>{p}</li>)}</ul></div>
       <div className="ok-btn-div"><a className="btn"  onClick={()=>{this.props.setPlant(null); }}>OK</a> </div>
     </div>
    </Modal>  
  }
}

export default PlantModal;
