import React from "react";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { LiaFacebook } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
          <nav>
            <h6 className="footer-title">Green Nest</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Private Policy</a>
          </nav>

          <nav>
            <h2 className="text-2xl font-semibold">Social</h2>
            <div className="flex gap-6 text-2xl">
              <p>
                <FaInstagram />
              </p>
              <p>
                <LiaFacebook />
              </p>
              <p>
                <ImPinterest2 />
              </p>
            </div>
          </nav>
        </div>

        <p className="text-center items-center sm:footer-horizontal bg-base-300 text-base-content py-2">
          © 2025 GreenNest. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
