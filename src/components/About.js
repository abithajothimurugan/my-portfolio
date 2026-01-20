import React from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Postmen"];

const About = () => {
    return (
        <section className="about" id="about">
            <h2>About Me</h2>

            <div className="about-content no-image">
                <div className="about-text">
                    <p>
                        I am an entry-level Full Stack Developer (MERN) passionate about building responsive
                        and user-friendly web applications. I enjoy working on both frontend UI and full-stack
                        development, creating smooth and engaging user experiences.
                    </p>

                    <p>
                        I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js)
                        and enjoy building real-world projects. I am motivated to learn, grow my skills, and
                        contribute effectively as a professional full-stack developer.
                    </p>

                    <h3>Technical Skills</h3>

                    <div className="skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
