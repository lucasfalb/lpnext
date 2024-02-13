import React, { useState, useEffect } from 'react';

interface VehicleDetail {
  id: string;
  imageUrl: string;
  model: string;
  version: string;
  segment: string;
}

enum VehicleSegment {
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
    vehicles: VehicleDetail[];
    totalPages: number;
  };
}

const VehicleFilterComponent: React.FC = () => {
  const [vehicles, setVehicles] = useState<VehicleDetail[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSegment, setSelectedSegment] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  console.log(vehicles)
  const fetchVehicles = async () => {
    setLoading(true);
    const url = 'https://demoapi.gsci.pt/ds/search/v2';
    const filterPayload: VehicleFilter = {
      segment: selectedSegment !== undefined ? [selectedSegment] : [],
      needle: "",
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json',
        'Companyid': '2',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJkaWdpdGFsX3N0b3JlIiwianRpIjoiNWU2YjZhMTctNmU3MS00OGY0LWE2ZWEtMTVjOWQ3Njc4OGEzIiwic3ViIjoiIiwiYXVkIjoiZGlnaXRhbF9zdG9yZV9hdWQiLCJ1c2VySWQiOiIiLCJjb21wYW55SWQiOiIxIiwiZ3JvdXBzIjpbIkd1ZXN0Il0sImV4cCI6NDgyOTg0NTUxNiwiaWF0IjoxNzA3NzgxNjQ0fQ.JNOgPP8KcE_1eayUTnMOVltQZKBNFmw5YP85viJhAmSl-Ti-RoQNJkJle-Vb9NLEmREnxwnPn4AciO_yiisCbr5kS907F07S-nbDtKPCsd7hb_FSoAFTMaAu_LJwrIF1YRXwIo8JlQznShNvlhGoYT_zG9zr-cQ4nWtfdsqjsH-LD4apOMKr2gKKYAdSHkXbs8ufO1etj8_uagBm6TCutfgsM6ZAP4hhM8gHbf5mUUWY7xBaD5SiHcexgduJ5LxtOhDaBMlg93NM2JAoFuaB0Po35r11tg-X1s8g7pp2VS0H2xw4Os5FQ19uLoncRu5hpGH8H1IsI_aAqhyouZklYw'
      },
      body: JSON.stringify(filterPayload),
    };

    try {
      const response = await fetch(`${url}?numberElements=14&page=${currentPage}&showReservation=1&sort=createTime&orderBy=asc`, requestOptions);
      if (!response.ok) throw new Error('Erro na resposta da API');
      const data: SearchResponse = await response.json();
      setVehicles(data.data.vehicles);
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
    <div>
      <select onChange={(e) => setSelectedSegment(e.target.value ? Number(e.target.value) : undefined)}>
        <option value="">Selecione um segmento</option>
        {Object.entries(VehicleSegment).filter(([key]) => isNaN(Number(key))).map(([key, value]) => (
          <option key={key} value={value}>{key.replace('_', ' ')}</option>
        ))}
      </select>

      {loading && <div>Carregando...</div>}
      {error && <div>Erro: {error}</div>}
      
    </div>
  );
};
function inProgress(){
  return (<h2 className='p-5 text-center'>Cars Gallery in building</h2>)
}
export default inProgress;
