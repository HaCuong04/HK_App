import "./Machine.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/machine.png";

import { Button } from "primereact/button";


function Machine() {

    return ( 
        <div className="button-container2">
            <Button 
            className="custom-vertical-button2" 
            >
            <div className="vertical-content2">
                <img src={icon} alt="icon" className="button-icon-img2" />
                <span className="button-title2">Máy thiết bị</span>
            </div>
            </Button>
        </div>
     );
}

export default Machine;