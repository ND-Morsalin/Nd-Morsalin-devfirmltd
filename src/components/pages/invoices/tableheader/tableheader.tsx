import React from "react";

const TableHeader = () => {
  return (
    <thead className="border-y dark:border-[#E7ECF3] py-5 text-base font-semibold text-[#3B3E44] ">
      <tr>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Invoice No.
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Trip
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Inv. Date
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Inv. Amount
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Bal. Due
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Payment Method
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Due Date
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Status
        </th>
        <th scope="col" className="px-6 py-4 whitespace-nowrap ">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
