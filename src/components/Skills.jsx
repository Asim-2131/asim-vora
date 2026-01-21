import React from 'react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
    const categories = [
        {
            title: "Backend & Systems",
            skills: ["C++", "Java", "Python", "C#", "FastAPI", "Django"],
            size: "span 6",
            color: "var(--primary-indigo)"
        },
        {
            title: "Frontend & Web",
            skills: ["ReactJS", "NodeJS", "Typescript", "TailwindCSS", "HTML/CSS"],
            size: "span 6",
            color: "var(--secondary-cyan)"
        },
        {
            title: "AI & Automation",
            skills: ["Langchain", "Prompt Engineering", "RAG", "LLM Integration"],
            size: "span 4",
            color: "#8b5cf6"
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MongoDB", "SQL"],
            size: "span 4",
            color: "#059669"
        },
        {
            title: "Tools & Cloud",
            skills: ["GCP", "Docker", "Jest", "Splunk"],
            size: "span 4",
            color: "#d97706"
        }
    ];

    return (
        <section id="skills" className="section-full">
            <div className="container">
                <h2 style={{ marginBottom: '1.5rem' }}>The Toolkit</h2>
                <div className="bento-grid" style={{ marginTop: '0' }}>
                    {categories.map((cat, idx) => (
                        <ScrollReveal
                            delay={idx * 0.1}
                            key={idx}
                            className="bento-card"
                            style={{
                                gridColumn: cat.size,
                                borderTop: `4px solid ${cat.color}`
                            }}
                        >
                            <h3 style={{ color: cat.color, marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cat.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {cat.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .skill-item {
          font-size: 0.85rem;
          color: var(--text-muted);
          padding: 0.4rem 0.9rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-soft);
          border-radius: 2rem;
          font-weight: 600;
          transition: 0.3s;
        }
        .bento-card:hover .skill-item {
          background: white;
          border-color: var(--primary-soft);
          color: var(--text-main);
        }
      `}</style>
        </section>
    );
};

export default Skills;
