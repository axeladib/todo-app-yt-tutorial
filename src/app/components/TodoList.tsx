//TODO: Displaying the task by using the passinng task variabe from the getAllTodos function at page.tsx
import React from "react";
import { ITask } from "../../../types/task";
import Task from "../components/Task";

//TODO:  Specify the type of data
interface TodoListProps {
  //FIXME: Fix this type to array of ITask[]
  tasks: ITask;
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Task />
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
