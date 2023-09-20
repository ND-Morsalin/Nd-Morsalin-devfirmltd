import Image from "next/image";
import React from "react";
import addIcon from "@/assets/icons/addIcon.svg";
import editIcon from "@/assets/icons/editIcon.svg";
import deleteIcon from "@/assets/icons/deleteIcon.svg";
import TableHeader from "@/components/pages/invoices/tableheader/tableheader";
import Link from "next/link";

const Invoice = () => {
  return (
    <div className="w-full ">
      {/* page title */}
      <div className="flex items-center justify-between py-8">
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-800">Invoices</h1>
          <p className="">Invoices</p>
        </div>
        {/* add invoice button */}
        <Link
          href={"/invoices/new-invoice"}
          className="bg-primary text-white text-lg font-semibold px-12 py-6 rounded-full flex items-center justify-center gap-[10px]"
        >
          <Image
            src={addIcon}
            width={32}
            height={32}
            className="w-8"
            alt="add icon"
          />
          Add Invoice
        </Link>

        {/* add invoice button end */}
      </div>
      {/* page title end */}

      {/* invoice table */}
      <div className="w-full bg-white rounded-lg">
        <div className=" overflow-x-auto  ">
          <div className="flex flex-col w-full py-10 bg-white rounded-lg">
            <div className="">
              <div className="overflow-x-auto min-w-full py-2">
                <div className="">
                  <table className="min-w-full overflow-auto font-medium ">
                    <TableHeader />
                    <tbody>
                      {Array(10)
                        .fill(0)
                        .map((_, i) => (
                          <tr
                            key={i}
                            className="text-sm font-medium text-[#84878B] text-center"
                          >
                            <td className="whitespace-nowrap px-6 py-4">
                              I909112
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              T901122
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              23/08/2022
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              13.500.000
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              4.500.000
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">ACH</td>
                            <td className="whitespace-nowrap px-6 py-4">
                              01/31/2023
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              Unpaid
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex ic">
                              <div className="grid grid-cols-2 gap-2">
                                {/* edit button */}
                                <button className="bg-primary/25  rounded-md p-1">
                                  <Image
                                    src={editIcon}
                                    width={44}
                                    height={44}
                                    className="w-11"
                                    alt="add icon"
                                  />
                                </button>
                                {/* delete button */}

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
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
