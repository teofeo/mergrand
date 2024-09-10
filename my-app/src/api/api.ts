// src/api/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "10.18.207.240:1234",  // URL de ton serveur Flask
  withCredentials: true,             // Pour envoyer les cookies automatiquement
});

export default api;
