import "./css/Economy.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/economy.png";

import { Button } from "primereact/button";


function Economy() {

    return ( 
        <div className="button-container2">
            <Button 
            className="custom-vertical-button2" 
            >
            <div className="vertical-content2">
                <img src={icon} alt="icon" className="button-icon-img2" />
                <span className="button-title2">Tài chính</span>
            </div>
            </Button>
        </div>
     );
}

export default Economy;