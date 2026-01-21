import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section id="hero" className="section-full">
            <div className="container">
                <div className="bento-grid">
                    {/* Main Brand Card */}
                    <ScrollReveal className="bento-card" style={{ gridColumn: 'span 8', gridRow: 'span 2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                            Mahammadasim <br />
                            <span style={{ color: 'var(--primary-indigo)' }}>Vora.</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '520px' }}>
                            Building high-impact software solutions with a focus on automation, scalability, and elegant architecture.
                        </p>
                        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                            <a href="#experience" className="pristine-btn">Latest Works</a>
                            <a href="#contact" className="pristine-btn btn-secondary">Get in Touch</a>
                        </div>
                    </ScrollReveal>

                    {/* Status & Profile Card */}
                    <ScrollReveal delay={0.2} className="bento-card profile-card" style={{ gridColumn: 'span 4', textAlign: 'center', background: 'var(--bg-secondary)', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div className="profile-banner" style={{
                            height: '240px',
                            width: '100%',
                            backgroundImage: 'url("/Asim.jpg")',
                            backgroundPosition: '50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            // boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.02)'
                        }}></div>
                        {/* <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 8px #10b981' }}></div>
                            <p style={{ fontWeight: '700', fontSize: '0.85rem' }}>Open for Collaboration</p>
                        </div> */}
                    </ScrollReveal>

                    {/* Role Card */}
                    <ScrollReveal delay={0.4} className="bento-card" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h3 style={{ marginBottom: '0.25rem' }}>Software Engineer</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Passionate about LLMs, Automation & Full-stack Engineering.</p>
                    </ScrollReveal>

                    {/* Bento Footer */}
                    <ScrollReveal delay={0.6} className="bento-card" style={{ gridColumn: 'span 12', background: 'var(--primary-indigo)', color: 'white' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Location</h4>
                                <p style={{ color: 'white' }}>Ahmedabad, Gujarat, India</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Current Role</h4>
                                <p style={{ color: 'white' }}>SDE @ Infocusp Innovations</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Specialty</h4>
                                <p style={{ color: 'white' }}>Full-Stack & Workflow Automation</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
