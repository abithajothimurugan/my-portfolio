import React from "react";

const educationData = [
    {
        degree: "MCA",
        college: "Fatima College, Madurai",
        year: "2023 – 2025",
        cgpa: "8.1"
    },
    {
        degree: "BCA",
        college: "Fatima College, Madurai",
        year: "2020 – 2023",
        cgpa: "8.6"
    },
    {
        degree: "HSC",
        college: "St. Antony’s Girls Hr. Sec School, Madurai",
        year: "2019 – 2020",
        percentage: "67%"
    },
    {
        degree: "SSLC",
        college: "St. Antony’s Girls Hr. Sec School, Madurai",
        year: "2017 – 2018",
        percentage: "85%"
    }
];

const internshipData = [
    {
        role: "Full Stack Developer",
        company: "ScopeTech Software Solution, Madurai",
        duration: "2½ Months",
        description:
            "Gained hands-on experience with MERN stack projects, developed responsive user interfaces, and integrated REST APIs."
    }
];

const Education = () => {
    return (
        <section className="education" id="education">
            <h2>Education</h2>

            <div className="edu-grid">
                {educationData.map((edu, index) => (
                    <div key={index} className="edu-card">
                        <span className="edu-year">{edu.year}</span>
                        <h3>{edu.degree}</h3>
                        <p className="edu-college">{edu.college}</p>
                        {edu.cgpa && <p className="edu-score">CGPA: {edu.cgpa}</p>}
                        {edu.percentage && (
                            <p className="edu-score">Percentage: {edu.percentage}</p>
                        )}
                    </div>
                ))}
            </div>

            <h2>Internship</h2>

            <div className="internship-card">
                {internshipData.map((intern, index) => (
                    <div key={index} className="intern-card">        
                        <h3>{intern.role}</h3>
                        <span className="intern-duration">Duration: {intern.duration}</span>
                        <p className="intern-company">{intern.company}</p>
                        <p className="intern-desc">{intern.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
