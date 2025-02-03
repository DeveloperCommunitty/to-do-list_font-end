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

const deleteTask = async (task) => {
    const { id } = task
    const response = await api.delete(`/tarefa/${id}`);
    return response.data;
}

const getTasks = async (taskParams) => {
    const { page } = taskParams;
    const response = await api.get(`/tarefa/tarefas?page=${page}&pageSize=5`);
    return response.data;
  };

export const useCreateTaskMutation = () => {
    const queryClient = useQueryClient();
  
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
  const queryClient = useQueryClient();

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
  const queryClient = useQueryClient();

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
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks']);
          },
          onError: (error) => {
            console.error('Remoção de tarefa falhou:', error);
          }
    })

}
export const useGetTasksQuery = (taskParams) => {
    return useQuery({
      queryKey: ['tasks', taskParams],
      queryFn: () => getTasks(taskParams),
    });
  };

export default api;
