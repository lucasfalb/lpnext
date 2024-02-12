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
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json',
        'CompanyId': '2',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJkaWdpdGFsX3N0b3JlIiwianRpIjoiMmZkYTZkMGQtM2I4Ni00MWE0LTlkYmMtM2ZiYmZhNGQ5MmMwIiwic3ViIjoiIiwiYXVkIjoiZGlnaXRhbF9zdG9yZV9hdWQiLCJ1c2VySWQiOiIiLCJjb21wYW55SWQiOiIyIiwiZ3JvdXBzIjpbIkd1ZXN0Il0sImV4cCI6NDgyOTA0MDUwOCwiaWF0IjoxNzA2OTc2NjM2fQ.PMHrPnQsclmB-VVf4gLE3VWME0fwborFIf-ZnbYfEw26bsbkmywnAyn2qUn-GVnuvljkQstcpjahGJq7G9B6AW3cAMJMx9pIiI4kWM25KyzvGLOh1w7kLKd-XqirHHZEk1_sYJTnPqlsvDEk13WKlAbHRxUGZlrMP02TMbeVkBRd3Lp7flTLc7GOC_7Q48pHjshnanbXLuhWNaTDhNYVHK6qaA-WSoENGvrd6qw96YUobPD09VTHeE-ILH77WkNL1QXIJOfmv-VjZbr9MTJcTrfudvrxH4MVBgWj9QGb_Q-NHz-GyLSt0Nil6DCS2_l26aUbi6GKcvNzwIL1VfeU7g'
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
  return (<h2>Cars Gallery in building</h2>)
}
export default inProgress;
