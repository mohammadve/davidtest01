import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from './Home';

export const Layout = () => {
    return (
        <>
            {/* Header Section */}
            <Header />

            {/* Main Page Content Section */}
            <div className="main-content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </div>

            {/* Footer Section */}
            {/* <Footer /> */}
        </>
    )
}
