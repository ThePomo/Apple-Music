import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white mt-4 p-3">
      <p>© 2024 Apple Inc. Tutti i diritti riservati.</p>
      <p>
        <a href="#" className="text-white">
          Condizioni dei servizi internet
        </a>{' '}
        |{' '}
        <a href="#" className="text-white">
          Privacy
        </a>
      </p>
    </footer>
  );
};

export default Footer;