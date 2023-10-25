import React, { useState } from "react";

interface DropdownProps {
  prices: { name: string; id: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ prices }) => {
  const [priceRange, setPriceRange] = useState([{ price: "", id: "" }]);
  return (
    //TODO: Create the dropdown toggle
    <select>
      <option value="">Price range</option>
      {/* FIXME: Error to passed the price from API  */}
      {/* {prices.map((price) => (
        <option value={price.name} key={price.id}>
          {[[price.name]]}
        </option>
      ))} */}
    </select>
  );
};

export default Dropdown;
