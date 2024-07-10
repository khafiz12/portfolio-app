import React from 'react';
import './About.css'

const About = () => {
    return (
        <main>
            <h1>About Me</h1>
            <p className="resume">
              <a href= "Karim Hafiz Resume.pdf" target="_blank" rel="noopener noreferrer">View my Resume/CV</a>
            </p>
            <section>
                <div className="section-about-me">
                    <div className="about-me">
                        <h2>My Interests</h2>
                        <p>I enjoy reading, working out, and playing basketball, football, and baseball.</p>
                    </div>

                    <div className="about-me">
                        <h2>Software Skills</h2>
                        <table className="skills-table">
                            <thead>
                                <tr>
                                    <th>Skills</th>
                                    <th>Years of Experience</th>
                                    <th>Level of Expertise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                                <tr>
                                    <td>HTML</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                                <tr>
                                    <td>CSS</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                                <tr>
                                    <td>Angular</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                                <tr>
                                    <td>AWS Lambda</td>
                                    <td>1 year</td>
                                    <td>Beginner</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;