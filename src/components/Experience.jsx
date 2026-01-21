import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const ProjectModal = ({ project, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} data-lenis-prevent>
        <div className="modal-header">
          <h3 className="modal-title">{project.title}</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{project.desc}</p>

          {project.details && (
            <ul className="modal-details">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          )}

          <div className="modal-tech">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Infocusp Innovations LLP",
      period: "Apr 2023 — Present",
      location: "Ahmedabad, India",
      projects: [
        {
          title: "Task Management & Collaboration Platform",
          desc: "Developed a full-stack application enabling users to create and manage tasks with an integrated chat feature to facilitate task-related conversations.",
          details: [
            "Integrated third-party services including Slack for communication and Notion for real-time status updates and task tracking.",
            "Utilized FastAPI for backend development, React for frontend, Tailwind CSS for styling, and PostgreSQL as the database.",
            "Implemented a scheduled job to periodically synchronize data from Notion to Cloud SQL, ensuring data consistency across platforms"
          ],
          tech: ["FastAPI", "React", "Tailwind", "PostgreSQL", "Notion API", "Slack API"]
        },
        {
          title: "AI Assistant & Editorial Generation Suite",
          desc: "An end-to-end AI system featuring an assistant grounded in website editorials, automated blog generation using research papers, and a recommendation engine for microhabits and schedules.",
          details: [
            "Worked on Editorial Generation (through LLM) which includes Glossary, Citation and Cover Image. Also included URL, Keywords, Title for SEO.",
            "Created the library which will create the blogs by using the research papers or list of microhabits. It is developed in Python with langchain framework, Zotero (Reference Management System) for Citation, Midjourney for Image generation using keywords, and Google Workspaces API of Sheets, Docs, and App Scripts for approval process.",
            "Worked on creating a weekly schedule (by using LLM) containing the microhabits by using the users’ preferences, their biometric data, and other customized instructions.",
            "Contributed to streamlining the evaluation process of LLM generation output.",
            "Built an AI Assistant with end-to-end integration, grounded in website editorials, featuring a recommendation engine for blogs, schedules, and microhabits, with streaming responses from a Python service to a ReactJS frontend"
          ],
          tech: ["Python", "Langchain", "LLM", "ReactJS", "Streaming API", "Zotero", "Midjourney"]
        }
      ],
      color: "var(--primary-indigo)",
      isCurrent: true
    },
    {
      role: "Software Engineer",
      company: "Crest Data Systems",
      period: "May 2022 — Mar 2023",
      location: "Ahmedabad, India",
      projects: [
        {
          title: "Gitlab MR Analysis",
          desc: "Backend development for analyzing Gitlab comments and MRs. Created a classification model to predict comment types and assess code-writing skills.",
          tech: ["Django", "Python", "ML Classification"]
        },
        {
          title: "IT Service Intelligence (Splunk App)",
          desc: "Worked on a premium Splunk application (ITSI), resolving FOSSA vulnerabilities and app-inspect warnings. Conducted frontend functionality testing.",
          tech: ["Splunk", "Python", "FOSSA", "Test Cases"]
        }
      ],
      color: "var(--secondary-cyan)",
      isCurrent: false
    }
  ];

  return (
    <section id="experience" className="section-full">
      <div className="container">
        <h2 style={{ marginBottom: '2rem' }}>Professional <span style={{ color: 'var(--primary-indigo)' }}>Path</span></h2>

        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 0.1}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="marker-dot" style={{ backgroundColor: exp.color, boxShadow: `0 0 0 4px white, 0 0 0 6px ${exp.color}44` }}>
                  {exp.isCurrent && <div className="dot-pulse" style={{ backgroundColor: exp.color }}></div>}
                </div>
                {idx !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="role-header">
                  <span className="period-tag" style={{ color: exp.color, borderColor: exp.color + '33' }}>{exp.period}</span>
                  <h3 className="role-title">{exp.role}</h3>
                  <p className="company-info">{exp.company} • {exp.location}</p>
                </div>

                <div className="project-stack">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="timeline-project-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 className="project-title-small">{proj.title}</h4>
                        {proj.details && (
                          <button
                            className="info-btn"
                            onClick={() => setSelectedProject(proj)}
                            title="View Details"
                          >
                            i
                          </button>
                        )}
                      </div>
                      <p className="project-desc-small">{proj.desc}</p>
                      <div className="tech-pills">
                        {proj.tech.map((t, ti) => (
                          <span key={ti} className="tech-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style jsx="true">{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .timeline-item {
          display: flex;
          gap: 3rem;
          margin-bottom: 5rem;
          position: relative;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-marker {
          position: relative;
          width: 16px;
          flex-shrink: 0;
        }
        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }
        .dot-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: pulse 2s infinite;
          opacity: 0.6;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(3); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        .marker-line {
          position: absolute;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: var(--border-soft);
          z-index: 1;
        }
        .timeline-content {
          flex-grow: 1;
        }
        .role-header {
          margin-bottom: 2rem;
        }
        .period-tag {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.8rem;
          border: 1px solid;
          border-radius: 2rem;
          display: inline-block;
          margin-bottom: 1rem;
          background: white;
        }
        .role-title {
          font-size: 2rem;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }
        .company-info {
          font-weight: 700;
          color: var(--text-muted);
          font-size: 1.1rem;
        }
        .project-stack {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .timeline-project-card {
          background: white;
          border: 1px solid var(--border-soft);
          border-radius: 1.25rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
        }
        .timeline-project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-soft);
        }
        .project-title-small {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-main);
          margin-right: 0.5rem;
        }
        .info-btn {
          background: var(--primary-soft);
          color: var(--primary-indigo);
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          font-size: 0.8rem;
          font-weight: 700;
          font-family: monospace;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .info-btn:hover {
          background: var(--primary-indigo);
          color: white;
          transform: scale(1.1);
        }
        .project-desc-small {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .tech-pills {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .tech-pill {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          background: var(--bg-secondary);
          color: var(--text-muted);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid var(--border-soft);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 1rem;
        }
        .modal-content {
          background: white;
          border-radius: 1.5rem;
          max-width: 600px;
          width: 100%;
          position: relative;
          box-shadow: var(--shadow-lg);
          animation: modalIn 0.3s ease-out;
          display: flex;
          flex-direction: column;
          max-height: 85vh;
          overflow: hidden;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .modal-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border-soft);
          position: relative;
          display: flex;
          align-items: center;
          background: white;
          z-index: 10;
        }
        .modal-body {
          padding: 2rem;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
        }
        .modal-close {
          position: absolute;
          top: 50%;
          right: 1.5rem;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.8rem;
          line-height: 1;
          cursor: pointer;
          color: var(--text-muted);
          transition: 0.2s;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close:hover {
          color: var(--text-main);
          background: var(--bg-secondary);
          border-radius: 50%;
        }
        .modal-title {
          font-size: 1.4rem;
          color: var(--primary-indigo);
          margin: 0;
          padding-right: 2rem;
          line-height: 1.3;
        }
        .modal-desc {
          font-size: 1rem;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }
        .modal-details {
          margin-bottom: 1.5rem;
          padding-left: 1.2rem;
        }
        .modal-details li {
          margin-bottom: 0.5rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .modal-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          border-top: 1px solid var(--border-soft);
          padding-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .timeline-item {
            gap: 1rem;
            margin-bottom: 3rem;
          }
          .role-title {
            font-size: 1.5rem;
          }
          .project-stack {
            grid-template-columns: 1fr;
          }
          .modal-content {
            margin: 0 1rem;
            max-height: 80vh;
          }
          .modal-header {
            padding: 1rem 1.25rem;
          }
          .modal-body {
            padding: 1.25rem;
          }
          .modal-close {
            right: 1rem;
            font-size: 1.5rem;
          }
          .modal-title {
            font-size: 1.1rem;
          }
          .modal-desc {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          .modal-details {
            margin-bottom: 1rem;
            padding-left: 1rem;
          }
          .modal-details li {
            font-size: 0.85rem;
            margin-bottom: 0.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
