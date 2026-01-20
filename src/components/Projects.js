import React from "react";

const projects = [
    {
        title: "Website for Zeal Association",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
        description: [
            "Developed a web-based platform to manage weekly competitions for student clubs",
            "Enabled students to enroll in clubs, register for events, view competitions, and track scores",
            "Focused on Quiz Club, Fine Arts Club, and Self-Grooming Club",
            "Designed system to enhance competition management, data handling, and UX"
        ],
        liveDemo: null
    },
    {
        title: "JP Builders Mobile Application",
        tech: [".NET", "C#", "MVC Framework", "Bootstrap", "jQuery", "MS SQL Server 2019"],
        description: [
            "Developed a mobile-based application for construction project management",
            "Simplified communication between admins, engineers, and clients",
            "Enabled tracking of daily work progress, expenses, and project status",
            "Developed secure login and payment features"
        ],
        liveDemo: null
    },
    {
        title: "WatchTicktale Watch Website",
        tech: ["HTML", "CSS", "JavaScript"],
        description: [
            "A responsive and interactive WatchTicktale website",
            "Users can view different watch products with hover animations",
            "Smooth browsing experience with interactive buttons"
        ],
        liveDemo: "https://abithajothimurugan.github.io/WatchTicktale/"
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>

                        <p>
                            <strong>Technologies:</strong> {project.tech.join(", ")}
                        </p>

                        <ul>
                            {project.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>

                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Projects;
