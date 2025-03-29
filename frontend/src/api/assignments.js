const API_URL = 'http://localhost:5000/api/assignments';

export const uploadAssignment = async (formData) => {
  const response = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
};

export const fetchAssignments = async () => {
  const response = await fetch(`${API_URL}`);
  return response.json();
};

export const downloadAssignment = (filePath) => {
  window.open(`http://localhost:5000${filePath}`, '_blank');
};


