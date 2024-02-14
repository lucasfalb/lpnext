import React, { useState, useEffect } from 'react';
import VehicleDetail from '@/utils/TypesVehicle'
import VehicleCard from './VehicleCard';
import CarSvg from '@/components/CarSvg';
import './style.css'
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
    totalPages: number;
  };
}

const VehicleFilterComponent: React.FC = () => {
  const [vehicles, setVehicles] = useState<VehicleDetail[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSegment, setSelectedSegment] = useState<number | undefined>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVehicles = async () => {
    setLoading(true);
    const url = 'https://demoapi.gsci.pt/ds/search/v2';
    const filterPayload = {
      filters: {
        segment: (selectedSegment !== undefined && selectedSegment !== 0) ? [selectedSegment] : [],
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
      if (!response.ok) throw new Error('Erro na resposta da API');
      const data: SearchResponse = await response.json();
      console.log(data)
      setVehicles(data.data.searchResult);
      setTotalPages(data.data.totalPages);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, [currentPage, selectedSegment]);

  return (
    <section className='bg-cars-gallery-gradient py-14 relative overflow-hidden'>
      <div className='max-w-[1920px] px-5 m-auto flex flex-col items-center gap-8 relative z-[2]'>
        <h2 className='text-white text-5xl font-bold text-center max-w-[860px]'>Conheça os nossos Renault mais procurados!</h2>
        <h3 className='text-white text-lg text-center'>Garanta o seu com a qualidade e confiança da Carplus!</h3>

        <select className="mobile-select" onChange={(e) => setSelectedSegment(e.target.value ? Number(e.target.value) : undefined)}>
          <option value="">Selecione um segmento</option>
          {Object.entries(VehicleSegment).filter(([key]) => isNaN(Number(key))).map(([key, value]) => (
            <option key={key} value={value}>{key.replace('_', ' ')}</option>
          ))}
        </select>

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

        {error && <div>Erro: {error}</div>}
        <div className={`grid grid-cols-4 gap-4 p-6 rounded custom-shadow-cars bg-white min-w-full`}>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))
          ) : (
            <div className="col-span-4 text-center animate-fadeIn">Não há carros nesse segmento</div>
          )}
        </div>
      </div>
      <CarSvg className="absolute inset-0 top-car" />
    </section>
  );
};

function inProgress() {
  return (<h2 className='p-5 text-center'>Cars Gallery in building</h2>)
}
export default VehicleFilterComponent;