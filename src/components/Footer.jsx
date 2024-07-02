import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="mt-5 p-4 ">
      <div className="container ">
        <div className="row ">
          <div className="text-center py-3">
            <h3>Las ñoñadas más lindas las encontrás acá 🤓</h3>
            &copy; {new Date().getFullYear()} Sortis
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
