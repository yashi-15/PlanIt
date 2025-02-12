import React, { useContext, useState } from "react";
import authContext from "../context/auth/authContext";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";

const Signup = () => {
    const navigate = useNavigate();

    const { showAlert } = useContext(alertContext);

    const { user, userSignup } = useContext(authContext);
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

    const onChangeInput = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const response = await userSignup(credentials);
        if (response.success) {
            localStorage.setItem("token", response.authToken);
            showAlert("Sign Up Successfull!", "success");
            navigate("/userdashboard");
        } else {
            showAlert(response.error, "error");
        }
    };

    return (
        <div className="hero" style={{ minHeight: "calc(100vh - 120px)" }}>
            <div className="flex flex-col lg:flex-row align-middle justify-items-center justify-center gap-4" style={{ width: "75%" }}>
                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-2xl font-bold m-2">Ready to Make Things Happen?</h1>
                    <h1 className="text-center text-xl font-bold m-2">Create your PlanIt Account Now.</h1>
                </div>
                <div className="flex justify-center bg-linen p-5 shadow-lg rounded-lg" style={{ width: "50%" }}>
                    <form style={{ width: "100%" }} onSubmit={handleSignupSubmit}>
                        <label className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" id="name" name="name" value={credentials.name} onChange={onChangeInput} placeholder="Name" minLength={3} required />
                        </label>

                        <label htmlFor="email" className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" className="grow" id="email" name="email" value={credentials.email} onChange={onChangeInput} placeholder="Email" required />
                        </label>

                        <label htmlFor="password" className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input type="password" className="grow" id="password" name="password" value={credentials.password} onChange={onChangeInput} placeholder="Password" minLength={5} required />
                        </label>

                        <label htmlFor="cpassword" className="input input-bordered flex items-center gap-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input type="password" className="grow" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChangeInput} placeholder="Confirm Password" minLength={5} required />
                        </label>

                        <div className="text-center">
                            <button className="btn bg-green hover:bg-lightgreen border-none shadow-md">Signup</button>
                        </div>
                        <div className="m-2 text-center">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="text-green">
                                    {" "}
                                    Login now{" "}
                                </Link>{" "}
                            </p>
                        </div>
                    </form>
                    <div>{user.name}</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
