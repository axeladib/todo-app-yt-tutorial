"use client";
import Modal from "./Modal";
import { useState } from "react";

const AddTask = () => {
  //TODO ;Create the logic here

  //TODO: Setup the useRouter to use the .refresh method
  //TODO: Setup the state management for tasks<string> and modalOpen<boolean>
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  //TODO: Create the handleSubmitNewTask fucntion for form

  //TODO: calling the addTodo function from api.tsx passing the id and text property of new created to the api.tsx
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
      </button>
      {/* //TODO: Property including onClick={} to open the Modal component to add task{" "}  */}
      {/* //TODO: Import the Modal pop up component here with prop that contain boolean */}
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form>
          <h3 className="font-bold text-lg">Add a new task</h3>
          <div className="modal-action">
            <input
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter your task here"
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
