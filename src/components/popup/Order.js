import "./Order.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/order.png";

import { useState } from "react";

import{ Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function Order() {
    const [visible, setVisible] = useState(false);

    return ( 
        <div className="button-container">
            <Button 
            className="order-button" 
            onClick={() => setVisible(true)} 
            >
            <div className="order-content">
                <img src={icon} alt="icon" className="order-button-icon-img" />
                <span className="order-button-title">Kế hoạch đơn hàng</span>
            </div>
            </Button>
            <Dialog visible={visible} onHide={() => setVisible(false)} header="Kế hoạch đơn hàng khách hàng" modal>
                <p>Dialog Content</p>
            </Dialog>
        </div>
     );
}

export default Order;