import React from "react";

const ImageUpload = () => {
  return (
    <div className="">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full border-2 border-blue-700 border-dashed rounded-lg cursor-pointer bg-white"
      >
        <div className="flex  items-center justify-center py-10 px-7 gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.1544 15V19C21.1544 19.5304 20.9437 20.0391 20.5686 20.4142C20.1936 20.7893 19.6849 21 19.1544 21H5.15442C4.62399 21 4.11528 20.7893 3.74021 20.4142C3.36513 20.0391 3.15442 19.5304 3.15442 19V15"
              stroke="#383FE1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.1544 8L12.1544 3L7.15442 8"
              stroke="#383FE1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.1544 3V15"
              stroke="#383FE1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 font-medium">
            Upload Plane Image
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default ImageUpload;
