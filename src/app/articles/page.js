import AnimatedText from '@/components/AnimatedText'
import Structure from '@/components/Structure'
import React from 'react'
import ArticleImg1 from '../../../public/images/articles/leetcode1.png'
import TransitionEffect from '@/components/TransitionEffect'
import Article from '@/components/Article'
import FeaturedArticle from '@/components/FeaturedArticle'

const page = () => {
  return (
    <>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Structure className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle 
                        title="Count Stepping Numbers in Range - A Dynamic Programming Approach"
                        summary="Leveraging the power of Digit Dynamic Programming, this solution efficiently counts stepping numbers in a given range. The recursive function intelligently explores all valid combinations, and memoization ensures optimal performance. Dive into the code to discover how Digit DP elegantly solves the challenge of counting stepping numbers. 💻🔢 #DynamicProgramming #DigitDP #CodingChallenge"
                        time="2 min read"
                        link="https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3837168/c-digit-dp-concise-solution/"
                        img={ArticleImg1}
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                     {/* <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        img={ArticleImg3}
                        date="March 22, 2023"
                        link="/"
                    /> */}
                </ul>
            </Structure>
        </main>
    </>
  )
}

export default page