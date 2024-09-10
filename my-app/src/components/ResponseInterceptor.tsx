// src/components/ResponseInterceptor.tsx
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const ResponseInterceptor = () => {
  const navigate = useNavigate();
  const interceptorId = useRef<number | null>(null);

  useEffect(() => {
    interceptorId.current = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status) {
          switch (error.response.status) {
            case 401:
              navigate("/login");
              break;
            case 403:
              alert("Accès interdit.");
              break;
            default:
              return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      if (interceptorId.current !== null) {
        api.interceptors.response.eject(interceptorId.current);
      }
    };
  }, [navigate]);

  return null;
};
