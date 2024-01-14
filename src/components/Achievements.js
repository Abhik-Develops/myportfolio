'use client'

import React from 'react'
import { motion } from "framer-motion"


const Achievement = ({title, date}) => {
    return (
        <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}} viewport={{once:true}} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col'>
            <h2 className='capitalize text-xl font-semibold'>{title}</h2>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self.start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const Achievements = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Achievements</h2>
        <ul>
            <Achievement
                title="Solved 1000+ questions on Leetcode (highest rating of 1985, max daily streak of 100 days)"
                date="August, 2023"
            />
            <Achievement
                title="Earned the title of 'Knight' in Leetcode"
                date="June, 2023"
            />
            <Achievement
                title="Elevated my CodeChef profile to a 3-star rating"
                date="July, 2022"
            />
            <Achievement
                title="Attained a rank of 11,401 in JEE Advanced examination"
                date="October, 2021"
            />
            <Achievement
                title="Achieved 98.9 percentile in JEE Mains Examination"
                date="July, 2021"
            />
            <Achievement
                title=" Secured a rank of 381 in WBJEE among 0.1 million candidates"
                date="July, 2021"
            />
            <Achievement
                title="Scored 96.6% marks in Uccha Madhyamik (class 12) Board Examination"
                date="March, 2020"
            />
            <Achievement
                title="Scored 89.6% marks in Madhyamik (class 10) Board Examination"
                date="March, 2018"
            />
        </ul>
    </div>
  )
}

export default Achievements