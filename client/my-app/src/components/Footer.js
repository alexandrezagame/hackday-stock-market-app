import React from "react";
import "../stylesheet/footer.css";
import { GoOctoface } from "react-icons/go";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-links">
          <a href="https://github.com/alexandrezagame">
            <GoOctoface />
          </a>
        </div>
        <p>Created by AZ</p>
        <span>API by CoinGecko</span>
      </div>
    </footer>
  );
};

export default Footer;
