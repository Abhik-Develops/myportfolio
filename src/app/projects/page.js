import AnimatedText from '@/components/AnimatedText'
import Structure from '@/components/Structure'
import React from 'react'
import Project1 from '../../../public/images/projects/portfolio.png'
import Project2 from '../../../public/images/projects/2048_game.png'
import Project3 from '../../../public/images/projects/sudoku.png'
import Project4 from '../../../public/images/projects/miniblog.png'
import Project5 from '../../../public/images/projects/weatherapp.png'
import Project6 from '../../../public/images/projects/crud.png'
import Project7 from '../../../public/images/projects/resume.png'
import TransitionEffect from '@/components/TransitionEffect'
import FeaturedProject from '@/components/FeaturedProject'
import Project from '@/components/Project'

const page = () => {
  return (
    <>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Structure className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Portfolio Website"
                            summary="Designed and implemented a personal portfolio website using HTML, CSS, JavaScript, React, and Vite. Focused on creating a user-friendly interface to showcase skills, projects, and contact information. Prioritized responsiveness and a clean, modern design to enhance the user experience."
                            type="Frontend Project"
                            link="https://abhik-develops.github.io/portfolio/"
                            img={Project1}
                            github="https://www.github.com/Abhik-Develops/portfolio"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="2048 Game"
                            type="Frontend Project"
                            link="https://abhik-develops.github.io/2048-game/"
                            img={Project2}
                            github="https://github.com/Abhik-Develops/2048-game"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Sudoku"
                            type="Frontend Project"
                            link="https://abhik-develops.github.io/sudoku/"
                            img={Project3}
                            github="https://github.com/Abhik-Develops/sudoku"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Mini Blog Application"
                            summary="Dive into my Mini Blog, where Django's backend magic meets Bootstrap's sleek styling. This dynamic platform not only showcases my coding finesse but also prioritizes user interaction with seamless authentication. Explore a blend of tech and creativity in a space where every post tells a unique story. 🌐📝"
                            type="Backend Project"
                            link="https://github.com/Abhik-Develops/miniblog"
                            img={Project4}
                            github="https://github.com/Abhik-Develops/miniblog"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Weather Application"
                            type="Backend Project"
                            link="https://github.com/Abhik-Develops/weather-app"
                            img={Project5}
                            github="https://github.com/Abhik-Develops/weather-app"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="CRUD Operation Project"
                            type="Backend Project"
                            link="https://github.com/Abhik-Develops/crud-operation-project"
                            img={Project6}
                            github="https://github.com/Abhik-Develops/crud-operation-project"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Resume Project"
                            summary="Experience my Resume Project, a dynamic blend of Django's backend prowess and Bootstrap's elegant design. This isn't just a resume; it's an interactive journey through skills, experiences, and aspirations. Navigate effortlessly, explore the details, and let's connect to turn opportunities into realities! 💻✨"
                            type="Backend Project"
                            link="https://github.com/Abhik-Develops/resumeproject"
                            img={Project7}
                            github="https://github.com/Abhik-Develops/resumeproject"
                        />
                    </div>
                </div>
            </Structure>
        </main>
    </>
  )
}

export default page