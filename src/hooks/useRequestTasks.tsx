import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import api from "../api";

export interface DataTasksProps {
  id?: string;
  title: string;
  completed: boolean;
  // ... outros campos se houver
}

interface useRequestTasksProps {
  list: DataTasksProps[] | null;
  setList: React.Dispatch<React.SetStateAction<DataTasksProps[] | null>>;
  errorGetAllTasks: AxiosError | null;
  isLoadingGetAllTasks: boolean;
  updateTask: (id: string, idx: number) => Promise<void>;
  getAllTasks: () => Promise<void>;
  createTask: (data: DataTasksProps) => Promise<void>;
  deleteTask: (id: string, idx: number) => Promise<void>;
}

function useRequestTasks(): useRequestTasksProps {
  const [list, setList] = useState<DataTasksProps[] | null>(null);
  const [errorGetAllTasks, seterrorGetAllTasks] = useState<AxiosError | null>(
    null
  );
  const [isLoadingGetAllTasks, setisLoadingGetAllTasks] =
    useState<boolean>(false);

  //pega todas as tarefas
  const getAllTasks = async () => {
    setisLoadingGetAllTasks(true);
    try {
      const response = await api.get<DataTasksProps[]>("/tasks");

      setList(response.data);
      seterrorGetAllTasks(null);
    } catch (err) {
      seterrorGetAllTasks(err as AxiosError);
      setList(null);
    } finally {
      setisLoadingGetAllTasks(false);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  //atualiza uma tarefa especifica pelo id
  const updateTask = async (id: string, idx: number): Promise<void> => {
    if (!list) return;
    try {
      let newStatus: boolean = !list[idx].completed;
      const obj = { completed: newStatus };

      const response = await api.put(`/tasks/${id}`, obj);
      if (response.status == 200) {
        const newList = list.slice();

        if (newList[idx]) {
          newList[idx].completed = newStatus;
          setList(newList);
        }
      }
    } catch (err) {
      console.log(err as AxiosError);
    }
  };

  //cria uma nova task
  const createTask = async (data: DataTasksProps) => {
    try {
      const response = await api.post(`/tasks`, data);
      const newData = response.data.data;

      if (response.status == 201) {
        setList((prev: any) => {
          return [...prev, newData];
        });
      }
    } catch (err) {
      console.log(err as AxiosError);
    }
  };
  //deleta uma task utilizando o id
  const deleteTask = async (id: string, idx: number): Promise<void> => {
    if (!list) return;
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status == 204) {
        let newList = [...list];
        newList.splice(idx, 1);

        setList(newList);
      }
    } catch (err) {
      console.log(err as AxiosError);
    }
  };

  return {
    list,
    setList,
    errorGetAllTasks,
    isLoadingGetAllTasks,
    getAllTasks,
    updateTask,
    createTask,
    deleteTask,
  };
}

export default useRequestTasks;
