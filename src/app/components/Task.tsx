//TODO: For action of edit and delete the todoList
"use client";

//TODO: Import necessary module
import { ITask } from "../../../types/task";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
//TODO: Import the deleteTodo and editTodo
import { editTodo,deleteTodo } from "../../../api";
//TODO: Specify the type of data of props will be passing

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  //TODO: Create state management for open modal editTodo
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  //TODO: Create state management for open modal deleteTodo
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false)
  //TODO: Create state management for taskToEdit
  const [taskToEdit,setTaskToEdit] = useState<string>(task.text);
  const router = useRouter();
  //TODO: Create the handleSubmitEditTodo
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async(event)=>{
    event.preventDefault();
    await editTodo({
      id:task.id,
      text:taskToEdit
    })
    setOpenModalEdit(false);
    router.refresh();
  }
  //TODO: Create tje handleDeletedTask
  const handleDeleteTask= async(id:string)=>{
    await deleteTodo(id)
    setOpenModalDeleted(false);
    router.refresh();
  }
  return (
    // TODO: Create table row
    <tr key={task.id}>
        {/* TODO: Display the table data of task */}
      <td className="w-full">{task.text}</td>
      {/* //TODO: Display the actions icon of Edit and Delete */}
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(event) => setTaskToEdit(event.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
