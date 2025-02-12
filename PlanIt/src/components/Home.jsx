import React from "react";
import heroImg from "../../src/assets/hero.svg";

const Home = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={heroImg} className="max-w-sm" />
                    <div>
                        <h1 className="text-5xl font-bold">Plan It Right, Achieve It All!</h1>
                        <p className="py-6">Master your time and stay ahead. PlanIt helps you prioritize, track, and complete tasks effortlessly. PlanIt empowers you to stay focused and accomplish more.</p>
                        <button className="btn bg-pink">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
