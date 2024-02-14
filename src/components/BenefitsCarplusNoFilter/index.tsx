import React, { useState } from 'react';
import Container from "@/components/Container";
import ContentTable from './ContentTable';
const CarSvg = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1314}
    height={713}
    fill="none"
    {...props}
  >
    <g fill="#fff" opacity={0.05}>
      <path
        d="M811.019 327.63c0 70.25-16.03 133.556-41.661 177.532l-.515-.258a.929.929 0 0 0 0 .258h-121.04s14.23-17.788 26.66-53.92a409.433 409.433 0 0 0 18.259-123.612 400.64 400.64 0 0 0-21.431-132.871 183.408 183.408 0 0 0-23.531-45.433h121.255c25.717 43.933 42.004 107.54 42.004 178.304Z"
        opacity={0.6}
      />
      <path d="m709.912 711.928 63.392-57.435h266.766a274.329 274.329 0 0 0 193.59-80.344A274.338 274.338 0 0 0 1314 380.566V273.927c-.1-72.619-29-142.234-80.34-193.583A274.328 274.328 0 0 0 1040.07 0H656.121l87.18 91.938h296.689a181.942 181.942 0 0 1 128.7 53.291c16.9 16.9 30.3 36.965 39.44 59.047a181.946 181.946 0 0 1 13.85 69.651v106.639c0 48.267-19.18 94.556-53.31 128.686a181.987 181.987 0 0 1-128.68 53.304H742.958l-11.316 10.672-86.665 81.437-61.292 57.434" />
      <path d="M91.81 506.279V148.215a56.272 56.272 0 0 1 34.829-52.03 56.277 56.277 0 0 1 21.576-4.247h499.12L560.027 0H148.215A148.429 148.429 0 0 0 0 148.215v358.064a148.431 148.431 0 0 0 148.215 148.214H544.94l96.866-91.937H148.215a56.316 56.316 0 0 1-39.865-16.451 56.315 56.315 0 0 1-16.54-39.826Z" />
    </g>
  </svg>
)
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