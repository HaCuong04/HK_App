import Header from "../Header/Header";
import "./DefaultLayout.css";

import arrow from "../../assets/images/arrow.png";

import Customer from "../../components/popup/Customer.js";
import Order from "../../components/popup/Order.js";
import Production from "../../components/popup/Production.js";
import Storage from "../../components/popup/Storage.js";
import StorageUnit from "../../components/button/StorageUnit.js";
import Personnel from "../../components/button/Personnel.js";
import Economy from "../../components/button/Economy.js";
import Machine from "../../components/button/Machine.js";


function DefaultLayout() {

    return (
        <div className="wrapper">
            <Header />
            <div className="container1">
                <Customer />
                <img src={arrow} alt="icon" className="arrow-icon" />
                <Order />
            </div>
            <img src={arrow} alt="icon" className="arrow-down" />
            <div className="container2">
                <Storage />
                <img src={arrow} alt="icon" className="arrow-icon" />
                <Production />
                <img src={arrow} alt="icon" className="arrow-icon" />
                <StorageUnit />
            </div>
            <img src={arrow} alt="icon" className="arrow-up" />
            <div className="container3">
                <Personnel />
                <Machine />
                <Economy />
            </div>
        </div>
    );
}

export default DefaultLayout;