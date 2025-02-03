import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody, reqHeader, responseType = "json") => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
    responseType: responseType // Set the responseType to 'arraybuffer' if needed
  };

  return await axios(reqConfig)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
