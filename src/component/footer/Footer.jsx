// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* brand info */}
        <div className="space-y-4">
          <p className="text-gray-400 xl:max-w-[400px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            voluptatum ut molestiae facere.
          </p>
        </div>
        {/* social icons */}
        <div className="flex space-x-6 text-3xl">
          <a href="https://www.facebook.com/KementerianKesehatanRI">
          <FaFacebook className="hover:text-primary duration-200"/>
          </a>
          <a href="https://www.instagram.com/kemenkes_ri/">
          <FaInstagram className="hover:text-primary duration-200"/>
          </a>
          <a href="https://kemkes.go.id/id/home">
          <FaLinkedin className="hover:text-primary duration-200" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;