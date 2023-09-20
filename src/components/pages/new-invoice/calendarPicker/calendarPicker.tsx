"use client";
import { getDate, getDay } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState<Date>();

  const isWeekday = (date: Date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  // Get the current date
  const currentDate = new Date();

  // Calculate the first day of the current month
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  // Calculate the last day of the current month
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText=" Select date"
        className="focus:outline-none "
        filterDate={isWeekday}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          monthDate,
        }) => (
          <>
            <div className="flex items-center justify-between px-2 py-1">
              <div className="">
                <span className="text-[#121212] font-medium">
                  {monthDate.toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.53319 12.6349L14.1597 18.1627C14.5545 18.5575 15.1468 18.5575 15.5416 18.1627C15.9365 17.7678 15.9365 17.1756 15.5416 16.7807L10.7048 11.8452L15.5416 6.9097C15.9365 6.51486 15.9365 5.9226 15.5416 5.52776C15.3442 5.33034 15.1468 5.23163 14.8507 5.23163C14.5545 5.23163 14.3571 5.33034 14.1597 5.52776L8.53319 11.0555C8.13835 11.5491 8.13835 12.1414 8.53319 12.6349C8.53319 12.5362 8.53319 12.5362 8.53319 12.6349Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.6492 11.1444L10.0622 5.56725C9.97044 5.47473 9.86126 5.4013 9.74098 5.35118C9.62069 5.30107 9.49167 5.27527 9.36136 5.27527C9.23105 5.27527 9.10203 5.30107 8.98174 5.35118C8.86145 5.4013 8.75228 5.47473 8.66052 5.56725C8.47667 5.7522 8.37347 6.00238 8.37347 6.26316C8.37347 6.52394 8.47667 6.77412 8.66052 6.95907L13.5467 11.8946L8.66052 16.7807C8.47667 16.9657 8.37347 17.2159 8.37347 17.4767C8.37347 17.7374 8.47667 17.9876 8.66052 18.1726C8.75194 18.2658 8.86096 18.34 8.98126 18.3909C9.10156 18.4417 9.23076 18.4681 9.36136 18.4687C9.49196 18.4681 9.62115 18.4417 9.74146 18.3909C9.86176 18.34 9.97078 18.2658 10.0622 18.1726L15.6492 12.5954C15.7494 12.503 15.8294 12.3908 15.8841 12.2659C15.9388 12.1411 15.967 12.0062 15.967 11.8699C15.967 11.7336 15.9388 11.5987 15.8841 11.4739C15.8294 11.349 15.7494 11.2368 15.6492 11.1444Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CalendarPicker;
