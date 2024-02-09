import React, { useState, useEffect } from 'react';

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
      timeLeft &&
        <div className="fade-in flex items-center">
          <span className='text-darkBlueCp font-bold'>{`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}</span>
        </div>
  );
}

export default CountdownHeader;
