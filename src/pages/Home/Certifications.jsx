import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const Certifications = () => {
    // {
    //     CertificationName:,
    //      Image Link,
    //      Details
    // }
    const [selectedItem,setSelectedItem]= useState(0);
    const data=[{
        certificationsName:"AWS Cloud Practitioner",
        ImageLink:"https://media.licdn.com/dms/image/D5622AQGE876baw3NwA/feedshare-shrink_800/0/1704022558282?e=1722470400&v=beta&t=xjz3SR8tYsit_09WaN7fiesKbwH5M6BUIEvkFM1CWlU",
        Details:"Lorem Lupsum120"
    },
    {
        certificationsName:"Azure AI 900",
        ImageLink:"https://media.licdn.com/dms/image/D5622AQGCqxtW-HgbFw/feedshare-shrink_2048_1536/0/1717920085362?e=1722470400&v=beta&t=wBkpKz2JJegHsZ-_rtEFKA6b2xaPHciN3uMhaHEnrJQ",
        Details:"Lorem Lupsum120"
    },
    {
        certificationsName:"Mongo DBA",
        ImageLink:"https://media.licdn.com/dms/image/D5622AQFOvYN9uI9QIQ/feedshare-shrink_800/0/1716806080305?e=1722470400&v=beta&t=dsgxhMTIhHE2J-pAm0F91_rz29VbLNG09xvoiu3WuY4",
        Details:"Lorem Lupsum120"
    },
    {
        certificationsName:"Mongodb node js associate",
        ImageLink:"https://i.ibb.co/drdB90d/Screenshot-from-2024-06-26-14-32-26.png",
        Details:"Lorem Lupsum120"
    },
    {
        certificationsName:"Oracle Infrastructure Associate",
        ImageLink:"https://media.licdn.com/dms/image/D5622AQEkh_XASml7iA/feedshare-shrink_800/0/1702448585286?e=1722470400&v=beta&t=rpwZ6tk7pzio-wYGs5TXLDPz_YugT611V77jt8awQ9U",
        Details:"Lorem Lupsum120"
    }
    ]
  return (
    <div>
        <SectionTitle title="Certifications"/>
        <div 
            className="flex py-10 gap-20 sm:flex-col"
        >
            <div 
                className='flex cursor-pointer flex-col gap-5 border-l-2 border-[#174257d8] sm:flex-row sm:overflow-scroll sm:w-full'
            >
                {
                    data.map((e,i)=>
                        <div key={i} onClick={()=>setSelectedItem(i)} >
                            <h1 className={`text-xl px-5 ${selectedItem===i ? "text-secondary border-secondary -ml-[3px] border-l-4 bg-[#1681945e]" :"text-white" } `}>{e.certificationsName}</h1>
                        </div>
                )
                }
            </div>
            <div
                className="flex flex-col gap-5 w-full"
            >
                <div
                    className='w-1/2'
                >
                        <h1 className='text-tertiary text-3xl'>{data[selectedItem].certificationsName}</h1>
                </div>
                <div
                    className='flex w-2/3 h-full'
                >
                    <div >
                        <img src={data[selectedItem].ImageLink} alt="Certificate badge" className='flex' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certifications