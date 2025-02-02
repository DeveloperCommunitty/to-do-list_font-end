import React, { createContext, useContext } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import api from '../server/api';

const AuthContext = createContext({});

interface Credentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: any;
}

export const AuthProvider = ({ children }) => {
    const queryClient = useQueryClient();

    const loginMutation = useMutation<LoginResponse, Error, Credentials>(
        async (credentials: Credentials) => {
            const response = await api.post('/login', credentials);
            return response.data;
        },
        {
            onSuccess: (data) => {
                localStorage.setItem('token', data.token);
                queryClient.setQueryData(['user'], data.user);
            },
            onError: (error) => {
                console.error('Login falhou:', error);
            }
        }
    );

    const registerMutation = useMutation(
        async (userdata: any) => {
            const response = await api.post('/register', userdata);
            return response.data;
        },
        {
            onSuccess: (data) => {
                queryClient.setQueryData(['user'], data.user);
            },
            onError: (error) => {
                console.error('Registro falhou:', error);
            }
        }
    );

    const logout = () => {
        localStorage.removeItem('token');
        queryClient.setQueryData(['user'], null);
    };

    return (
        <AuthContext.Provider
            value={{
                user: queryClient.getQueryData(['user']),
                signed: !!localStorage.getItem('token'),
                login: loginMutation.mutateAsync,
                register: registerMutation.mutateAsync,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
