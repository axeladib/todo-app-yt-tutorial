"use client";

import React, { useState, FormEventHandler } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import { getAllPrices, addShop } from "../../../utils/api_shop";
import { IPrice } from "../../../types/price";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddShop = () => {
  

  return (
    <div>
      {/* TODO: Button to open the modal */}
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new shop
        <AiOutlinePlus className="ml-2" size={18} />
      </button>

      {/* TODO: Modal open with form inside */}
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
   
      </Modal>
    </div>
  );
};

export default AddShop;
