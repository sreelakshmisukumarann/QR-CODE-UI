import { BASE_URL } from "./BaseUrl";
import { commonAPI } from "./CommonAPI";

// GET QR
export const GetQrAPI = async () => {
  const response = await commonAPI("GET", `${BASE_URL}/api/qr`, null, null, "arraybuffer");
  return response; // Return the response so we can use it in the component
};

// // Send Fingerprint Data
// export const SentFingerPrintAPI = async (data) => {
//     // Ensure that the correct URL is for storing fingerprint
//     const response = await commonAPI("POST", `${BASE_URL}/api/storeFingerprint`, data, null, "json");
//     return response; // Return the response from backend (success or failure)
//   };
