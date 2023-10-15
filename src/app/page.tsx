import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "../../api";
import { ITask } from "../../types/task";

interface PageProps {
  tasks: ITask;
}

const Home : React.FC<PageProps> = async () => {
  //TODO: Calling the tasks function that are created at api.tsx
  //TODO: Use the getAllTodos() and promise to get the tasks response
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      {/* //FIXME: Add the styling here */}
      <div>
        {/* //TODO: Create the AddTask Component */}
        {/* //FIXME: Add the styling here */}
        <h1 className="mb-3.5">Todo List App by AxelAdib</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
      {/* //TODO: Create the Todolist Component that can passing the tasks as prop */}
    </main>
  );
};
export default Home;
