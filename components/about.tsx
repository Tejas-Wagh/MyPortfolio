"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p >
        Hey, I'm Tejas, a Computer Science graduate deeply passionate
        about crafting digital experiences. Proficient in Next.js, React.js,
        Node.js, Express, MongoDB, PostgreSQL, TypeScript, Tailwind CSS, Docker,
        AWS, Java, and more, I thrive on tackling diverse tech challenges. My
        journey in Computer Science has been exhilarating. From mastering data
        structures to architecting scalable web apps, I'm drawn to the dynamic
        world of web technologies. Beyond coding, I indulge in watching web
        series, gaming, playing cricket, and website development, blending
        creativity with technical finesse. Driven by a relentless pursuit of
        excellence, I'm eager to channel my skills into impactful projects.
        Whether it's backend architecture, UI refinement, or cloud optimization,
        I'm committed to pushing boundaries. I value collaboration and
        continuous learning. Let's connect and turn innovative ideas into
        reality. Together, we can create something remarkable, one line of code
        at a time.
      </p>
    </motion.section>
  );
}
