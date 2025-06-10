// src/services/api.js
import axios from "axios";

const BASE_URL = "https://app.wewantwaste.co.uk/api";

export const fetchSkipsByLocation = async (postcode, area) => {
  const response = await axios.get(`${BASE_URL}/skips/by-location`, {
    params: { postcode, area }
  });
  return response.data;
};
