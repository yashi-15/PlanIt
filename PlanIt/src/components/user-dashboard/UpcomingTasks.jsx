import { useState, useEffect } from "react";
import Tasks from "../Tasks";

const UpcomingTasks = () => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);
  const [tasks, setTasks] = useState([]);
  
  // Get all dates for the current month
  const getMonthDates = () => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return {
        date,
        isPast: date < today.setHours(0, 0, 0, 0), // Check if date is in the past
      };
    });
  };

  const monthDates = getMonthDates();

  return (
    <div className="w-full">
      <div role="tablist" className="tabs tabs-lifted overflow-x-auto">
        {monthDates.map(({ date, isPast }, index) => (
          <input
            key={index}
            type="radio"
            name="task_tabs"
            role="tab"
            className={`tab ${isPast ? "text-white" : "text-white"}`}
            aria-label={date.toISOString().split('T')[0]}
            defaultChecked={index === today.getDate() - 1}
            onChange={() => setSelectedDate(date)}
          />
        ))}
      </div>

      <div className="p-4 border rounded-lg">
        <h2 className="font-bold text-lg mb-2">
          Tasks for {selectedDate ? selectedDate.toDateString() : "Select a date"}
        </h2>
        <Tasks date={selectedDate} />
      </div>
    </div>
  );
};

export default UpcomingTasks;
