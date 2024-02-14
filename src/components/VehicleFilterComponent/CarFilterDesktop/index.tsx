import React from 'react';
enum VehicleSegment {
  TODOS = 0,
  SEDAN = 13,
  SUV = 10,
  MONOVOLUME = 15,
  HATCHBACK = 11,
  COUPÉ = 12,
  COMERCIAL = 17,
  CITADINO = 16,
  CARRINHA = 14,
  CABRIO = 18,
}
interface CarFilterDesktopProps {
  selectedSegment: number | undefined;
  setSelectedSegment: (value: number | undefined) => void;
}

const CarFilterDesktop: React.FC<CarFilterDesktopProps> = ({ selectedSegment, setSelectedSegment }) => (
  <div className="box-car-filter flex rounded overflow-hidden">
    {Object.entries(VehicleSegment).filter(([key]) => isNaN(Number(key))).map(([key, value]) => (
      <button
        key={key}
        className={`${selectedSegment === value ? 'bg-white text-darkBlueCp font-bold' : 'bg-whiteSmoke text-[#C1C1C1]'} py-5 px-6 text-base flex items-center justify-center`}
        onClick={() => setSelectedSegment(Number(value))}
      >
        {key.replace('_', ' ')}
      </button>
    ))}
  </div>
);

export default CarFilterDesktop;
