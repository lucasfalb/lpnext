import React, { useState } from 'react';
import Container from "@/components/Container";
import ContentTable from './ContentTable';
import CarSvg from '@/components/CarSvg';
export default function BenefitsCarplusNoFilter() {
  return (
    <section className='py-14 bg-custom-gradient overflow-hidden'>
      <div className='grid-cols-1 grid md:grid-cols-2  gap-6 md:gap-12 px-5 max-w-[1920px] m-auto relative'>
        <div className='w-full h-full max-w-[1100px] rounded relative z-[1]'>
          <ContentTable />
        </div>
        <div className="row-start-1 md:row-start-auto max-w-[732px] flex flex-col gap-5 md:gap-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white">Apenas na Carplus encontrará:</h2>
          <h3 className="text-base font-semibold text-white">Por que se contentar com o comum quando você pode dirigir algo extraordinário? Escolha a Carplus.pt para uma experiência de compra de carros usados seamless,</h3>
        </div>
        <CarSvg className="absolute inset-0  max-w-[1317px] center-car" />
      </div>
    </section>
  );
}