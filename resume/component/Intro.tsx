"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

function Intro() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section style={{ marginBottom: "3%", width: "50%", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profilePic.png"
              alt="Sakshi Profle Pic"
              width={192}
              height={190}
              quality={90}
              style={{
                borderRadius: "50%",
                borderWidth: 3,
                borderColor: "white",
                overflow: "hidden",
                boxShadow: "inherit",
              }}
            ></Image>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ position: "absolute", bottom: 0, right: 0 }}
            transition={{
              type: "spring",
              stifness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <Typography variant="h3">👋</Typography>
          </motion.span>
        </div>
      </div>
      <motion.h1
        style={{
          color: "white",
          paddingTop: "3%",
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Sakshi Prakash.</span> I'm a{" "}
        <span className="font-bold">Front-end developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">responsive sites & apps</span>. My
        focus is <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        style={{
          marginTop: "3%",
          display: "flex",
          flexDirection: windowWidth < 1290 ? "column" : "row",
          gap: "3%",
          alignItems: "center",
          padding: 4,
          fontWeight: "inherit",
          justifyContent: "center",
        }}
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.1}}
        
      >
        <Link
          href="#contact"
          style={{
            display: "flex",
            background: "gray",
            color: "white",
            borderRadius: "15px",
            padding: 7,
            textAlign: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          Contact me here
          <BsArrowRight />
        </Link>
        <a
          href="#"
          style={{
            display: "flex",
            background: "gray",
            color: "white",
            borderRadius: "15px",
            padding: 7,
            textAlign: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          Download Resume <HiDownload />
        </a>
        <a
          href="#"
          style={{
            background: "gray",
            color: "white",
            borderRadius: "15px",
            padding: 7,
            textAlign: "center",
            alignItems: "center",
            gap: 2,
            fontSize: 24,
          }}
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          style={{
            background: "gray",
            color: "white",
            borderRadius: "15px",
            padding: 7,
            textAlign: "center",
            alignItems: "center",
            gap: 2,
            fontSize: 24,
          }}
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
