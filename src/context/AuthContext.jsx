import { createContext, useContext } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../server/api';

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await api.post('/auth/login', credentials);
      console.log('Resposta da API:', response.data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('role', data.user.role);
      queryClient.setQueryData(['user'], data.user);
    },
    onError: (error) => {
      console.error('Login falhou:', error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (userdata) => {
      const response = await api.post('/user', { ...userdata, role: 'user' });
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
    localStorage.removeItem('role');
    queryClient.setQueryData(['user'], null);
    console.log('Usuário deslogado');
  };

  const value = {
    user: queryClient.getQueryData(['user']),
    role: localStorage.getItem('role'),
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
