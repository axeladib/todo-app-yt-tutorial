//TODO: Import the Itask for typescript identifying data
import { ITask } from "./types/task";

//TODO: Create the base url for api
//FIXME: 3000 port for rendering NextJS
const baseURL = "http://localhost:3001";

//TODO: Create a function to get all the todos that are created from todos.json or dynamic from the addTodo function
//TODO: Connect server to todos.json and the data will be use in the component of TodoList.jsx
export const getAllTodos = async (): Promise<ITask> => {
  //TODO: The "cache : 'no-store'" means use cache
  const response = await fetch(`${baseURL}/tasks`, { cache: "no-store" });
  const todos = await response.json();
  return todos;
};

//TODO: Create the function of promise to addTodo
export const addTodo = async (todo: ITask): Promise<ITask> => {
  //TODO: Using the method fetch with property of POST, content-type : json and
  const response = await fetch(`${baseURL}/tasks`, {
    //TODO: Specify the callback function
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //TODO: the body of response turn into string
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  return newTodo;
};

//TODO: Create the editTodo
export const editTodo = async (todo: ITask): Promise<ITask> => {
  //TODO: Create the response that return updatedTodo
  const response = await fetch(`${baseURL}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await response.json();
  return updatedTodo;
};

//TODO: Create deleteTodo
export const deleteTodo = async (id: string):Promise<void> => {
  //TODO: fetch the url with id of the desire delete item
  await fetch(`${baseURL}/tasks/${id}`, {
    method: "DELETE",
  });
};
