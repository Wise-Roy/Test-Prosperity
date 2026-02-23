import Link from "next/link";
import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Left: Contact Info */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-gray-400">
            Phone: <span className="text-gray-200">+91 99601 63587</span>
          </p>
          <p className="text-sm text-gray-400">
            Email:{" "}
            <Link
              href="mailto:prosperitypartners09@gmail.com"
              className="text-gray-200 hover:text-red-400 transition"
            >
              prosperitypartners09@gmail.com
            </Link>{" "}
            /{" "}
            <a
              href="mailto:shahdeepakd@gmail.com"
              className="text-gray-200 hover:text-red-400 transition"
            >
              shahdeepakd@gmail.com
            </a>
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/prosperitypartners09?igsh=MXYwZWdydnNxcHZmNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-shah-investment-planning/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="mailto:prosperitypartners09@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope size={40} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-400">
            © 2025 Prosperity Partners. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            <Link href="mailto:uspface@gmail.com">Designed by USPFace</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;