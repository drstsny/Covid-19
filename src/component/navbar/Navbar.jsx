// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../Assets/icon/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <nav className="bg-gray-100 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-48 " />
          </div>

          {/* Mobile Toggler */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-y-4 md:space-y-0 md:space-x-6 text-black absolute md:relative bg-gray-100 w-full md:w-auto left-0 top-16 md:top-auto z-50 md:z-auto`}
          >
            <a
              href="https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20230413/2742762/indonesia-miliki-obat-baru-covid-19-dinilai-lebih-efektif-obati-pasien/"
              className="block text-center py-2 px-4 hover:text-primary transition duration-300"
            >
              Products
            </a>
            <a
              href="https://bpkpenabur.or.id/jatibarang/smpk-bpk-penabur-jatibarang/berita/cerpen-siswa-guru/aku-dan-kehidupanku-di-wabah-covid-19-amanda-f-p-hutahaean"
              className="block text-center py-2 px-4 hover:text-primary transition duration-300"
            >
              Custom Stories
            </a>
            <a
              href="https://www.halodoc.com/kesehatan/coronavirus?srsltid=AfmBOoq1pZZI6xk5ngQw3KOI41TS5gwLZsZkceEzfnB6JSRWGbjUpVNX"
              className="block text-center py-2 px-4 hover:text-primary transition duration-300"
            >
              About
            </a>
            <a
              href="/Blogs"
              className="block text-center py-2 px-4 hover:text-primary transition duration-300"
            >
              Blogs
            </a>
          </div>

          {/* Button Section */}
          <div className="hidden md:block">
            <a href="https://infeksiemerging.kemkes.go.id/dashboard/covid-19">
              <button className="border border-gray-400 py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition duration-300">
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
