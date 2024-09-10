// src/pages/ProtectedPage.tsx
import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

const ProtectedPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/protected'); // Ajuste le chemin selon ton API
        setData(response.data);
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h1>Protected Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ProtectedPage;
