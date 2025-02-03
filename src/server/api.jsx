import axios from "axios";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});


const createTask = async (taskData) => {
  const response = await api.post('/tarefa', taskData);
  return response.data;
};

const editTask = async (taskData) => {
  const { id, ...rest } = taskData;
  const response = await api.put(`/tarefa/${id}`, rest);
  return response.data;
};

const updateTaskStatus = async (taskData) => {
  const { id, status } = taskData;
  const response = await api.put(`/tarefa/status/${id}`, { status });
  return response.data;
};

const getTasks = async () => {
  const response = await api.get('/tarefas');
  return response.data;
};

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Criação de tarefa falhou:', error);
    }
  });
};

export const useEditTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(editTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Edição de tarefa falhou:', error);
    }
  });
};

export const useUpdateTaskStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTaskStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Atualização de status da tarefa falhou:', error);
    }
  });
};

export const useGetTasksQuery = () => {
  return useQuery(['tasks'], getTasks);
};

export default api;
