import Header from "../Header/Header";
import "./DefaultLayout.css";

function DefaultLayout() {
    return (
        <div className="wrapper">
            <Header />
            <div className="container1">
                <div className="content">
                    <h1>helloooo</h1>
                </div>
            </div>
            <div className="container2">
                <div className="content">
                    <h1>helloooo</h1>
                </div>
            </div>
            <div className="container3">
                <div className="content">
                    <h1>helloooo</h1>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;