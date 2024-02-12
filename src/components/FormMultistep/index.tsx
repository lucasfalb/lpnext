'use client'
import React, { useState } from 'react';
import ButtonLarge from '@/components/ButtonLarge';
import ButtonBack from '@/components/ButtonBack';
import FormTitle from '@/components/FormTitle';
import CustomSelect from '@/components/CustomSelect';
import CustomRadio from '@/components/CustomRadio';
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
function FormMultistep(): JSX.Element {
  const dealers = [
    { label: "Carplus Gaia", value: "Carplus Gaia" },
    { label: "Carplus Sintra", value: "Carplus Sintra" },
  ];
  const stepsInfo = [
    { stepName: 'Marca e modelo', stepDescription: '🚘 Em qual marca e modelo está interessado?' },
    { stepName: 'Instalação', stepDescription: '🌎 Qual é a instalação mais perto de si?' },
    { stepName: 'Informação adicional', stepDescription: '😃 Conte-nos um bocadinho sobre si.' },
  ];
  const [step, setStep] = useState<number>(1);
  const [selectedMarca, setSelectedMarca] = useState<string>('');
  const [selectedModelo, setSelectedModelo] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>(dealers[0].value);
  const [modelOptions, setModelOptions] = useState<Array<string>>([]);


 
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleMarcaChange = (value: string) => {
    setSelectedMarca(value);
    const models = dataInfo[value] || [];
    setModelOptions(models);
    setSelectedModelo('');
  };


  const currentStepInfo = stepsInfo[step - 1];
  const { stepName, stepDescription } = currentStepInfo;

  function submitForm(e: any) {
    e.preventDefault();
    console.log('Form submitted!');
  }
  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <section className="bg-white flex h-fit flex-col gap-10 custom-box-shadow p-6 rounded transition-opacity duration-500 select-none ease-in-out">
      <header className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 font-normal">
          <span className="w-10 h-10 min-h-10 min-w-10 text-lightbluecp pt-1 font-semibold rounded-full border-gray flex items-center justify-center gap-0.5">
            <b className="text-darkBlueCp font-bold">{step}</b>/3
          </span>
          <strong className="text-center text-darkBlueCp text-sm font-bold">{stepName}</strong>
        </div>
      </header>
      <div className="relative flex items-stretch w-full h-full">
        <div className={`step auto-rows-max gap-4 ${step === 1 ? 'active' : ''}`}>
          <FormTitle text={stepDescription} />
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
        </div>

        <div className={`step auto-rows-max gap-4 ${step === 2 ? 'active' : ''}`}>
          <FormTitle text={stepDescription} />
          <div className='grid grid-cols-2 gap-4'>
            {dealers.map((dealer, index) => (
              <CustomRadio
                key={dealer.value}
                label={dealer.label}
                value={dealer.value}
                checked={selectedOption === dealer.value}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div className={`step auto-rows-max gap-4 ${step === 3 ? 'active' : ''}`}>
          <FormTitle text={stepDescription} />
        </div>
      </div>
      <div className="flex items-center gap-4 controls mt-auto">
        {step > 1 && <ButtonBack onClick={prevStep} text="Voltar" />}
        {step < 3 ? <ButtonLarge color="#00226F" onClick={nextStep} text="Próximo passo" /> : <ButtonLarge color="#0053ff" onClick={submitForm} text="Quero ser contactado" />}
      </div>
    </section>
  );
}

export default FormMultistep;
