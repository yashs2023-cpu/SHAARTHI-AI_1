import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('saarthi_auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('saarthi_auth_token');
      localStorage.removeItem('saarthi_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const authService = {
  async login(email, password) {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('saarthi_auth_token', data.token);
      localStorage.setItem('saarthi_user', JSON.stringify(data.user));
      return { success: true, user: data.user, token: data.token };
    } catch (error) {
      const message = error.response?.data?.error || 'Login failed. Check your connection.';
      return { success: false, error: message };
    }
  },

  async register(name, email, phone, password, language) {
    try {
      const { data } = await api.post('/auth/register', { name, email, phone, password, language });
      // Don't auto-login on register — let user login manually
      return { success: true, user: data.user };
    } catch (error) {
      const message = error.response?.data?.error || 'Registration failed. Try again.';
      return { success: false, error: message };
    }
  },

  async getProfile() {
    try {
      const { data } = await api.get('/auth/profile');
      localStorage.setItem('saarthi_user', JSON.stringify(data));
      return { success: true, user: data };
    } catch (error) {
      return { success: false, error: 'Session expired' };
    }
  },

  getCurrentUser() {
    try {
      const user = localStorage.getItem('saarthi_user');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },

  getToken() {
    return localStorage.getItem('saarthi_auth_token');
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  logout() {
    localStorage.removeItem('saarthi_auth_token');
    localStorage.removeItem('saarthi_user');
    localStorage.removeItem('saarthi_active_persona');
  },
};

export { api };
export default authService;
