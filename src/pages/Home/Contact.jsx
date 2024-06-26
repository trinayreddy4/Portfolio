import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
const Contact = () => {
    const me = {
        name: "Trinay Reddy Malireddy",
        age: 19,
        gender: "Male",
        email: "trinayreddy4@gmail.com",
        phoneNumber: 7799382323,
        country: "india"

    }
    return (
        <div>
            <SectionTitle title="Say Hello?" />
            <div
                className='flex sm:flex-col items-center justify-center'
            >
                <div

                    className='flex flex-col gap-1'
                >
                    <h1
                        className='text-white text-xl'
                    >{"{"}</h1>
                    {
                        Object.keys(me).map((key, index) => (
                            <h1
                                id={index}
                                className='ml-5 text-xl'
                            >
                                <span className='text-secondary'>{key}</span>
                                <span className='text-white'> : </span>
                                <span className='text-white'>{me[key]}</span>
                            </h1>
                        ))
                    }
                    <h1
                        className='text-white text-xl'
                    >
                        {"}"}
                    </h1>
                </div>
                <div className='h-[400px] w-full flex align-middle items-center px-3'>
                <iframe src="https://lottie.host/embed/94d3100c-4d81-4db5-8e17-cdd2fca40f19/gTGiwOeaBo.json"
                    className='h-full w-full'
                ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact