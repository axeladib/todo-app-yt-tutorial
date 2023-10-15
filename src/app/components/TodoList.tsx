//TODO: Displaying the task by using the passinng task variabe from the getAllTodos function at page.tsx
import React from "react";
import { ITask } from "../../../types/task";
import Task from "../components/Task";

//TODO:  Specify the type of data
interface TodoListProps {
  //FIXME: Fix this type to array of ITask[]
  tasks: ITask[];
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
          {/* FIXME: Passed the task and filter the key and prop that will be used in task */}
          {tasks.map((task)=>(
            <Task key={task.id} task={task}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
