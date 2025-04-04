import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState(""); // To store the QR code URL
  const [error, setError] = useState(""); // To handle errors

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        console.log("Fetching QR Code...");
        const response = await axios.get("https://qr-code-scanner-server.onrender.com/api/qr", {
          responseType: "arraybuffer", // Fetch the QR code image as binary data
        });

        console.log("QR Code fetched successfully!");
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

        // Set the QR code image as base64 for the <img> tag
        setQrCodeUrl(`data:image/png;base64,${base64}`);
      } catch (error) {
        console.error("Error fetching QR code:", error);
        setError("Failed to fetch QR code.");
      }
    };

    fetchQRCode();
  }, []); // Run once when the component mounts

  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "1rem",
  }}
>
  {/* Main Heading */}
  <h1
    style={{
      fontSize: "2rem",
      color: "#1f2937",
      marginBottom: "2rem",
      textAlign: "center",
      marginTop: "6rem"
    }}
  >
    QR Code Generator
  </h1>

  {/* Responsive Centered Card */}
  <div
    style={{
      background: "white",
      padding: "1.5rem",
      borderRadius: "1rem",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "90%", // responsive width
      maxWidth: "350px", // limit on large screens
    }}
  >
    <h2 style={{ color: "#374151", fontSize: "1.2rem", marginBottom: "1rem" }}>
      Scan This QR Code:
    </h2>
    {qrCodeUrl ? (
      <img
        src={qrCodeUrl}
        alt="QR Code"
        style={{ width: "200px", height: "200px" }}
      />
    ) : error ? (
      <p style={{ color: "red" }}>{error}</p>
    ) : (
      <p style={{ color: "#6b7280" }}>Loading QR Code...</p>
    )}
  </div>
</div>


  
  
  

  );
};

export default App;
