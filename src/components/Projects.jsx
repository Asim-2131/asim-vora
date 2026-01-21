import React from 'react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    const projects = [
        {
            title: "Equity Portfolio",
            desc: "Full Stack (MERN) application for handling stock data. Features include real-time stock price tracking and personal portfolio management for investments, profits, and losses.",
            tags: ["MongoDB", "Express", "React", "Node", "Axios"],
            span: "span 6",
            color: "var(--primary-indigo)",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Asim-2131/EquityPortfolio"
        },
        {
            title: "Media Controller",
            desc: "Python-based application with a PyQt5 GUI. Features include YouTube video downloading, playlist management, and a custom media player interface for videos and audio.",
            tags: ["Python", "PyQt5", "GUI"],
            span: "span 6",
            color: "var(--secondary-cyan)",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Asim-2131/MediaController"
        },
        {
            title: "E-Learning",
            desc: "Web Application featuring online course materials and automated quizzes. Includes customized dashboards for Admin, Students, and Teachers.",
            tags: ["PHP", "Bootstrap", "JavaScript", "SQL"],
            span: "span 4",
            color: "#8b5cf6",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Asim-2131/E-Learning"
        },
        {
            title: "E-Library",
            desc: "Java-based system for organizing books and student records. Facilitates efficient inventory handling for Librarians and Admins.",
            tags: ["Java", "Servlets", "JSP", "Bootstrap"],
            span: "span 4",
            color: "#059669",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Asim-2131/E-Library"
        },
        {
            title: "Payroll MS",
            desc: "Console-based Core Java project utilizing file handling systems to manage comprehensive employee records and payroll structures.",
            tags: ["Java", "File Handling", "CLI", "Core Java"],
            span: "span 4",
            color: "#d97706",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
            link: "https://github.com/Asim-2131/Payroll-MS"
        }
    ];

    return (
        <section id="projects" className="section-full">
            <div className="container">
                <h2 style={{ marginBottom: '1.5rem' }}>Personal Projects</h2>
                <div className="bento-grid" style={{ marginTop: '0' }}>
                    {projects.map((p, idx) => (
                        <ScrollReveal
                            key={idx}
                            delay={idx * 0.1}
                            className="bento-card project-card"
                            style={{
                                gridColumn: p.span,
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'white'
                            }}
                        >
                            <div className="project-image-container" style={{
                                height: '220px',
                                width: '100%',
                                overflow: 'hidden',
                                position: 'relative',
                                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url("${p.image}")`,
                                    backgroundPosition: '50%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}></div>
                            </div>
                            <div className="project-info" style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <h3 style={{ marginBottom: '0.8rem', color: 'var(--text-main)' }}>{p.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', fontSize: '0.85rem', lineHeight: '1.6' }}>{p.desc}</p>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                                        {p.tags.map((tag, tIdx) => (
                                            <span key={tIdx} style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: p.color, background: 'var(--bg-secondary)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontWeight: '800', fontSize: '0.8rem', textDecoration: 'none', borderBottom: `2px solid ${p.color}`, paddingBottom: '2px', display: 'inline-block' }}>
                                        VIEW PROJECT REPO →
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
