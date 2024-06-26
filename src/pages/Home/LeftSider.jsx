import React from 'react'

const LeftSider = () => {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:hidden'>
        <div className='flex flex-col items-center'>
        <div
            className='flex flex-col gap-5'
        >
        <a href='https://www.linkedin.com/in/trinay-reddy-malireddy-170555246' target='_blank'> <i class="ri-linkedin-box-line text-secondary text-2xl"></i></a>
        <a href='mailto:trinayreddy4@gmail.com' target='_blank'><i class="ri-mail-line text-secondary text-2xl"></i></a>           
        <a href='https://github.com/trinayreddy4' target='_blank'><i class="ri-github-line text-secondary text-2xl"></i></a>
        <a href='https://www.instagram.com/trinayreddymalireddy' target='_blank'><i class="ri-instagram-line text-secondary text-2xl"></i></a>
        </div>
        <div
            className='w-[1px] h-52 bg-[#153c42]'
        >

        </div>

        </div>
    </div>
  )
}

export default LeftSider