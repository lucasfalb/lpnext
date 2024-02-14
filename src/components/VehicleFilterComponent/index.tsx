import React, { useState, useEffect } from 'react';
import VehicleDetail from '@/utils/TypesVehicle';
import VehicleCard from './VehicleCard';
import CarSvg from '@/components/CarSvg';
import CarFilterDesktop from './CarFilterDesktop';
import CarFilterMobile from './CarFilterMobile';
import './style.css';

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

interface VehicleFilter {
  segment: number[];
  needle: string;
}

interface SearchResponse {
  data: {
    searchResult: VehicleDetail[];
  };
  pagination: {
    maxPage: number;
    currentPage: number;
  }
}

const VehicleFilterComponent: React.FC = () => {
  const [vehicles, setVehicles] = useState<VehicleDetail[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSegment, setSelectedSegment] = useState<number>(VehicleSegment.TODOS);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toggleAnimation, setToggleAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchVehicles = async () => {
    setLoading(true);
    const url = 'https://api.gsci.pt/ds/search/v2';
    const filterPayload = {
      filters: {
        segment: selectedSegment !== VehicleSegment.TODOS ? [selectedSegment] : [],
      },
      needle: "",
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Companyid': '2',
      },
      body: JSON.stringify(filterPayload),
    };

    try {
      const response = await fetch(`${url}?numberElements=8&page=${currentPage}&showReservation=1&sort=createTime&orderBy=asc`, requestOptions);
      if (!response.ok) throw new Error('API response error');
      const data: SearchResponse = await response.json();
      setVehicles(data.data.searchResult);
      setTotalPages(data.pagination.maxPage);
      setToggleAnimation(prev => !prev);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [currentPage, selectedSegment]);

  const changePage = (newPage: number) => setCurrentPage(prevPage => prevPage + newPage);

  return (
    <section className='bg-cars-gallery-gradient py-14 relative overflow-hidden min-h-[650px]'>
      <div className='max-w-[1920px] px-5 m-auto flex flex-col items-center gap-8 relative z-[2]'>
        <h2 className='text-white text-5xl font-bold text-center max-w-[860px]'>Conheça os nossos Renault mais procurados!</h2>
        <h3 className='text-white text-lg text-center'>Garanta o seu com a qualidade e confiança da Carplus!</h3>

        {isMobile ? (
          <CarFilterMobile selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} />
        ) : (
          <CarFilterDesktop selectedSegment={selectedSegment} setSelectedSegment={setSelectedSegment} />
        )}

        <div className={`grid ${isMobile ? 'sm:grid-cols-1' : 'lg:grid-cols-2 xl:grid-cols-4'} gap-4 p-6 place-items-center rounded custom-shadow-cars bg-white min-w-full ${toggleAnimation ? 'animate-fadeIn' : ''}`}>
          {vehicles.length > 0 ? vehicles.map(vehicle => (
            <VehicleCard key={vehicle.vin} {...vehicle} />
          )) : <span className="col-span-4 text-center animate-fadeIn">Não há carros nesse segmento</span>}
          {totalPages > 0 && (
            <div className="flex items-center mt-2 justify-center gap-8 w-full col-span-full animate-fadeIn">
              {currentPage > 1 && (
                <button onClick={() => changePage(-1)} className="text-white bg-blue-500 hover:bg-blue-700 text-sm font-bold py-2 px-4 rounded">
                  Anterior
                </button>
              )}
              {currentPage < totalPages && (
                <button onClick={() => changePage(1)} className="text-white bg-blue-500 hover:bg-blue-700 text-sm font-bold py-2 px-4 rounded">
                  Próximo
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <CarSvg className="absolute inset-0 top-car" />
    </section>
  );
};

export default VehicleFilterComponent;
