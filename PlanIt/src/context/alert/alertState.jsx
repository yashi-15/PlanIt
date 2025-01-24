import React, { useState } from "react";
import alertContext from "./alertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
        setAlert({message, type});
        setTimeout(() => {
            setAlert(null);
        }, 2000)
    }

    return <alertContext.Provider value={{ alert, showAlert}}>{props.children}</alertContext.Provider>;
};

export default AlertState;
