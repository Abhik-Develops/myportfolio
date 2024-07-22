"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' whileHover={{scale: 1.05}} initial={{x:0, y:0}} whileInView={{x:x, y:y, transition: {duration: 1.5}}} viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:mt-32 md:text-6xl xs:text-5xl md:mb-3'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale: 1.05}}>
                WEB
            </motion.div>
            <Skill name="HTML" x="-25vw" y="-2vw"/>
            <Skill name="CSS" x="-12vw" y="-5vw"/>
            <Skill name="Javascript" x="18vw" y="0vw"/>
            <Skill name="C/C++" x="32vw" y="-5vw"/>
            <Skill name="Java" x="16vw" y="-20vw"/>
            <Skill name="Python" x="15vw" y="10vw"/>
            <Skill name="ReactJS" x="0vw" y="12vw"/>
            <Skill name="NEXTJS" x="-20vw" y="-12vw"/>
            <Skill name="NodeJS" x="-15vw" y="6vw"/>
            <Skill name="ExpressJS" x="-6vw" y="22vw"/>
            <Skill name="FastAPI" x="12vw" y="22vw"/>
            <Skill name="Flask" x="25vw" y="16vw"/>
            <Skill name="Django" x="14vw" y="-10vw"/>
            <Skill name="Docker" x="-30vw" y="8vw"/>
            <Skill name="Autogen" x="28vw" y="-15vw"/>
            <Skill name="Bootstrap" x="0vw" y="-15vw"/>
            <Skill name="Tailwind CSS" x="-18vw" y="-20vw"/>
            <Skill name="Material UI" x="2vw" y="-24vw"/>
            <Skill name="SQL" x="-20vw" y="16vw"/>
        </div>
    </>
  )
}

export default Skills