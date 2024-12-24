// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/icon/logo.png";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* Logo section */}
        <div>
          <img src={Logo} alt="" className="w-48" />
        </div>
        {/* Navlinks section */}
        <ul className=" md:flex items-center gap-10 md:text-base text-sm">
          <li>
            <a href="https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20230413/2742762/indonesia-miliki-obat-baru-covid-19-dinilai-lebih-efektif-obati-pasien/">Products</a>
          </li>
          <li>
            <a href="https://bpkpenabur.or.id/jatibarang/smpk-bpk-penabur-jatibarang/berita/cerpen-siswa-guru/aku-dan-kehidupanku-di-wabah-covid-19-amanda-f-p-hutahaean">Custome Stories</a>
          </li>
          <li>
            <a href="https://pengabdian.ugm.ac.id/covid19/">About</a>
          </li>
          <li>
            <a href="https://id.wikipedia.org/wiki/Covid-19">Blogs</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <a href="https://infeksiemerging.kemkes.go.id/dashboard/covid-19">
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            {" "}
            Get in touch
          </button>
          </a>
        </div>
      </div>
    </motion.header>
  );
};
export default Navbar;