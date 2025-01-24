import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer text-start text-secondary p-3 ps-5">
      <a href="#" className="text-white">
        Italia
      </a>{" "}
      |{" "}
      <a href="#" className="text-white">
        English (UK)
      </a>{" "}
      <hr />
      <p>
        Copiright © 2024 <span className="text-white">Apple Inc.</span> Tutti i
        diritti riservati.
      </p>
      <p>
        <a href="#" className="text-white">
          Condizioni dei servizi internet
        </a>{" "}
        |{" "}
        <a href="#" className="text-white">
          Apple Music e privacy
        </a>{" "}
        |{" "}
        <a href="#" className="text-white">
          Avviso sui Cookie
        </a>{" "}
        |{" "}
        <a href="#" className="text-white">
          Supporto
        </a>{" "}
        |{" "}
        <a href="#" className="text-white">
          Feedback
        </a>
      </p>
    </footer>
  );
};

export default Footer;
