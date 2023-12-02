import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import AdsBannerPage from "../pages/AdsBannerPage";
import TextAdCreationPage from "../pages/TextAdCreationPage";
import MediaAdCreationPage from "../pages/MediaAdCreationPage";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/select-ads" element={<AdsBannerPage />} />
      <Route path="/select-ads/text-ad" element={<TextAdCreationPage />} />
      <Route path="/select-ads/media-ad" element={<MediaAdCreationPage />} />
      <Route path="*" element={<DashboardPage />} />
    </Routes>
  );
};

export default MyRoutes;
