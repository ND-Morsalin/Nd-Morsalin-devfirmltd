import Image from "next/image";
import React from "react";
import arrowDown from "@/assets/icons/arrowDown.svg";
import searchIon from "@/assets/icons/searchIcon.svg";
import deleteIcon from "@/assets/icons/deleteIcon.svg";

const ProductRow = () => {
  return (
    <tr className="text-sm font-medium text-[#84878B]  text-start">
      <td className="whitespace-nowrap px-3 py-2">
        {/* plane  */}
        <div className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC]">
          {/*  value */}
          <p className="text-[#84878B] text-sm ">Plane</p>

          {/* arrow icon */}
          <Image
            src={arrowDown}
            width={12}
            height={12}
            alt="calendar icon"
            className="w-2 group-hover:rotate-180 transition-all duration-300"
          />
          {/* options */}

          <div className="option-container">
            {/* search box */}
            <div className="rounded-full px-5 py-4 border border-[#3B3E4433] flex items-center gap-1">
              {/* search icon */}
              <Image
                src={searchIon}
                width={24}
                height={24}
                alt="searchIon icon"
                className="w-6"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none focus:outline-none bg-transparent"
              />
            </div>

            {/* options */}
            <div className="mt-5 space-y-5">
              <button className="text-[#84878B] block text-lg">T2390</button>
              <button className="text-[#84878B] block text-lg">T2390</button>
              <button className="text-[#84878B] block text-lg">T2390</button>
              <button className="text-[#84878B] block text-lg">T2390</button>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-2">
      <div className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC]">
          {/*  value */}
          <p className="text-[#84878B] text-sm ">Falcon8X TBA/LTI</p>

          {/* arrow icon */}
          <Image
            src={arrowDown}
            width={12}
            height={12}
            alt="calendar icon"
            className="w-2 group-hover:rotate-180 transition-all duration-300"
          />
          {/* options */}

          <div className="option-container">
            {/* search box */}
            <div className="rounded-full px-5 py-4 border border-[#3B3E4433] flex items-center gap-1">
              {/* search icon */}
              <Image
                src={searchIon}
                width={24}
                height={24}
                alt="searchIon icon"
                className="w-6"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none focus:outline-none bg-transparent"
              />
            </div>

            {/* options */}
            <div className="mt-5 space-y-5">
              <button className="text-[#84878B] block text-lg">Falcon8X TBA/LTI</button>
              <button className="text-[#84878B] block text-lg">Falcon8X TBA/LTI</button>
              <button className="text-[#84878B] block text-lg">Falcon8X TBA/LTI</button>
              <button className="text-[#84878B] block text-lg">Falcon8X TBA/LTI</button>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-2">
        <input type="text" name="description" className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC] focus:outline-none" placeholder="Description" />
      </td>
      <td className="whitespace-nowrap px-3 py-2">{/* empty */}</td>
      <td className="whitespace-nowrap px-6 py-4 flex ic">
        <div className="flex gap-2">
        <input type="text" name="total" className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC] focus:outline-none" placeholder="total" />
          <button className="bg-[#F36A6A33] rounded-md p-1">
            <Image
              src={deleteIcon}
              width={44}
              height={44}
              className="w-11"
              alt="add icon"
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
