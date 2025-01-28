import React from "react";
import Tasks from "../Tasks";

const TodayTasks = () => {
    const today = new Date();
    const date = today.getDate() + " " + today.toLocaleString('default', { month: 'short' });
    const day = today.toLocaleString("default", { weekday: "long" });
    return (
        <>
            <h1 className="text-xl font-bold my-5">
                {date} | Today | {day}{" "}
            </h1>
            <Tasks />
        </>
    );
};

export default TodayTasks;
