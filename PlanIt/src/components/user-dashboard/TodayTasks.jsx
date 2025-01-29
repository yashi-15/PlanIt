import React from "react";
import Tasks from "../Tasks";

const TodayTasks = () => {
    const today = new Date();
    const date = today.toISOString().split('T')[0]; // Extract the date part
    const day = today.toLocaleString("default", { weekday: "long" });
    const formattedDate = today.getDate() + " " + today.toLocaleString('default', { month: 'short' });
    return (
        <>
            <h1 className="text-xl font-bold my-5">
                {formattedDate} | Today | {day}{" "}
            </h1>
            <Tasks date={date} />
        </>
    );
};

export default TodayTasks;