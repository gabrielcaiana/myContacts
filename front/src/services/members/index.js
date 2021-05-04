import axios from 'axios';
import { API_URL } from '/public/config/config.json'

export const getMembers = () => axios.get(`${API_URL}/results`)