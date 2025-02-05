import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TagManager from "react-gtm-module";

const GA_MEASUREMENT_ID = "G-RJ449EGX7V"; // Replace with your GA4 Measurement ID
const GTM_ID = "GTM-WLZ2BXK8"; // Replace with your actual GTM ID

const Main = () => {
  useEffect(() => {
    // Initialize Google Tag Manager
    TagManager.initialize({ gtmId: GTM_ID });

    // Add Google Analytics script dynamically
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
