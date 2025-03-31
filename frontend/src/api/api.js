import axios from "axios";

const API_URL = "http://localhost:5000/api";


export const sendNotification = async (data) => {
  return await axios.post(`${API_URL}/notifications/send`, data);
};


export const fetchNotifications = async () => {
  return await axios.get(`${API_URL}/notifications`);
};

export const scheduleMeeting = async (data) => {
  return await axios.post(`${API_URL}/meetings/create`, data);
};


export const fetchMeetings = async () => {
  return await axios.get(`${API_URL}/meetings`);
};


export const deleteMeeting = async (meetingId) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/meetings/${meetingId}`);
        console.log("Meeting Deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error(" Error deleting meeting:", error);
        throw error;
    }
};


export const updateMeeting = async (id, data) => {
  return await axios.put(`${API_URL}/meetings/${id}`, data);
};
