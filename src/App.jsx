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
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <h2>Your QR Code:</h2>
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" />
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p>Loading QR Code...</p>
        )}
      </div>
    </div>
  );
};

export default App;
