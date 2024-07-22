import AnimatedText from '@/components/AnimatedText'
import Structure from '@/components/Structure'
import React from 'react'
import FruitClassificationImage from '../../../public/images/articles/fruit-classification.png'
import DiabetesDetectionImage from '../../../public/images/articles/diabetes-detection.png'
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
                        title="DANN: A Deep Attention Neural Network for Automatic Fruit Image Classification"
                        summary="This study discusses the obstacles linked to methods of fruit categorization. Suggests an innovative deep-learning approach using CNNs with an attention layer."
                        time="30 min read"
                        link="https://github.com/Abhik-Develops/fruit-classification-dl/blob/main/DANN_%20A%20Deep%20Attention%20Neural%20Network%20for%20Automatic%20Fruit%20Image%20Classification.pdf"
                        img={FruitClassificationImage}
                    />
                    <FeaturedArticle 
                        title="Performance Comparison of Different Machine Learning Classifiers for Diabetes Prediction"
                        summary="This paper presents a thorough evaluation of machine learning algorithms for assessing the risk of having diabetes with the help of  the Pima Indian Diabetes dataset."
                        time="30 min read"
                        link="https://github.com/Abhik-Develops/diabetes-detection-ensemble/blob/main/Diabetes%20Detection_final_ver.docm"
                        img={DiabetesDetectionImage}
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article
                        title="Count Stepping Numbers in Range - A Dynamic Programming Approach"
                        img={ArticleImg1}
                        date="March 22, 2023"
                        link="https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3837168/c-digit-dp-concise-solution/"
                    />
                </ul>
            </Structure>
        </main>
    </>
  )
}

export default page