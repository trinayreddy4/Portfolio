import React from 'react'

const Intro = () => {
  return (
    <div
        className='h-[80vh] bg-primary flex flex-col items-start justify-center  gap-8'
    >
            <h1
                className='text-white text-5xl sm:text-2xl '
            >
                Hi, I am
            </h1>
            <h1 
                className='text-secondary text-7xl sm:text-3xl font-semibold'
            >
                Trinay Reddy Malireddy
            </h1>
            <h1
                className='text-white  text-6xl sm:text-2xl font-semibold'
            >
                I Develop and Design Scalable Webapps. 
            </h1>
            <p className="text-white text-2xl  sm:text-sm font-medium w-3/4 ">
                I am Currently in my 3rd Year of BTech in CS @ KL University.
                I am FullStack Developer With Expertise in Mern Stack(TypeScript), Django, Java FullStack.I do Have my Expertise in Data Structures and Algorithms as Well.I have Been Certified From Many Global Organizations
            </p>
            <button
                className='border-2  border-secondary px-10 py-5 text-white '
            >
               <a href='https://drive.google.com/file/d/1H2kfPAIqfzirmbtMLH4vLOM0ZkfXAurw/view?usp=sharing' download> Get My Resume </a>
            </button>
    </div>
  )
}

export default Intro