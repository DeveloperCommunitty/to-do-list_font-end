import  { createContext, useContext } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../server/api';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();


  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await api.post('/login', credentials);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData(['user'], data.user);
    },
    onError: (error) => {
      console.error('Login falhou:', error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userdata) => {
      const response = await api.post('/register', userdata);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
    },
    onError: (error) => {
      console.error('Registro falhou:', error);
    },
  });

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.setQueryData(['user'], null);
  };

  const value = {
    user: queryClient.getQueryData(['user']),
    signed: !!localStorage.getItem('token'),
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);