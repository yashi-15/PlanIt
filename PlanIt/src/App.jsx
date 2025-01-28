import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import TaskState from "./context/tasks/taskState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import HomeDashboard from "./components/user-dashboard/HomeDashboard";
import LayoutDashboard from "./components/user-dashboard/LayoutDashboard";
import TodayTasks from "./components/user-dashboard/TodayTasks";
import UpcomingTasks from "./components/user-dashboard/UpcomingTasks";

function App() {
    return (
        <AuthState>
            <TaskState>
                <AlertState>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route path="" element={<Home />} />
                                <Route path="mytasks" element={<Tasks />} />
                                <Route path="about" element={<About />} />
                                <Route path="contact" element={<Contact />} />
                                <Route path="login" element={<Login />} />
                                <Route path="signup" element={<Signup />} />
                            </Route>
                            <Route path="/userdashboard" element={<LayoutDashboard />}>
                                <Route path="" element={<HomeDashboard />} />
                                <Route path="today" element={<TodayTasks />} />
                                <Route path="upcoming" element={<UpcomingTasks />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AlertState>
            </TaskState>
        </AuthState>
    );
}

export default App;
