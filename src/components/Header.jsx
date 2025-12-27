import React from 'react';

const Header = () => {
    return (
        <header className="no-print" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '3rem',
            paddingTop: '2rem',
            animation: 'slideDown 0.8s ease-out'
        }}>
            <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '28px', /* Squircle-ish */
                overflow: 'hidden',
                marginBottom: '1.5rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                background: 'white',
                padding: '10px'
            }}>
                <img
                    src="https://technorapide.com/public/logo.png"
                    alt="TECHNORAPIDE Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </div>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: '900',
                letterSpacing: '-2px',
                color: 'var(--color-text-primary)',
                marginBottom: '0.25rem'
            }}>
                TECHNORAPIDE
            </h1>
            <p style={{
                fontSize: '1.125rem',
                color: 'var(--color-primary)',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
            }}>
                DREAM BIG BUILD BIGGER
            </p>
        </header>
    );
};

export default Header;
