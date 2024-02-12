'use client';

import React, { useState, useEffect } from 'react';

type CountdownProps = {
  startDate?: string;
  endDate?: string;
  background?: boolean;
};

const formatTime = (time: number): string => (time < 10 ? `0${time}` : `${time}`);

const calculateTimeLeft = (endDate: string) => {
  const difference = +new Date(endDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: formatTime(Math.floor((difference / (1000 * 60)) % 60)),
      seconds: formatTime(Math.floor((difference / 1000) % 60)),
    };
  }
  return null;
};

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
  return new Intl.DateTimeFormat('pt-BR', options).format(new Date(date));
};

export default function Countdown({ startDate, endDate, background }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: string; minutes: string; seconds: string } | null>(null);

  useEffect(() => {
    const updateTimer = () => setTimeLeft(calculateTimeLeft(endDate || ''));
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (!timeLeft) {
    return null;
  }

  return (
    <div className={`py-14 ${background ? 'text-white bg-darkBlueCp' : 'text-darkBlueCp'} flex flex-col items-center gap-1`}>
      <h2 className="font-semibold text-lg">Campanha válida de</h2>
      <p className="flex gap-2 items-center text-[18px] md:items-baseline">
        <em className="text-lg text-center not-italic font-bold md:text-2xl">{formatDate(startDate || '')}</em> até
        <em className="text-lg text-center not-italic font-bold md:text-2xl">{formatDate(endDate || '')}</em>
      </p>

      <div className="gap-2 flex items-center mt-4 md:gap-4">
        <span className="gap-1 flex flex-col items-center md:gap-3"><b className="text-lg md:text-5xl">{timeLeft.days}</b> dias</span>
        <span className="text-lg md:text-5xl">:</span>
        <span className="gap-1 flex flex-col items-center md:gap-3"><b className="text-lg md:text-5xl">{timeLeft.hours}</b> horas</span>
        <span className="text-lg md:text-5xl">:</span>
        <span className="gap-1 flex flex-col items-center md:gap-3"><b className="text-lg md:text-5xl">{timeLeft.minutes}</b> minutos</span>
        <span className="text-lg md:text-5xl">:</span>
        <span className="gap-1 flex flex-col items-center md:gap-3"><b className="text-lg md:text-5xl">{timeLeft.seconds}</b> segundos</span>
      </div>
    </div>
  );
}
