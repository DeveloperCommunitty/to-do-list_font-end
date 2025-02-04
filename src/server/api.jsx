import axios from "axios";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const api = axios.create({
  baseURL: "https://to-do-list-back-end-tgtt.onrender.com",
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

const checkEmail = async (email) => {
  const response = await api.post('/restore', {email});
  console.log(response);
  console.log(email);
  return response.data;
};

const checkCod = async (cod) => {
  const response = await api.post("/restore/confirmed", {cod} );
  return response.data;
}

const updatePasswd = async (password) => {
  const response = await api.patch("/restore/new-credentials", {password} );
  return response.data;
}

export const useCheckEmailMutation = () => {
  return useMutation({
    mutationFn: checkEmail,
    onError: (error) => {
      console.error("Verificação de email falhou", error);
    },
  });
};

export const useCheckCodMutation = () => {
  return useMutation({
    mutationFn: checkCod,
    onError: (error) => {
      console.error("Verificação de Codigo falhou", error);
    },
  });
};

export const useUpdatePasswdMutation = () => {
  return useMutation({
    mutationFn: updatePasswd,
    onError: (error) => {
      console.error("Mudança de password falhou", error);
    },
  });
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
