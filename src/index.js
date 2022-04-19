import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Live from "./components/Live";
import FAQs from "./components/FAQs";
import Header from "./components/Header";
import "./index.css"

const App = ()=> {
    return (
        <div>
            <Navbar/>
                <Hero/>
                <Services/>
                <Live/>
                <FAQs/>
            {/* <Header/> */}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))