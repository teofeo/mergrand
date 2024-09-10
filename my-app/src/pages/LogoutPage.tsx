import React, { useEffect } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await api.post('/logout'); // Ajuste le chemin selon ton API
        navigate('/login');
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h1>Deconnected</h1>
    </div>
  );
};

export default LogoutPage;
