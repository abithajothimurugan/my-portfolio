import React from "react";
import homeImg from "../assets/abi.jpeg";

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <div className="home-text">
                    <h1>
                        Hello, I'm <span>Abitha</span>
                    </h1>

                    <h2>Full Stack Developer</h2>

                    <p>
                        Passionate about building responsive web applications using  MERN stack.                    </p>

                    <div className="home-buttons">
                    
                        <a href="#contact" className="btn btn-primary">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="home-image">
                    <img src={homeImg} alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;
