import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">About</Link>
        <Link className="link link-hover">Products</Link>
        <Link className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved Bazario
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
