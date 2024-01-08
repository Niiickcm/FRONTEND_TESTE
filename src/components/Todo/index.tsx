import { useState, useEffect, ChangeEvent, MouseEvent } from "react";

import "./parts.css";
import { InputArea } from "../InputArea";
import { ListOfActivity } from "../ListOfActivity";
import { InformationAndFilter } from "../InformationAndFilter";

import useRequestTasks, { DataTasksProps } from "../../hooks/useRequestTasks";
import Loading from "../Loading";

function Todo() {
  const { list, isLoadingGetAllTasks, updateTask, createTask, deleteTask } =
    useRequestTasks();

  const [filter, setFilter] = useState(0);
  const [input, setInput] = useState("");
  var totalTasks = list ? list.length : 0;
  const options = ["Todos", "Ativos", "Completos"];

  //valida para mostrar os dados de acordo com o filtro selecionado
  const validFilter = (item: DataTasksProps) => {
    return (
      filter === 0 ||
      (filter === 1 && item.completed === false) ||
      (filter === 2 && item.completed === true)
    );
  };

  //inputa o dado digitado e cria uma nova tarefa
  const handleSubmit = (e: ChangeEvent<HTMLInputElement>, input: string) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    const data = { title: input, completed: false };
    createTask(data);
  };

  //marca como concluída a tarefa ou desmarca
  const checked = (
    e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
    idx: number
  ) => {
    if (!list) return; // Verifica se list é null ou undefined

    const id: string = e.currentTarget.dataset.index || "0";

    updateTask(id, idx);
  };

  //remove uma tarefa
  const removeOne = (
    e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>,
    idx: number
  ) => {
    const id: string = e.currentTarget.dataset.index || "0";
    deleteTask(id, idx);
  };

  return (
    <div className="relative z-10 flex h-auto max-w-xl px-10 mx-auto bg-yellow-3000 md:mx-auto">
      <div className="w-full mt-20 text-left ">
        <div className="flex justify-between align-middle">
          <h1 className="text-4xl font-bold text-white">T A R E F A S</h1>
        </div>

        <InputArea.Root>
          <InputArea.ImageCircle />
          <InputArea.Form
            handleSubmit={handleSubmit}
            input={input}
            setInput={setInput}
          >
            <InputArea.Input input={input} setInput={setInput} />
          </InputArea.Form>
        </InputArea.Root>

        <ListOfActivity.Root>
          {isLoadingGetAllTasks ? (
            <div className="min-h-28 flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            list?.map((item, idx) => {
              if (validFilter(item))
                return (
                  <ListOfActivity.Container>
                    <ListOfActivity.CheckButton
                      checked={(e: MouseEvent<HTMLButtonElement>) =>
                        checked(e, idx)
                      }
                      idx={item.id ?? ""}
                      status={item.completed}
                    />
                    <ListOfActivity.TextStatus
                      checked={(e: MouseEvent<HTMLDivElement>) =>
                        checked(e, idx)
                      }
                      idx={item.id ?? ""}
                      status={item.completed}
                      text={item.title}
                    />
                    <ListOfActivity.RemoveItem
                      idx={item.id ?? ""}
                      removeOne={(e: MouseEvent<HTMLButtonElement>) =>
                        removeOne(e, idx)
                      }
                    />
                  </ListOfActivity.Container>
                );
            })
          )}
        </ListOfActivity.Root>

        <InformationAndFilter.Root>
          <InformationAndFilter.DesktopInfo
            filter={filter}
            options={options}
            setFilter={setFilter}
          >
            <InformationAndFilter.TotalItems total={totalTasks} />
          </InformationAndFilter.DesktopInfo>
          <InformationAndFilter.MobileInfo
            filter={filter}
            options={options}
            setFilter={setFilter}
          />
        </InformationAndFilter.Root>
      </div>
    </div>
  );
}

export default Todo;
