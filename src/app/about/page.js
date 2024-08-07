import AnimatedText from "@/components/AnimatedText";
import Structure from "@/components/Structure";
import React from "react";
import Image from "next/image";
import ProfileImage from "../../../public/images/profile/profilephoto.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedNumber from "@/components/AnimatedNumber";
import Achievements from "@/components/Achievements";

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Structure className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Greetings! I'm Abhik Ganguly, a dedicated third-year BE student
                passionate about web development and captivated by the
                possibilities of Artificial Intelligence and Machine Learning.
                I'm on a journey to transform my academic knowledge into
                real-world solutions and bring creativity to the digital
                landscape.
              </p>
              <p className="my-4 font-medium">
                Currently immersed in my BE studies, I've been actively
                pursuing knowledge in engineering subjects. My coursework has equipped me with a solid foundation in
                C, C++, Javascript, Python laying the groundwork for my exploration into the
                realms of web development and AI/ML.
              </p>
              <p className="font-medium">
                Eager to bridge the gap between academia and industry, I am
                actively seeking opportunities to apply my knowledge in
                real-world scenarios. Whether it's contributing to collaborative
                projects, internships, or engaging in discussions about the
                future of technology, I'm excited to take the next step in my
                journey.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfileImage}
                alt="AbhikGanguly"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50px, 33px"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={100} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Coding </h2>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Contests Participated
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={1} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Achievements/>
        </Structure>
      </main>
    </>
  );
};

export default page;
