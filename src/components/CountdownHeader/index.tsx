import React, { useState, useEffect } from 'react';
import './style.css';

type CountdownProps = {
  endDate?: string;
};

const CountdownHeader: React.FC<CountdownProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: string; minutes: string; seconds: string } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate || '') - +new Date();
      if (difference > 0) {
        const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
          minutes: formatTime(Math.floor((difference / (1000 * 60)) % 60)),
          seconds: formatTime(Math.floor((difference / 1000) % 60)),
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="countdown fade-in flex items-center justify-center md:min-h-[58px] bg-darkBlueCp relative z-20 top-0">
    {timeLeft && (
       <div className="px-5 flex my-auto items-center justify-center fixed gap-2 bg-darkBlueCp w-full min-h-[58px] py-2 flex-wrap top-0">
       <span className='bg-[#001443] text-white align-middle flex items-center justify-center w-fit pt-2 pb-1 px-3 rounded-[47px] h-full border border-solid border-[#99A7C5]'>Nova</span>
       <span className='text-white text-lg text-center font-semibold'>
         Campanha por tempo limitado
       </span>
       <span className='min-w-fit text-white text-align font-bold align-middle mt-1'>{`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}</span>
     </div>
    )}
    </div>
  );
}

export default CountdownHeader;
