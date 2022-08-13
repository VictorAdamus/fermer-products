import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import features from "../../mocks/features.js";
import './style.css';

const App = function () {
    return (
        <PageWrapper features={features} />
    )
}

export default App;