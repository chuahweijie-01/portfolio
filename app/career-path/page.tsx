'use client';

import React from 'react'
import useDarkTheme from '../hooks/useDarkTheme';
import careers from '../assets/mock/career.json';
import Chips from '../components/Chips';

const CareerPath = () => {
  const fontColor = useDarkTheme() ? "text-white" : "text-black";
  const contentFontColor = useDarkTheme() ? "text-white" : "text-gray-500";

  const renderCareerPathElement = () => {
    return careers.map(career => (
      <div key={career.id} className="group relative mb-15 lg:hover:!opacity-100 lg:group-hover/list:opacity-30">
        <div className={`transition-all duration-300 ease-in-out block lg:flex lg:gap-5 ${fontColor} lg:hover:scale-102 `}>
          <div className='lg:w-1/5 text-sm pb-3 lg:pb-0'>
            {`${career.startMonth} ${career.startYear} - ${career.isCurrent ? 'Current' : `${career.endMonth} ${career.endYear}`}`}
          </div>
          <div className='lg:w-4/5'>
            <div className='flex gap-1 items-start lg:items-center pb-2 flex-col lg:flex-row'>
              <span className='font-bold lg:group-hover:text-indigo-500'>{career.designation}</span>
              <span className='hidden lg:block'> · </span>
              <span>{career.company}</span>
              <span className='hidden lg:block'> · </span>
              <span>{career.location}</span>
            </div>
            <div className={`${contentFontColor} pb-2`}>
              {career.description}
            </div>
            <div className='flex gap-3 flex-wrap'>
              {career.stack.map((tech, index) => (
                <Chips key={index} {...tech} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-[-15px] lg:inset-[-25px] hidden group-hover:flex flex-col items-center justify-center rounded shadow-[0_0_15px] shadow-indigo-500/30 pointer-events-none">
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className={`font-bold ${fontColor} text-2xl pb-8`}>{`Where I've Work`}</div>
      <div className='group/list'>{renderCareerPathElement()}</div>
    </div>
  )
}

export default CareerPath