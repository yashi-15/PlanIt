import React, { useContext, useEffect, useState } from "react";
import authContext from "../../context/auth/authContext";

const HomeDashboard = () => {
    const getTimeOfDay = () => {
        const now = new Date();
        const hour = now.getHours();

        if (hour >= 5 && hour < 12) {
            return "Morning";
        } else if (hour >= 12 && hour < 17) {
            return "Afternoon";
        } else if (hour >= 17 && hour < 21) {
            return "Evening";
        } else {
            return "Evening";
        }
    };
    const [timeOfDay, setTimeOfDay] = useState("")

    const { user, getUser } = useContext(authContext);

    useEffect(() => {
        const time = getTimeOfDay();
        setTimeOfDay(time);
        getUser(localStorage.getItem("token"));
    }, []);

    return (
        <div className="text-linen">
            <h1 className="text-2xl font-bold">Good {timeOfDay}! {user?.name?.split(" ")[0] || "Guest"}</h1>
        </div>
    );
};

export default HomeDashboard;
