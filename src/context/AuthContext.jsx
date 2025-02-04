import { createContext, useContext, useMemo } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../server/api';

// Criação do contexto
const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Mutação para login
  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await api.post('/auth/login', credentials);
      console.log('Resposta da API:', response.data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('Dados recebidos na onSuccess:', data);
      localStorage.setItem('token', data.access_token);
      queryClient.setQueryData(['user'], data.user);
      console.log('Token salvo no localStorage:', data.access_token);
    },
    onError: (error) => {
      console.error('Login falhou:', error);
      // Adicione um estado de erro aqui se necessário
    },
  });

  // Mutação para registro
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
      // Adicione um estado de erro aqui se necessário
    },
  });

  // Função para logout
  const logout = () => {
    localStorage.removeItem('token');
    queryClient.setQueryData(['user'], null);
  };

  // Valor do contexto
  const value = useMemo(() => ({
    user: queryClient.getQueryData(['user']),
    signed: !!localStorage.getItem('token'),
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout,
  }), [queryClient, loginMutation, registerMutation]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);