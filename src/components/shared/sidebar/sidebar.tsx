"use client";

// images import start
import dashboardIcon from "@/assets/sidebarIcons/dashboard.svg";
import dashboardIconActive from "@/assets/sidebarIconsActive/dashboardIcon.svg";

import reservationsIcon from "@/assets/sidebarIcons/reservations.svg";
import reservationsIconActive from "@/assets/sidebarIconsActive/reservations.svg";

import tripsIcon from "@/assets/sidebarIcons/trips.svg";
import tripsIconActive from "@/assets/sidebarIconsActive/trips.svg";

import invoicesIcon from "@/assets/sidebarIcons/invoices.svg";
import invoicesIconActive from "@/assets/sidebarIconsActive/invoices.svg";

import planesIcon from "@/assets/sidebarIcons/planes.svg";
import planesIconActive from "@/assets/sidebarIconsActive/planes.svg";

import amenitiesIcon from "@/assets/sidebarIcons/amenities.svg";
import amenitiesIconActive from "@/assets/sidebarIconsActive/amenities.svg";

import contactsIcon from "@/assets/sidebarIcons/contacts.svg";
import contactsIconActive from "@/assets/sidebarIconsActive/contacts.svg";

import teamIcon from "@/assets/sidebarIcons/team.svg";
import teamIconActive from "@/assets/sidebarIconsActive/team.svg";

import crewMembersIcon from "@/assets/sidebarIcons/crewMembers.svg";
import crewMembersIconActive from "@/assets/sidebarIconsActive/crewMembers.svg";

import filesIcon from "@/assets/sidebarIcons/files.svg";
import filesIconActive from "@/assets/sidebarIconsActive/files.svg";

import messagesIcon from "@/assets/sidebarIcons/messages.svg";
import messagesIconActive from "@/assets/sidebarIconsActive/messages.svg";

import calendarIcon from "@/assets/sidebarIcons/calendar.svg";
import calendarIconActive from "@/assets/sidebarIconsActive/calendar.svg";

import settingIcon from "@/assets/sidebarIcons/setting.svg";
import settingIconActive from "@/assets/sidebarIconsActive/setting.svg";

import logoutIcon from "@/assets/sidebarIcons/logout.svg";
import logoutIconActive from "@/assets/sidebarIconsActive/logout.svg";
// images import end

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    icon: dashboardIcon,
    iconActive: dashboardIconActive,
    text: "Dashboard",
    path: "/",
    // path: "/dashboard",
  },
  {
    icon: reservationsIcon,
    iconActive: reservationsIconActive,
    text: "Reservations",
    path: "/reservations",
  },
  {
    icon: tripsIcon,
    iconActive: tripsIconActive,
    text: "Trips",
    path: "/trips",
  },
  {
    icon: invoicesIcon,
    iconActive: invoicesIconActive,
    text: "Invoices",
    path: "/invoices",
  },

  {
    icon: planesIcon,
    iconActive: planesIconActive,
    text: "Planes",
    path: "/planes",
  },
  {
    icon: amenitiesIcon,
    iconActive: amenitiesIconActive,
    text: "Amenities",
    path: "/amenities",
  },
  {
    icon: contactsIcon,
    iconActive: contactsIconActive,
    text: "Contacts",
    path: "/contacts",
  },
  {
    icon: teamIcon,
    iconActive: teamIconActive,
    text: "Team",
    path: "/team",
  },
  {
    icon: crewMembersIcon,
    iconActive: crewMembersIconActive,
    text: "Crew Members",
    path: "/crew-members",
  },
  {
    icon: filesIcon,
    iconActive: filesIconActive,
    text: "Files",
    path: "/files",
  },
  {
    icon: messagesIcon,
    iconActive: messagesIconActive,
    text: "Messages",
    path: "/messages",
  },
  {
    icon: calendarIcon,
    iconActive: calendarIconActive,
    text: "Calendar",
    path: "/calendar",
  },
  {
    icon: settingIcon,
    iconActive: settingIconActive,
    text: "Setting",
    path: "/setting",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[345px] py-8  rounded-[20px] bg-primary space-y-7">
      {/* logo here */}
      <div className="flex items-center justify-center text-4xl font-medium">
        Logo
      </div>
      {/* menu here */}
      <div className="pl-11 w-full">
        {/* menu items */}
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <Link
              href={item.path}
              key={item.text}
              className={`py-5 px-8 rounded-s-full  flex justify-between items-center  w-full  ${
                isActive ? "bg-sidebarActive/10" : ""
              } `}
            >
              <div className="flex items-center space-x-4">
                {/* icon */}
                <Image
                  src={isActive ? item.iconActive : item.icon}
                  width={32}
                  height={32}
                  alt="home icon  "
                  className="w-8"
                />
                {/* text */}
                <p
                  className={` text-sm font-semibold ${
                    isActive ? "text-white" : "text-white/50"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      {/* logout */}
      <div className="pl-11 w-full">
        <Link
          href="/logout"
          className="py-5 px-8 rounded-s-full  flex justify-between items-center  w-full"
        >
          <div className="flex items-center space-x-4">
            {/* icon */}
            <Image
              src={logoutIconActive}
              width={32}
              height={32}
              alt="home icon  "
              className="w-8"
            />
            {/* text */}
            <p className="text-white text-sm font-semibold">Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
