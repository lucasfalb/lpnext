interface PriceDetail {
  priceId: number;
  priceType: string;
  actualValue: number;
  previousValue: number;
}

interface VehicleDetail {
  id: string;
  imageUrl: string;
  model: string;
  version: string;
  year: number;
  modelId: number;
  versionId: number;
  availability: string;
  brand: string;
  color: string;
  commercialDescription: string;
  condition: string;
  conditionId: number;
  creditTypeId: number;
  dealerDistrict: string;
  dealerId: number;
  dealerMunicipality: string;
  displacement: number;
  engine: any;
  environmentalBadge: any;
  financeId: number;
  financialProduct: string;
  fuel: string;
  highlightedVehicle: boolean;
  idFinancialProduct: number;
  kilometers: number;
  legalInfo: string;
  licensePlate: string;
  lowCost: boolean;
  minCapitalFinance: number;
  minMonths: number;
  month: number;
  monthlyPrice: number;
  postExpenses: number;
  power: number;
  previousPrice: number;
  pricePvp: number;
  prices: PriceDetail[];
  promo: boolean;
  rate: number;
  reserveType: number;
  seats: number;
  taeg: number;
  taxStamp: number;
  totalPrice: number;
  traction4x4: boolean;
  transmission: string;
  updateTime: string;
  vehicleUsedType: string;
  vehicleUsedTypeId: number;
  vin: string;
}

export default VehicleDetail;