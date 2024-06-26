import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const About = () => {
  const skills=[
    "JavaScript",
    "TypeScript",
    "NextJS",
    "Node JS",
    "React",
    "Django",
    "Java Full Stack",
    "AWS",
    "AZURE",
    "GCP",
    "Many More..."
  ]
  return (
    <div
        className='py-11'
    >
        <div>
            <SectionTitle title="About Me"/>
        </div>
        <div 
            className='flex w-full items-center sm:flex-col'
        >
            <div
              className='h-[70vh] sm:h-[50vh] w-1/2 sm:w-full flex items-center sm:flex-col'
            >
                <img className="w-100 h-100 sm:w-60 rounded-full" src="https://avatars.githubusercontent.com/u/109901688?v=4" alt="Rounded avatar"/>
            </div>
            <div
              className='flex flex-col gap-5 p-[-5px] sm:w-full text-xl font-medium w-1/2 text-white'
            >
              <p >
              Hey!, I am Trinay Reddy Malireddy , I am Currently Pursing my 3rd year Major in CSE Honors From KL University ,I have Solved more Than 1500+ DSA Problems in Various Platforms. I am having expertise in the field of web development in MERN STACK , Django , JAVA FULLSTACK.
              I am Currently Learning about the Field of Web3 Dev and Scalable System Designs. I Have done Certifications From AWS ,Azure, Python Institute, MongoDB, GCP. 3 🌟 @CodeChef , 1566 @LeetCode
              </p>
              <p>
              I am very Self motivated Person Who strives very hard to learn new interesting tech stacks that make the field of Computer science progressive and innovative . I Love to Explore new System builds which solve the real World Problems . I am team collabrative person
              </p>
            </div>
        </div>
        <div
          className='py-5'
        >
          <h1
              className='text-secondary text-xl py-10'
          >
            Here are the few Technologies That I had Worked on
          </h1>
          <div
              className="flex flex-wrap gap-10"
          >
            {
              skills.map((e,i)=>
              <div 
                className="border border-white px-3 py-5 rounded "
                key={i}
              >
                <h1 key={i} className='text-white text-lg'>{e}</h1>
              </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default About