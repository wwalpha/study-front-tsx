const { API_URL } = process.env;

export const USERS_URL = `${API_URL}/users`;
export const NEXT = userId => mode => `${API_URL}/${userId}/${mode}/nextpage`;
export const SAVE = userId => `${API_URL}/${userId}/save`;
export const RESET = userId => `${API_URL}/${userId}/reset`;
