import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  //TODO: Calling the tasks function that are created at api.tsx
  //TODO: Use the getAllTodos() and promise to get the tasks response
  return (
    <main className="max-w-4xl mx-auto mt-4">
      {/* //FIXME: Add the styling here */}
      <div>
        {/* //TODO: Create the AddTask Component */}
        {/* //FIXME: Add the styling here */}
        <h1 className="mb-3.5">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList />
      {/* //TODO: Create the Todolist Component that can passing the tasks as prop */}
    </main>
  );
}
