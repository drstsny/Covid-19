// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/Animation.js";
const HowItHelps = () => {
  return (
    <section>
      <div className="container py-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideRight(0.2)}
                whileInView={"animate"}
                initial="initial"
              >
                <a href="https://www.siloamhospitals.com/informasi-siloam/artikel/begini-5-cara-mencegah-efektif-covid-19-agar-tidak-tertular-infeksi-virus">
                <Card
                  icon={Icon1}
                  heading="Symptoms"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
                </a>
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                whileInView={"animate"}
                initial="initial"
              >
                <a href="https://www.halodoc.com/artikel/ketahui-jenis-obat-corona-yang-ampuh-dan-pernah-digunakan?srsltid=AfmBOopY5PR9nbX_sFQDwyCvbyY2US5LgacmiX22lPSnPT1Omw6Tch70">
                <Card
                  icon={Icon2}
                  heading="Recommendations"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
                </a>
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                whileInView={"animate"}
                initial="initial"
              >
                <a href="https://ayosehat.kemkes.go.id/informasi-tentang-virus-corona-novel-coronavirus">
                <Card
                  icon={Icon3}
                  heading="Local information"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                />
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col xl:justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How It Helps People
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
            <a href="https://www.alodokter.com/paxlovid">
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Get in Touch
            </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HowItHelps;