import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import arrowDown from "@/assets/icons/arrowDown.svg";
import searchIon from "@/assets/icons/searchIcon.svg";
import deleteIcon from "@/assets/icons/deleteIcon.svg";
import { InvoiceType, ProductType } from "@/type/type";

interface ProductRowProps {
  id: string | number | null | undefined;
  handleDeleteProduct: Function;
  dispatch: Function;
  invoiceState: InvoiceType;
}

const ProductRow: FC<ProductRowProps> = ({
  handleDeleteProduct,
  id,
  dispatch,
  invoiceState,
}) => {
  const [product, setProduct] = useState<ProductType>(
    invoiceState.products[id as number] || ({} as ProductType)
  );

  console.log(product)

  useEffect(() => {
    const newProducts = invoiceState.products.filter(
      (product: any, i: number) => i !== id
    );
    dispatch({ type: "products", payload: [...newProducts, product] });
  }, [product.description, product.name, product.price, product.productType]);

  return (
    <tr className="text-sm font-medium text-[#84878B]  text-start">
      <td className="whitespace-nowrap px-3 py-2">
        {/* plane  */}
        <div className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC]">
          {/*  value */}
          <p className="text-[#84878B] text-sm ">
            {product.productType || "plane"}
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
                onClick={() => {
                  setProduct({ ...product, productType: "Halicopter" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Halicopter
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, productType: "Drinks" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Drinks
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, productType: "Flowers" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Flowers
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, productType: "Private Jet" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Private Jet
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, productType: "Airbus" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Airbus
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-2">
        <div className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC]">
          {/*  value */}
          <p className="text-[#84878B] text-sm ">{
          product.name
          }</p>

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
                onClick={() => {
                  setProduct({ ...product, name: "Falcon885X TBA/LTI" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Falcon885X TBA/LTI
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, name: "Falcon8X TBA/LTI" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Falcon8X TBA/LTI
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, name: "Falcon998X TBA/LTI" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Falcon998X TBA/LTI
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, name: "Falcon1428X TBA/LTI" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Falcon1428X TBA/LTI
              </button>
              <button
                onClick={() => {
                  setProduct({ ...product, name: "Falcon6558X TBA/LTI" });
                }}
                className="text-[#84878B] block text-lg"
              >
                Falcon6558X TBA/LTI
              </button>
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-2">
        <input
          type="text"
          name="description"
          onChange={(e) => {
            setProduct({ ...product, description: e.target.value });
          }}
          className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC] focus:outline-none"
          placeholder="Description"
        />
      </td>
      <td className="whitespace-nowrap px-3 py-2">{/* empty */}</td>
      <td className="whitespace-nowrap px-6 py-4 flex ic">
        <div className="flex gap-2">
          <input
            type="text"
            name="total"
            onChange={(e) => {
              setProduct({ ...product, price: parseFloat(e.target.value) });
            }}
            className="px-5 py-4 rounded-xl border relative flex items-center w-full justify-between group border-[#DCDCDC] focus:outline-none"
            placeholder="total"
          />
          <button
            onClick={() => handleDeleteProduct(id)}
            className="bg-[#F36A6A33] rounded-md p-1"
          >
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
