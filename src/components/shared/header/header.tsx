import React from "react";
import Image from "next/image";
import searchIcon from "@/assets/icons/searchIcon.svg";
import messageIcon from "@/assets/icons/message.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import arrowDownIcon from "@/assets/icons/arrowDown.svg";
import avatar from "@/assets/avatar.png";

const Header = () => {
  return (
    <div className="py-8 px-7 rounded-[20px] bg-white flex items-center justify-between">
      {/* search box start */}
      <div className="flex items-center gap-4 rounded-full border border-[#3B3E4433] px-5 py-4 md:max-w-md w-full">
        {/* search icon */}
        <Image src={searchIcon} width={24} height={24} alt="search icon" />
        {/* input */}
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>
      {/* search box end */}

      <div className="flex items-center justify-end gap-10">
        {/* message icon star */}
        <div className="relative ">
          <Image
            src={messageIcon}
            className="w-7"
            width={28}
            height={28}
            alt="message notification"
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 text-sm  rounded-full bg-[#72ADD7] text-white flex items-center justify-center z-10">
            4
          </div>
        </div>
        {/* message icon end */}

        {/* notificationIcon icon star */}
        <div className="relative ">
          <Image
            src={notificationIcon}
            className="w-7"
            width={28}
            height={28}
            alt="notificationIcon notification"
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 text-sm  rounded-full bg-[#F8BB54] text-white flex items-center justify-center z-10">
            4
          </div>
        </div>
        {/* notificationIcon icon end */}

        {/* avatar */}
        <div className="flex items-center gap-4">
          <Image
            src={avatar}
            className="w-14"
            width={56}
            height={56}
            alt="message notification"
          />
          {/* arrow icons */}
          <Image
            src={arrowDownIcon}
            className="w-6"
            width={24}
            height={24}
            alt="message notification"
          />

        </div>
      </div>
    </div>
  );
};

export default Header;
