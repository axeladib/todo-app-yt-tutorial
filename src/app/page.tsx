import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

import { ITask } from "../../types/task";
import AddShop from "./components/AddShop";
import { getAllShops } from "../../utils/api_shop";
import { getAllPrices } from "../../utils/api_shop";

interface PageProps {
  tasks: ITask;
}

const Home: React.FC<PageProps> = async () => {
  //TODO: Calling the tasks function that are created at api.tsx
  //TODO: Use the getAllTodos() and promise to get the tasks response
  const prices = await getAllPrices();
  console.log(prices);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div>
        {/* TODO: Div for title and description */}
        <div>
          {/* TODO: Create the carimakan title */}
          <h1 className="text-6xl subpixel-antialiased">CariKedaiMakan.com</h1>
          {/* TODO: Create the carimakan description */}
          <p className="text-xl subpixel-antialiased">
            Find the best kedai makan with best price near you
          </p>
        </div>
        {/* TODO: Create the searchbar for cari makan */}
        <div className="form-control">
          {/* TODO: Search input */}
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {/* TODO: Create the button to "Add kedai makan" */}
        <AddShop/>
        {/* TODO: Display kedai makan list after the search complete*/}
      </div>
    </main>
  );
};
export default Home;
