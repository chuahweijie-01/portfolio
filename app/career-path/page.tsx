'use client';

import React, { useEffect, useState } from 'react';
import useDarkTheme from '../hooks/useDarkTheme';
import Chips from '../components/common/Chips';
import { GetAllCareerResponse } from './types/get-all-career-response';
import numberToMonth from '../utils/date/numberToMonth';

const CareerPath = () => {
  const [careers, setCareers] = useState<GetAllCareerResponse[]>([]);
  const darkTheme = useDarkTheme();

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch('/api/careers')
        const data = await res.json();
        setCareers(data)
      } catch (error) {
        console.error('Failed to fetch careers:', error);
      }
    }
    fetchCareers();
  }, []);

  const fontColor = darkTheme ? "text-white" : "text-black";
  const contentFontColor = darkTheme ? "text-white" : "text-gray-500";

  return (
    <div>
      <h2 className={`font-bold ${fontColor} text-2xl pb-8`}>Where I&#39;ve Worked</h2>
      <div className='group/list'>
        {careers.map(({ _id, startMonth, startYear, endMonth, endYear, isCurrent, designation, company, location, description, stack }) => (
          <div key={_id} className="group transition-all duration-300 ease-in-out relative mb-15 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className={`transition-all duration-300 ease-in-out block lg:flex lg:gap-5 ${fontColor} lg:hover:scale-102`}>
              <div className='lg:w-1/5 text-sm pb-3 lg:pb-0'>
                {`${numberToMonth(startMonth)} ${startYear} - ${isCurrent ? 'Current' : `${numberToMonth(endMonth!)} ${endYear}`}`}
              </div>
              <div className='lg:w-4/5'>
                <div className='flex gap-1 items-start lg:items-center pb-2 flex-col lg:flex-row'>
                  <span className='font-bold text-indigo-500'>{designation}</span>
                  <span className='hidden lg:block'> · </span>
                  <span>{company}</span>
                  <span className='hidden lg:block'> · </span>
                  <span>{location}</span>
                </div>
                <div className={`${contentFontColor} pb-2`}>
                  <ul className="list-disc pl-5">
                    {description.map((sentence, index) => (
                      <li className="text-sm" key={index}>{sentence}</li>
                    ))}
                  </ul>
                </div>
                <div className='flex gap-3 flex-wrap'>
                  {stack.map((tech, index) => (
                    <Chips key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;
