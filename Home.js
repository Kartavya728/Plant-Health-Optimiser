import React, { Component } from "react";
import PlantOption from "./PlantOption";
import { withRouter } from "react-router-dom";


class Home extends Component {

    openLink()
    {
        this.props.history.push("/plantuploader");
    }

    render() {
        return (
          <div className="home">
                <div className="home-top">
                     <div className="home-top-container">
                        <div className="home-top-div">
                            <img src=".\images\hang.jpg" className="hang"></img>
                        </div>
                        <div className="home-top-div">
                            <div className="home-top-header1">Save Plant, Save Life</div>
                            <div className="home-top-header2">Upload the picture of diseased plant and get the disease predicted!</div>
                            <div className="padding-1">
                                <a className="btn" onClick={()=>this.openLink()}>GET STARTED</a>
                            </div>
                        </div>
                        <div className="home-top-div">
                            <img src=".\images\hang.jpg" className="hang"></img>
                        </div>
                    </div>   
                </div>
                <div className="home-bottom">
                    <div className="home-bottom-container">
                         <PlantOption imageSrc=".\images\plant.png" text="Know more about plant diseases" link="/plantdisease"></PlantOption>
                         <PlantOption imageSrc=".\images\plantcondition.jpg" text="Know about your plant condition" link="/plantcondition"  ></PlantOption>
                         <PlantOption imageSrc=".\images\plantdoctor.jpg" text="Get solution for plant disease" link="/plantsolution"></PlantOption>
                    </div>    
                </div>
           </div>

        );
    }
}

export default withRouter(Home);


