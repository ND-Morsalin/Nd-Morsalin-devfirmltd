import Image from "next/image";
import calendarIcon from "@/assets/icons/calender.svg";
import CalendarPicker from "@/components/pages/new-invoice/calendarPicker/calendarPicker";
import ImageUpload from "@/components/pages/new-invoice/imageUpload/imageUpload";

const NewInvoice = () => {
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
                <div className="px-5 py-4 rounded-full border">
                  <select
                    id="client"
                    name="client"
                    className="block w-full py-1 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  >
                    <option>Client 1</option>
                    <option>Client 2</option>
                    <option>Client 3</option>
                    <option>Client 4</option>
                  </select>
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
                    <CalendarPicker />

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
             <ImageUpload/>
            </div>
          </div>
          {/* image uploader end*/}
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
