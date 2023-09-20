"use client";
import Image from "next/image";
import calendarIcon from "@/assets/icons/calender.svg";
import arrowDown from "@/assets/icons/arrowDown.svg";
import searchIon from "@/assets/icons/searchIcon.svg";
import CalendarPicker from "@/components/pages/new-invoice/calendarPicker/calendarPicker";
import ImageUpload from "@/components/pages/new-invoice/imageUpload/imageUpload";
import ProductRow from "@/components/pages/new-invoice/productRow/productRow";
import { InvoiceType } from "@/type/type";
import { Key, useEffect, useReducer } from "react";

const initialState: InvoiceType = {
  client: "",
  date: new Date(),
  trip: "",
  planeImage: "",
  products: [
    {
      productType: "",
      name: "Falcon8X TBA/LTI",
      description: "",
      price: 0,
    },
  ],
};

const reducer = (state: InvoiceType, action: any) => {
  switch (action.type) {
    case "client":
      return { ...state, client: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "trip":
      console.log(action);
      return { ...state, trip: action.payload };
    case "planeImage":
      return { ...state, planeImage: action.payload };
    case "products":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const NewInvoice = () => {
  const [invoiceState, dispatch] = useReducer(reducer, initialState);
  const handleEmptyNewProduct = () => {
    const newProduct = {
      productType: "",
      name: "",
      description: "",
      price: 0,
    };
    dispatch({
      type: "products",
      payload: [...invoiceState.products, newProduct],
    });
  };

  // delete added product
  const handleDeleteProduct = (index: number) => {
    const newProducts = invoiceState.products.filter(
      (product: any, i: number) => i !== index
    );
    dispatch({ type: "products", payload: newProducts });
  };
useEffect(()=>{
  console.log(invoiceState)

},[invoiceState])
  return (
    <div className="w-full space-y-8">
      {/* page title */}
      <div className="flex items-center justify-between py-8">
        <div className="py-3">
          <h1 className="text-3xl font-semibold text-gray-800">Invoices</h1>
          <p className="">Invoices / New Invoice</p>
        </div>
      </div>
      {/* page title end */}

      <div className="p-8 bg-white rounded-lg ">
        <div className="flex gap-24">
          <div className="flex-1 ">
            <div className="flex items-center gap-5">
              {/* select client */}
              <div className="flex-1 ">
                <label
                  htmlFor="client"
                  className="block text-lg  font-semibold text-[#3B3E44] py-4"
                >
                  Select
                </label>
                <div className="px-5 py-4 rounded-full border relative flex items-center w-full justify-between group">
                  <p className="text-[#84878B] text-sm ">
                    {invoiceState.client
                      ? `${invoiceState.client}`
                      : "Select client"}
                  </p>

                  {/* arrow icon */}
                  <Image
                    src={arrowDown}
                    width={12}
                    height={12}
                    alt="calendar icon"
                    className="w-2 group-hover:rotate-180 transition-all duration-300"
                  />
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
                      <button
                        onClick={() =>
                          dispatch({ type: "client", payload: "Client 1" })
                        }
                        className="text-[#84878B] block text-lg"
                      >
                        Select Client 1
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "client", payload: "Client 2" })
                        }
                        className="text-[#84878B] block text-lg"
                      >
                        Select Client 2
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "client", payload: "Client 3" })
                        }
                        className="text-[#84878B] block text-lg"
                      >
                        Select Client 3
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "client", payload: "Client 4" })
                        }
                        className="text-[#84878B] block text-lg"
                      >
                        Select Client 4
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* select client end */}
              {/* select Date pick */}
              <div className="p-3 w-[300px]">
                <label
                  htmlFor="invoice-date"
                  className="block text-lg  font-semibold text-[#3B3E44] py-4"
                >
                  Invoice Date
                </label>
                <label htmlFor="invoice-date" className="">
                  <div className="px-5 py-4 rounded-full border flex items-center justify-between">
                    <CalendarPicker dispatch={dispatch} />

                    <Image
                      src={calendarIcon}
                      width={24}
                      height={24}
                      alt="calendar icon"
                    />
                  </div>
                </label>
              </div>
              {/* select Date pick end */}
            </div>

            {/* Trip */}
            <div className="w-[254px] group">
              <label
                htmlFor="trip"
                className="block text-lg  font-semibold text-[#3B3E44] py-4"
              >
                Trip
              </label>
              <div className="px-5 py-4 rounded-full border relative flex items-center w-full justify-between">
                {/* trip value */}
                <p className="text-[#84878B] text-sm ">
                {invoiceState.trip
                      ? `${invoiceState.trip}`
                      : "Select trip"}
                </p>

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
                    <button
                      onClick={() =>
                        dispatch({ type: "trip", payload: "T2391" })
                      }
                      className="text-[#84878B] block text-lg"
                    >
                      T2391
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "trip", payload: "T234390" })
                      }
                      className="text-[#84878B] block text-lg"
                    >
                      T234390
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "trip", payload: "T23rw90" })
                      }
                      className="text-[#84878B] block text-lg"
                    >
                      T23rw90
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "trip", payload: "T2390rw" })
                      }
                      className="text-[#84878B] block text-lg"
                    >
                      T2390rw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* image uploader */}
          <div className="min-w-[186px] ">
            <div className="">
              <label
                htmlFor="dropzone-file"
                className="block text-lg  font-semibold text-[#3B3E44] py-4"
              >
                Plane Image
              </label>
              <ImageUpload />
            </div>
          </div>
          {/* image uploader end*/}
        </div>
      </div>

      {/* product  */}
      <div className="p-8 bg-white rounded-lg ">
        <div className="  ">
          <div className="flex flex-col w-full py-10 bg-white rounded-lg">
            <div className="">
              <div className="min-w-full py-2">
                <div className="">
                  <table className="min-w-full overflow-auto font-medium ">
                    <thead className="border-b py-5 text-base text-start font-semibold text-[#3B3E44] ">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  text-start "
                        >
                          Products Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  text-start "
                        >
                          Products
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  text-start "
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  text-start "
                        >
                          {/* empty col */}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  text-start "
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceState.products.map(
                        (
                          product: any,
                          index:  string | number | null | undefined
                        ) => (
                          <ProductRow
                            key={index}
                            id={index}
                            handleDeleteProduct={handleDeleteProduct}
                            dispatch={dispatch}
                            invoiceState={invoiceState}
                          />
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* + Add Product */}
        <button
          onClick={handleEmptyNewProduct}
          className="mt-20 text-primary mb-5"
        >
          + Add Product
        </button>
        <hr />
        {/* sub total */}
        <div className="ml-auto space-y-3 w-fit py-4">
          <div className="grid grid-cols-2 gap-x-8">
            <p className="text-[#3B3E44] text-lg font-semibold text-end">
              Sub Total:
            </p>
            <p className="text-[#84878B] text-lg font-medium">$ 0.00</p>

            <p className="text-[#3B3E44] text-lg font-semibold text-end">
              TVA :
            </p>
            <p className="text-[#84878B] text-lg font-medium">$ 0.00</p>
          </div>
        </div>
        <hr />

        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 ">
            <button className="py-4 px-12 rounded-full bg-primary text-white text-lg font-semibold border border-[#84878B] ">
              Save
            </button>
            <button className="py-4 px-12 rounded-full  text-[#84878B] text-lg font-semibold border border-[#84878B] ">
              cancle
            </button>

            <button className="py-4 px-12 rounded-full bg-primary text-white text-lg font-semibold border border-[#84878B] ">
              Download Invoice
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <p className="text-primary text-lg font-semibold text-end">TVA :</p>
            <p className="text-primary text-lg font-medium">$ 0.00</p>
          </div>
        </div>
      </div>
      {/* product  description */}
    </div>
  );
};

export default NewInvoice;
