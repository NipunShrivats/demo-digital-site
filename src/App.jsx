import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

import Seo from "./Pages/AllServices/Seo/Seo";
import WebDesigning from "./Pages/AllServices/WebDesigning/WebDesigning";
import GraphicDesigning from "./Pages/AllServices/GraphicDesigning/GraphicDesigning";
import VideoEditing from "./Pages/AllServices/VideoEditing/VideoEditing";
import SocialMediaManagement from "./Pages/AllServices/SocialMediaManagement/SocialMediaManagement";
import BrandPromotion from "./Pages/AllServices/BrandPromotion/BrandPromotion";
import Policy from "./Pages/Policy/Policy";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/servies/seo" exact={true} element={<Seo />} />
          <Route
            path="/services/webdesigning"
            exact={true}
            element={<WebDesigning />}
          />
          <Route
            path="/services/graphicdesigning"
            exact={true}
            element={<GraphicDesigning />}
          />
          <Route
            path="/services/videoediting"
            exact={true}
            element={<VideoEditing />}
          />
          <Route
            path="/services/socialmediamanagement"
            exact={true}
            element={<SocialMediaManagement />}
          />
          <Route
            path="/services/brandpromotion"
            exact={true}
            element={<BrandPromotion />}
          />
          <Route path="/PrivacyPolicy" exact={true} element={<Policy />} />
        </Routes>
        <div className="container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
