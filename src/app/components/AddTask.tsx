"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState, FormEventHandler } from "react";
import { addTodo } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddTask = () => {
  //TODO: Create the logic here
  //TODO: Setup the useRouter to use the .refresh method
  const router = useRouter();
  //TODO: Setup the state management for tasks<string> and modalOpen<boolean>
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  //TODO: Create the handleSubmitNewTask functiontion for form to submit
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    //TODO: calling the addTodo function from api.tsx passing the id and text property of new created to the api.tsx
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    //FIXME: Debugging

    //TODO: Emptying thenewTaskValue variable
    setNewTaskValue("");
    //TODO: Close the modal when submit the addTodo properties
    setModalOpen(false);
    //TODO: Refresh to display the item of addTodo display at the main screen
    router.refresh();
  };

  //TODO: Then emptying the input fields
  //TODO: Then when the submit button click the Modal is close
  //TODO: Then use the useRouter.refresh to display the data that are being created at the api
  return (
    //TODO: Create the AddTask UI here
    <div>
      {/* //TODO: Create the button for adding the task  */}
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new task
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
      {/* //TODO: Property including onClick={} to open the Modal component to add task{" "}  */}
      {/* //TODO: Import the Modal pop up component here with prop that contain boolean */}
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add a new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter your task here"
              onChange={(event) => setNewTaskValue(event.target.value)}
            />
            <button className="btn">Submit</button>
          </div>
        </form>
      </Modal>
      {/* //TODO: create form with onSubmit function to handle the submission of new Todo and */}
      {/* //TODO: form to input with value of newTaskValuye and onChange setNewTaskValue to set the target */}
      {/* //TODO: form to button with type submit */}
    </div>
  );
};

export default AddTask;
