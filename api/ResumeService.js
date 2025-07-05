import axios from "axios";

export const baseURLL = "http://localhost:8081";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
});

export const generateResume = async (description) => {
  try {
    const response = await axiosInstance.post("/api/v1/resume/generate", {
      userDescription: description,
    });

    return response.data;
  } catch (error) {
    console.error("Error generating resume:", error.response?.data || error.message);
    throw error; // Re-throw to handle it in the UI
  }
};
