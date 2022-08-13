import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MainPage from "../../pages/main-page/main-page.jsx";
import "./style.css";

function PageWrapper () {
    return (
        <>
            <Header />
            <main className="page-wrapper__main">
                <MainPage />
            </main>
            <Footer />
        </>
    )
}

export default PageWrapper;