import axios from 'axios';

const API_URL = "http://localhost:5000/api/admin";

// Admin Register
export const registerAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, adminData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Admin Login
export const loginAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, adminData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
