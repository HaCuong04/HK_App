import "./StorageUnit.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/storageunit.png";

import { Button } from "primereact/button";


function StorageUnit() {

    return ( 
        <div className="button-container">
            <Button 
            className="custom-vertical-button" 
            >
            <div className="vertical-content">
                <img src={icon} alt="icon" className="button-icon-img" />
                <span className="button-title">Kho thành phẩm</span>
            </div>
            </Button>
        </div>
     );
}

export default StorageUnit;