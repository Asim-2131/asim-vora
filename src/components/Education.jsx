import React from 'react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const certifications = [
    { title: "Full-Stack Web Development with React Specialization", org: "Coursera", date: "June 2021", color: "var(--primary-indigo)", link: "https://www.coursera.org/account/accomplishments/specialization/certificate/4GAFFR25H2YM" },
    { title: "Data Structures", org: "Coursera", date: "Oct 2020", color: "var(--primary-indigo)", link: "https://www.coursera.org/account/accomplishments/certificate/9XSDX4CWKNG3" },
    { title: "Algorithmic Toolbox", org: "Coursera", date: "Sept 2020", color: "var(--primary-indigo)", link: "https://www.coursera.org/account/accomplishments/certificate/7SSYPK8WZ2Z9" },
    { title: "Introduction to Programming with MATLAB", org: "Coursera", date: "Aug 2020", color: "var(--primary-indigo)", link: "https://www.coursera.org/account/accomplishments/certificate/Z7K3ZMENAVXA" },
    { title: "Problem Solving (Advanced)", org: "HackerRank", date: "Sept 2020", color: "var(--secondary-cyan)", link: "https://www.hackerrank.com/certificates/7b64c90adaa5" },
    { title: "Problem Solving (Intermediate)", org: "HackerRank", date: "June 2020", color: "var(--secondary-cyan)", link: "https://www.hackerrank.com/certificates/890d6f1e01a2" },
    { title: "Java (Intermediate)", org: "HackerRank", date: "Sept 2020", color: "var(--secondary-cyan)", link: "https://www.hackerrank.com/certificates/fc9ad19ccca7" },
    { title: "Problem Solving (Basic)", org: "HackerRank", date: "June 2020", color: "var(--secondary-cyan)", link: "https://www.hackerrank.com/certificates/d9dfb489514a" },
    { title: "Java (Basic)", org: "HackerRank", date: "Sept 2020", color: "var(--secondary-cyan)", link: "https://www.hackerrank.com/certificates/63a0d687668d" },
    { title: "C++ (Basic)", org: "HackerRank", date: "Sept 2020", color: "var(--secondary-cyan)", link: "https://www.hackerrank.com/certificates/5eaba84cfe50" }
  ];

  return (
    <section id="education" className="section-full">
      <div className="container">
        <h2 style={{ marginBottom: '1.5rem' }}>Academic & Certifications</h2>

        <div className="bento-grid" style={{ marginTop: '0' }}>
          {/* Nirma University */}
          <ScrollReveal className="bento-card" style={{ gridColumn: 'span 12', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', marginBottom: '1rem' }}>
            <div className="edu-info">
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>B.Tech in Computer Science</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '600' }}>Nirma University, Ahmedabad</p>
            </div>
            <div style={{ textAlign: 'right' }} className="edu-meta">
              <p style={{ color: 'var(--primary-indigo)', fontWeight: '800', fontSize: '0.9rem' }}>2018 — 2022</p>
              <p style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-main)' }}>8.06 CGPA</p>
            </div>
          </ScrollReveal>

          {/* Certifications Grid */}
          <div style={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {certifications.map((cert, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 0.05}
                className="bento-card cert-card"
                style={{
                  padding: '0',
                  borderLeft: `4px solid ${cert.color}`,
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.25rem',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none'
                  }}
                >
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}>
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                  <h4 style={{ color: cert.color, marginBottom: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', paddingRight: '1rem' }}>{cert.org}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '700', lineHeight: '1.4' }}>{cert.title}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: '600' }}>{cert.date}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style jsx="true">{`
        .cert-card {
          transition: transform 0.3s ease, border-color 0.3s ease;
          background: white;
        }
        .cert-card:hover {
          transform: translateY(-3px);
          border-color: var(--primary-soft);
        }
        @media (max-width: 640px) {
          .bento-card {
            flex-direction: column;
          }
          .edu-meta {
            text-align: left !important;
            margin-top: 1rem;
          }
        }
      `}</style>
      </div>
    </section>
  );
};

export default Education;
