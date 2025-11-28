"use client";
import { motion } from "motion/react";
import Link from "next/link";

import Slider from "./Slider";

const Latest = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mt-24"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-[75px] ">
          <h4 className="h4 w-max border-b-2  ">
            {" "}
            Explore Our lastest Collection
          </h4>
          <Link
            href="/"
            className="link-primary text-accent-2 hover:text-primary "
          >
            View All
          </Link>
        </div>
        <Slider />
      </div>
    </motion.section>
  );
};

export default Latest;
