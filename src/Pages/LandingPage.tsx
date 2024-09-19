import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeatureHome from "../Components/FeaturesHome";
import Footer from "../Components/Footer";

const LandingPage = () => {

    return (
        <div className="w-full">
            <Navbar />
            <div className="p-14 flex flex-col gap-10">
                <Hero />
                <FeatureHome />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;