// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/uses/1.png";
import Img2 from "../../assets/uses/2.png";
import Img3 from "../../assets/uses/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/Animation";
const Uses = () => {
  return (
    <section>
      <div className="container my-14">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="order-last md:order-first
           flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How it Helps people
            </h1>
            <p className=" text-gray-400 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              esse ab natus.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="https://www.unicef.org/indonesia/id/coronavirus" className="text-primary">
                Learn More
              </a>
            </p>
            <a href="https://www.alodokter.com/remdesivir">
              <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
                Get in Touch
              </button>
            </a>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            whileInView={"animate"}
            initial="initial"
          >
            <a href="https://www.halodoc.com/kesehatan/coronavirus?srsltid=AfmBOop337t1NYJIUX-sZ_AG0u0c_Ys06lUngxDD15JIS_vJjDNwcB1w">
              <img src={Img1} alt="" className="w-full rounded-3xl " />
              <p className="text-gray-400 mt-4">Coronavirus</p>
            </a>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            <a href="https://www.who.int/health-topics/diagnostics#tab=tab_1">
              <img src={Img2} alt="" className="w-full rounded-3xl" />
              <p className="text-gray-400 mt-4">Diagnostic</p>
            </a>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
            <a href="https://en.wikipedia.org/wiki/Signs_and_symptoms">
              <img src={Img3} alt="" className="w-full rounded-3xl" />
              <p className="text-gray-400 mt-4">Symptoms</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Uses;