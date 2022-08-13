import React from "react";
import features from "../../../mocks/features.js";
import About from "../../blocks/about/about";
import FeaturesList from "../../blocks/features-list/features-list";

function MainPage() {
    return  <>
            <About />
            <FeaturesList features={features} />
            </>
    
}

export default MainPage;