"use client";
import { motion } from "motion/react";

import { MdOutlineHistoryEdu, MdTrackChanges } from "react-icons/md";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="pt-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 ">
          <h2 className="h2">Founded with a passion for excellence</h2>
          <div className=" flex flex-col gap-12 ">
            <div>
              <div className="text-primary flex items-center gap-2 mb-4 ">
                <MdOutlineHistoryEdu className="text-2xl" />
                <h6 className="h6 ">Our Story </h6>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio repudiandae quibusdam recusandae voluptatibus
                accusamus quaerat. Sequi delectus ab incidunt recusandae,
                dolorem praesentium quisquam asperiores corporis eum sit quia
                assumenda ut.
              </p>
            </div>
            <div>
              <div className="text-primary flex items-center gap-2 mb-4 ">
                <MdTrackChanges className="text-2xl" />
                <h6 className="h6 ">Our Story </h6>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio repudiandae quibusdam recusandae voluptatibus
                accusamus quaerat. Sequi delectus ab incidunt recusandae,
                dolorem praesentium quisquam asperiores corporis eum sit quia
                assumenda ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
