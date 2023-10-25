//TODO: Import the Itask for typescript identifying data
import { IShop } from "../types/shop";
import { IPrice } from "../types/price";

//TODO: Create the base url for api
//FIXME: 3000 port for rendering NextJS
const baseURL = "http://localhost:3001";

//TODO: Create a function to get all the todos that are created from todos.json or dynamic from the addTodo function
//TODO: Connect server to todos.json and the data will be use in the component of TodoList.jsx
export const getAllShops = async (): Promise<IShop> => {
  //TODO: The "cache : 'no-store'" means use cache
  const response = await fetch(`${baseURL}/shops`, { cache: "no-store" });
  const shops = await response.json();
  return shops;
};

export const getAllPrices = async (): Promise<IPrice> => {
  //TODO: The "cache : 'no-store'" means use cache
  const response = await fetch(`${baseURL}/prices`, { cache: "no-store" });
  const data = await response.json();
  return data;
};

//TODO: Add shop
//TODO: Create the function of promise to addTodo
export const addShop = async (shop: IShop): Promise<IShop> => {
  //TODO: Using the method fetch with property of POST, content-type : json and
  const response = await fetch(`${baseURL}/shops`, {
    //TODO: Specify the callback function
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //TODO: the body of response turn into string
    body: JSON.stringify(shop),
  });
  const newShop = await response.json();
  return newShop;
};
