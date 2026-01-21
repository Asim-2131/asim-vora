import React from 'react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer id="contact" className="section-full" style={{ minHeight: 'auto' }}>
      <div className="container">
        <ScrollReveal className="bento-card" style={{ gridColumn: 'span 12', textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Always open to Discussing <span style={{ color: 'var(--primary-indigo)' }}>New Ideas.</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div className="footer-btns">
            <a href="mailto:asimvora2001@gmail.com" className="pristine-btn">Send an Email _</a>
            <a href="https://linkedin.com/in/asim-vora" target="_blank" rel="noopener noreferrer" className="pristine-btn btn-secondary">LinkedIn Profile</a>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Mahammadasim Vora. All rights reserved.</p>
            <div className="footer-links-small">
              <a href="#hero">Biography</a>
              <a href="#projects">Works</a>
              <a href="#education">Academics</a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx="true">{`
        .footer-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }
        .footer-bottom {
          border-top: 1px solid var(--border-soft);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .footer-links-small {
          display: flex;
          gap: 2rem;
        }
        .footer-links-small a {
          color: var(--text-muted);
          text-decoration: none;
          transition: 0.3s;
        }
        .footer-links-small a:hover {
          color: var(--primary-indigo);
        }
        @media (max-width: 768px) {
          .footer-btns {
            flex-direction: column;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .footer-links-small {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
