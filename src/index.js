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
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const App = ()=> {
    return (
        <div>
            <Navbar/>
                <Hero/>
                <Services/>
                <Live/>
                <FAQs/>
                <Team/>
                <ContactUs/>
                <Footer/>
            {/* <Header/> */}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById("root"))
