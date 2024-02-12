import React, { useState } from 'react';
import Container from "@/components/Container";

interface SelectableItemProps {
  id: number;
  description: string;
  selected: number;
  onSelect: (id: number) => void;
}

function SelectableItem({ id, description, selected, onSelect }:SelectableItemProps) {
  const isSelected = id === selected;
  const itemClass = `p-5 relative w-full no-select cursor-pointer select-none rounded ${isSelected ? 'text-black bg-white' : 'text-gray bg-whiteSmoke'}`;

  return (
    <span className={itemClass} onClick={() => onSelect(id)}>
      {description}
      {isSelected && <div className="absolute transition-all duration-700 top-0 left-0 -z-10 right-0 bottom-0 bg-white rounded custom-box-shadow max-h-[56px] "></div>}
    </span>
  );
};

export default function BenefitsCarplus() {
  const [selected, setSelected] = useState<number>(1); 

  const renderContent = (id: number) => {
    switch (id) {
      case 1: return <div className="custom-box-shadow min-h-fit h-full"><h2>Verificação em 300 pontos</h2></div>;
      case 2: return <div className="custom-box-shadow min-h-fit h-full"><h2>Até 3 anos de garantia</h2></div>;
      case 3: return <div className="custom-box-shadow min-h-fit h-full"><h2>Teste-drive prévio</h2></div>;
      case 4: return <div className="custom-box-shadow min-h-fit h-full"><h2>Entrega imediata</h2></div>;
      case 5: return <div className="custom-box-shadow min-h-fit h-full"><h2>Garantia de satisfação ou reembolso</h2></div>;
      case 6: return <div className="custom-box-shadow min-h-fit h-full"><h2>Entrega em sua casa</h2></div>;
      default: return <div className="custom-box-shadow min-h-fit h-full"><h2>Conteúdo não encontrado</h2></div>;
    }
  };

  return (
    <Container className='my-14'>
      <div className="col-span-full max-w-[732px] flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-darkBlueCp">Apenas na Carplus encontrará:</h2>
        <h3 className="text-base font-semibold text-darkBlueCp">Por que se contentar com o comum quando você pode dirigir algo extraordinário? Escolha a Carplus.pt para uma experiência de compra de carros usados seamless,</h3>
      </div>
      <Container className="!px-0 col-span-full">
        <aside className="flex flex-col gap-6 relative max-w-[361px]">
          <h2 className="text-lg font-bold text-darkBlueCp">O que esperar desta viatura:</h2>
          <div className="rounded p-2 flex flex-col relative bg-whiteSmoke">
            <SelectableItem id={1} description="Verificação em 300 pontos" selected={selected} onSelect={setSelected} />
            <SelectableItem id={2} description="Até 3 anos de garantia" selected={selected} onSelect={setSelected} />
            <SelectableItem id={3} description="Teste-drive prévio" selected={selected} onSelect={setSelected} />
            <SelectableItem id={4} description="Entrega imediata" selected={selected} onSelect={setSelected} />
            <SelectableItem id={5} description="Garantia de satisfação ou reembolso" selected={selected} onSelect={setSelected} />
            <SelectableItem id={6} description="Entrega em sua casa" selected={selected} onSelect={setSelected} />
          </div>
        </aside>
        <div className='w-full'>
          {renderContent(selected)}
        </div>
      </Container>
    </Container>
  );
}
