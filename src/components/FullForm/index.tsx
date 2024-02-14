'use client'
import React, { useState } from 'react';
import ButtonLarge from '@/components/ButtonLarge';
import CustomSelect from '@/components/FormMultistep/CustomSelect';
import CustomTel from '@/components/FormMultistep/CustomTel';
import CustomLabelText from '@/components/FormMultistep/CustomLabelText';
import CustomCheckbox from '@/components/FormMultistep/CustomCheckbox';
import './style.css';

interface DataInfo {
  [key: string]: string[];
}
const dataInfo: DataInfo = {
  "Alfa Romeo": ["Giulia", "Outro"],
  Audi: [
    "A3",
    "A3 Sportback",
    "A5",
    "A8",
    "E-tron GT",
    "E-tron Sportback",
    "Q3",
    "Q5",
    "Q7",
    "SQ5",
    "Outro",
  ],
  BMW: [
    "Serie 1",
    "Serie 2 Active Tourer",
    "Serie 2 Gran Tourer",
    "Serie 3",
    "Serie 4",
    "Serie 5",
    "Serie 7",
    "Série 2",
    "X1",
    "X2",
    "X3",
    "X5",
    "i4",
    "Outro",
  ],
  Citroën: [
    "C4",
    "C4 Cactus",
    "DS3",
    "Grand C4 Spacetourer",
    "Jumper",
    "Outro",
  ],
  Cupra: ["Born", "Outro"],
  DS: ["DS 3 Crossback", "DS 7 Crossback", "Outro"],
  Dacia: ["Dokker", "Duster", "Jogger", "Logan MCV", "Sandero", "Outro"],
  Fiat: ["500", "500X", "Outro"],
  Ford: ["Fiesta", "Focus", "Outro"],
  Honda: ["Civic", "Honda e", "Outro"],
  Hyundai: ["Bayon", "IONIQ 5", "Kauai", "Santa Fe", "Tucson", "i30", "Outro"],
  Jaguar: ["E-Pace", "Outro"],
  Kia: ["EV6", "Sportage", "Stonic", "Outro"],
  "Land Rover": ["Discovery Sport", "Outro"],
  Lexus: ["RX", "Outro"],
  Mazda: ["CX-5", "Outro"],
  "Mercedes-Benz": [
    "Clase CLA",
    "Classe A",
    "Classe C",
    "Classe CLA",
    "Classe GLC",
    "GLC Coupé",
    "Outro",
  ],
  Mini: ["Clubman", "Cooper", "Mini", "Outro"],
  Mitsubishi: ["Eclipse Cross", "Outro"],
  Nissan: ["JUKE", "LEAF", "Micra", "Qashqai", "X-Trail", "Outro"],
  Opel: [
    "Astra",
    "Corsa",
    "Grandland X",
    "Insignia",
    "Mokka X",
    "Vivaro",
    "Outro",
  ],
  Peugeot: ["2008", "3008", "5008", "508", "Outro"],
  Renault: [
    "Arkana",
    "Austral",
    "Captur",
    "Clio",
    "Espace",
    "Grand Kangoo",
    "Grand Scenic",
    "Kadjar",
    "Kangoo",
    "Kangoo Furgón",
    "Koleos",
    "Megane",
    "Nuevo Clio",
    "Nuevo Espace",
    "Scenic",
    "ZOE",
    "Outro",
  ],
  SEAT: ["Arona", "Ateca", "Leon", "Outro"],
  Tesla: ["Model S", "Outro"],
  Volkswagen: [
    "Golf",
    "ID. BUZZ",
    "ID.3",
    "ID.4",
    "Passat",
    "Scirocco",
    "T-Roc",
    "Outro",
  ],
  Volvo: ["XC40", "XC60", "Outro"],
  Outro: ["Outro"],
};

const dealers = [
  { label: "Carplus Gaia", value: "Carplus Gaia" },
  { label: "Carplus Sintra", value: "Carplus Sintra" },
];
function FullForm(): JSX.Element {
  const [selectedMarca, setSelectedMarca] = useState<string>('');
  const [selectedModelo, setSelectedModelo] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>(dealers[0].value);
  const [modelOptions, setModelOptions] = useState<Array<string>>([]);

  const handleMarcaChange = (value: string) => {
    setSelectedMarca(value);
    const models = dataInfo[value] || [];
    setModelOptions(models);
    setSelectedModelo('');
  };

  return (
    <section className="bg-white flex h-fit flex-col gap-4 custom-box-shadow p-6 rounded transition-opacity duration-500 select-none ease-in-out">
      <div className='grid-cols-1 grid sm:grid-cols-2 gap-4'>
        <CustomSelect
          label="Marca"
          placeholder="Selecione uma marca"
          options={Object.keys(dataInfo)}
          onChange={handleMarcaChange}
        />
        <CustomSelect
          label="Modelo"
          disabled={!selectedMarca}
          placeholder="Selecione um modelo"
          options={modelOptions}
          onChange={(value) => setSelectedModelo(value)}
        />
        <CustomSelect
          classList='col-span-full'
          label="Concessionário"
          placeholder="Selecione o concessionário"
          options={dealers.map(dealer => dealer.label)}
          onChange={() => {}}
        />
        <CustomLabelText label='Nome' name='name' placeholder='Informe seu nome.' type="text" autocomplete="name" />
        <CustomTel label='Telemóvel (Opcional)' name='tel' placeholder='Informe seu telemóvel.' />
      </div>
        <CustomLabelText label='E-mail' name='email' placeholder='Informe seu e-mail.' type="email" autocomplete="email" />
        <CustomCheckbox label="Aceito a política de <a class='underline' href='#'>privacidade de dados</a>." name='policy' />
        <CustomCheckbox label='Autorizo o tratamento dos meus dados pessoais para marketing de produtos e serviços comercializados pela Caetano Retail, SGPS, S.A. e sociedades participadas da Salvador Caetano Auto, SGPS, S.A., e pelas sociedades importadoras e/ou fabricantes da marca do veículo que seja adquirido, objeto de prestação de serviços, que foi experimentado ou em que mostrei interesse.' name='data' />
        <ButtonLarge color="#0053ff" onClick={() => {}} text="Contactem-me" />
    </section>
  );
}

export default FullForm;