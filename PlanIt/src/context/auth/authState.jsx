import React, { useState } from "react";
import authContext from "./authContext";

const AuthState = (props) => {
    const host = "http://localhost:5000";
    const [user, setUser] = useState({});

    //Get user
    const getUser = async (authToken) => {
        //API call
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken,
            },
        });
        const json = await response.json();
        setUser(json.user);
        console.log(user);
        
    };

    // User Login
    const userLogin = async (credentials) => {
        //API call
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if (json.success) {
            getUser(json.authToken);
        }
        return json
    };

    // User Login
    const userSignup = async (credentials) => {
        //API call
        const response = await fetch(`${host}/api/auth/createUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if (json.success) {
            getUser(json.authToken);
        }
        return json
    };

    //User Logout
    const userLogout = () => {
        setUser({})
    }

    return <authContext.Provider value={{ user, getUser, userLogin, userSignup, userLogout }}>{props.children}</authContext.Provider>;
};

export default AuthState;
