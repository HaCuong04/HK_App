import "./Production.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/production.png";

import { useState } from "react";

import{ Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function Production() {
    const [visible, setVisible] = useState(false);

    return ( 
        <div className="button-container">
            <Button 
            className="custom-vertical-button" 
            onClick={() => setVisible(true)} 
            >
            <div className="vertical-content">
                <img src={icon} alt="icon" className="button-icon-img" />
                <span className="button-title">Sản xuất</span>
            </div>
            </Button>
            <Dialog visible={visible} onHide={() => setVisible(false)} header="Hành trình sản xuất" modal>
                <p>Dialog Content</p>
            </Dialog>
        </div>
     );
}

export default Production;