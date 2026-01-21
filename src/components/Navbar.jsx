import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-wrapper">
      <div className={`nav-glass ${isOpen ? 'is-open' : ''}`}>
        <div className="nav-main">
          <a href="#" className="nav-logo">
            <img src="/logo.png" alt="Logo" style={{ height: '30px', width: 'auto' }} />
          </a>

          <div className="nav-links">
            <a href="#hero" onClick={() => setIsOpen(false)}>Bio</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Tech</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>

            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setIsOpen(false)}>Academics</a>
          </div>

          <a href="#contact" className="nav-cta">Connect _</a>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <a href="#hero" onClick={() => setIsOpen(false)}>Bio</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Tech</a>
            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setIsOpen(false)}>Academics</a>
            <a href="#contact" className="mob-cta" onClick={() => setIsOpen(false)}>Connect _</a>
          </div>
        )}
      </div>

      <style jsx="true">{`
        .nav-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 0;
          width: 100%;
          z-index: 2000;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }
        .nav-glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-soft);
          border-radius: 2.5rem;
          padding: 0.6rem 1rem;
          width: 100%;
          max-width: 1225px;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        .nav-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--text-main);
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-links a {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary-indigo);
        }
        .nav-cta {
          background: var(--text-main);
          color: white;
          padding: 0.6rem 1.4rem;
          border-radius: 2rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
        }
        .nav-cta:hover {
          background: var(--primary-indigo);
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
        }
        .bar {
          width: 20px;
          height: 2px;
          background: var(--text-main);
          border-radius: 2px;
        }
        @media (max-width: 850px) {
          .nav-links, .nav-cta {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
          .nav-glass.is-open {
            border-radius: 1.5rem;
          }
          .mobile-menu {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            padding: 2rem 1rem 1rem;
            border-top: 1px solid var(--border-soft);
            margin-top: 0.6rem;
          }
          .mobile-menu a {
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-main);
            text-decoration: none;
            background: rgba(0,0,0,0.04);
            padding: 0.6rem 1.2rem;
            border-radius: 2rem;
            transition: all 0.2s ease;
          }
          .mobile-menu a:hover {
            background: rgba(0,0,0,0.08);
            transform: translateY(-2px);
          }
          .mob-cta {
            background: var(--text-main) !important;
            color: white !important;
          }
          .mob-cta:hover {
            background: var(--primary-indigo) !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
