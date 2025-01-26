import React, { useContext, useState } from "react";
import authContext from "../context/auth/authContext";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";

const Login = () => {
    const navigate = useNavigate();

    const { showAlert } = useContext(alertContext);

    const { user, userLogin } = useContext(authContext);
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const onChangeInput = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await userLogin(credentials);
        if (response.success) {
            localStorage.setItem("token", response.authToken);
            showAlert("Logged In Successfully!", "success");
            navigate("/userdashboard");
        } else {
            showAlert(response.error, "error");
        }
    };

    return (
        <>
            <div className="hero" style={{ minHeight: "calc(100vh - 120px)" }}>
                <div className="flex flex-col lg:flex-row align-middle justify-items-center justify-center gap-4" style={{ width: "75%" }}>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-center text-2xl font-bold m-2">Welcome Back to Productivity!</h1>
                        <h1 className="text-center text-xl font-bold m-2">Log in to PlanIt now.</h1>
                    </div>

                    <div className="flex justify-center bg-linen p-5 shadow-lg rounded-lg" style={{ width: "50%" }}>
                        <form style={{ width: "100%" }} onSubmit={handleLoginSubmit}>
                            <label htmlFor="email" className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" id="email" name="email" className="grow" value={credentials.email} onChange={onChangeInput} placeholder="Email" required />
                            </label>

                            <label htmlFor="password" className="input input-bordered flex items-center gap-2 m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <input type="password" id="password" name="password" className="grow" value={credentials.password} onChange={onChangeInput} placeholder="Password" minLength={5} required />
                            </label>

                            <div className="text-center">
                                <button className="btn bg-green hover:bg-lightgreen border-none shadow-md">Login</button>
                            </div>
                            <div className="m-2 text-center">
                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/signup" className="text-green">
                                        {" "}
                                        Create a new account{" "}
                                    </Link>{" "}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
