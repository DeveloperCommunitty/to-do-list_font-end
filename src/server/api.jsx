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

const getUsers = async (page, pageSize) => {
  const response = await api.get(`/user?page=${page}&pageSize=${pageSize}`);
  return response.data;
}

export const deleteUser = async (userId) => {
  const response = await api.delete(`/user/${userId}`);
  return response.data;
}

export const getUserQuery = (page, pageSize) => {
  return useQuery({
    queryKey: ['users', page, pageSize],  
    queryFn: () => getUsers(page, pageSize) 
  });
}

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Falha ao deletar usuário:', error);
    }
  });
}

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

const deleteTask = async (task) => {
    const { id } = task;
    const response = await api.delete(`/tarefa/${id}`);
    return response.data;
}

const getTasks = async ({ page, pageSize = 5 }) => {
  const response = await api.get(`/tarefa/tarefas?page=${page}&pageSize=${pageSize}`);
  return response.data;
};

const checkEmail = async (email) => {
  const response = await api.post('/restore', { email });
  console.log(response);
  console.log(email);
  return response.data;
};

const checkCod = async (cod) => {
  const response = await api.post("/restore/confirmed", { cod });
  return response.data;
}

const updatePasswd = async (password) => {
  const response = await api.patch("/restore/new-credentials", { password });
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

const queryClient = useQueryClient();

export const useCreateTaskMutation = () => {
  return useMutation({
    mutationFn: createTask, 
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Erro ao criar tarefa:', error);
    },
  });
};

export const useEditTaskMutation = () => {
  return useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Edição de tarefa falhou:', error);
    }
  });
};

export const useUpdateTaskStatusMutation = () => {
  return useMutation({
    mutationFn: updateTaskStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Atualização de status da tarefa falhou:', error);
    }
  });
};

export const useDeleteTaskMutation = () => {
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
    onError: (error) => {
      console.error('Remoção de tarefa falhou:', error);
    }
  });
}

export const useGetTasksQuery = (taskParams) => {
  return useQuery({
    queryKey: ['tasks', taskParams],
    queryFn: () => getTasks(taskParams),
  });
};

export default api;
