import axios from "axios";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Configuração do axios
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
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/user/${userId}`);
  return response.data;
};


export const getUserQuery = (page, pageSize) => {
  return useQuery({
    queryKey: ['users', page, pageSize],  
    queryFn: () => getUsers(page, pageSize) 
  });
}

// export const useDeleteUserMutation = () => {
//   const queryClient = useQueryClient();

//   return useMutation(deleteUser, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(['users']);
//     },
//     onError: (error) => {
//       console.error('Falha ao deletar usuário:', error);
//     },
//   });
// };

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
};

const getTasks = async ({ page, pageSize = 5 }) => {
  const response = await api.get(`/tarefa/tarefas?page=${page}&pageSize=${pageSize}`);
  return response.data;
};

const createPlaylist = async (playlistData) => {
  const response = await api.post('/playlist', playlistData);
  return response.data;
};

const editPlaylist = async (playlistData) => {
  const { id, ...rest } = playlistData;
  const response = await api.patch(`/playlist/${id}`, rest);
  return response.data;
};

const deletePlaylist = async (playlistId) => {
  const response = await api.delete(`/playlist/${playlistId}`);
  return response.data;
};

const getPlaylists = async ({ page, pageSize = 5 }) => {
  const response = await api.get(`/playlist?page=${page}&pageSize=${pageSize}`);
  return response.data;
};

const getPlaylistById = async (playlistId) => {
  const response = await api.get(`/playlist/${playlistId}`);
  return response.data;
};


export const useGetTasksQuery = (taskParams) => {
  return useQuery({
    queryKey: ['tasks', taskParams],
    queryFn: () => getTasks(taskParams),
  });
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
    },
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
    },
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
    },
  });
};

// Funções de requisição para autenticação e recuperação de senha
const checkEmail = async (email) => {
  const response = await api.post('/restore', { email });
  return response.data;
};

const checkCod = async (cod) => {
  const response = await api.post("/restore/confirmed", { cod });
  return response.data;
};

const updatePasswd = async (password) => {
  const response = await api.patch("/restore/new-credentials", { password });
  return response.data;
};

// Hooks para autenticação e recuperação de senha
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
      console.error("Verificação de código falhou", error);
    },
  });
};

export const useUpdatePasswdMutation = () => {
  return useMutation({
    mutationFn: updatePasswd,
    onError: (error) => {
      console.error("Mudança de senha falhou", error);
    },
  });
};

// Hooks para Playlists (Novos hooks)
export const useGetPlaylistsQuery = (playlistParams) => {
  return useQuery({
    queryKey: ['playlists', playlistParams],
    queryFn: () => getPlaylists(playlistParams),
  });
};

export const useGetPlaylistByIdQuery = (playlistId) => {
  return useQuery({
    queryKey: ['playlist', playlistId],
    queryFn: () => getPlaylistById(playlistId),
  });
};

export const useCreatePlaylistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries(['playlists']);
    },
    onError: (error) => {
      console.error('Erro ao criar playlist:', error);
    },
  });
};

export const useEditPlaylistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries(['playlists']);
    },
    onError: (error) => {
      console.error('Edição de playlist falhou:', error);
    },
  });
};

export const useDeletePlaylistMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries(['playlists']);
    },
    onError: (error) => {
      console.error('Remoção de playlist falhou:', error);
    },
  });
};


export default api;