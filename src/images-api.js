import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export const getImages = async (topic, currentPage) => {
    const response = await axios.get("/photos", {
        params: {
            query: topic,
            page: currentPage,
            per_page: 12,
        }
        
    })
    return response.data.urls
}