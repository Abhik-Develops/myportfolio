import AnimatedText from '@/components/AnimatedText'
import Structure from '@/components/Structure'
import React from 'react'
import QuickChatImage from '../../../public/images/projects/quick-chat.png'
import QuizMasterImage from '../../../public/images/projects/quiz-master.png'
import PicGenAIImage from '../../../public/images/projects/picgen-ai.png'
import WebEditorImage from '../../../public/images/projects/web-editor.png'
import ThiefDetectionImage from '../../../public/images/projects/thief-detector.png'
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
                            title="Quick Chat"
                            summary="Quick Chat is a dynamic web-based messaging application crafted utilizing the MERN stack, complemented by Socket.IO for real-time communication. The stack comprises MongoDB for database management, Express.js for server-side application logic, React.js for constructing interactive user interfaces, and Node.js for backend execution."
                            type="Full Stack Project"
                            link="https://quick-chat-kqjq.onrender.com"
                            img={QuickChatImage}
                            github="https://github.com/Abhik-Develops/quick-chat"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Web Editor"
                            type="Frontend Project"
                            link="https://abhik-develops.github.io/web-editor"
                            img={WebEditorImage}
                            github="https://github.com/Abhik-Develops/web-editor"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Thief Detector"
                            type="Frontend Project"
                            link="https://thief-detector.vercel.app/"
                            img={ThiefDetectionImage}
                            github="https://github.com/Abhik-Develops/thief-detector"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Quiz Master"
                            summary="An interactive quiz application for creating, managing, and participating in quizzes."
                            type="Full Stack Project"
                            link="https://quiz-master-8vww.onrender.com/"
                            img={QuizMasterImage}
                            github="https://github.com/Abhik-Develops/quiz-master"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="PicGen AI"
                            summary="PicGen AI is a web application built using the MERN stack that allows users to generate images from text inputs. It leverages the API of the Hugging Face Stable Diffusion AI Model to create captivating visual content based on user-provided prompts."
                            type="Full Stack Project"
                            link="https://picgen-ai.onrender.com"
                            img={PicGenAIImage}
                            github="https://github.com/Abhik-Develops/picgen-ai"
                        />
                    </div>
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