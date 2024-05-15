import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

const API_KEY = "3YMGh-G1vOJMJEVOYw_0t6Ipvy6C6mHZuPuQHf2fNPo"

export const getImages = async (topic, currentPage) => {
  try {
    const response = await axios.get("/search/photos", {
      headers: {
        authorization: `Client-ID ${API_KEY}`
      },
      params: {
        query: topic,
        page: currentPage,
        per_page: 12,
      }
    });
      
       const data = response.data
    return data.map(image => ({
      small: image.urls.small,
      regular: image.urls.regular
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; 
  }
}