import React, { useState } from 'react';
import Container from "@/components/Container";
import ContentTable from './ContentTable';
import ContentDefault from './ContentDefault';
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
      case 1:return <ContentTable />;
      case 2:return <ContentDefault title='Até 3 anos de Garantia' description='Sinta-se mais seguro e tranquilo com uma garantia até 3 anos.' />;
      case 3:return <ContentDefault title='Teste-drive prévio' description='Realizar um test-drive é fundamental para poder avaliar se o veículo, realmente, atende às suas necessidades e cumpre com as suas expectativas.' cta="Marcar Test-Drive" />;
      case 4:return <ContentDefault title='Entrega imediata' description='Sabemos o quão estimulante pode ser comprar um carro novo e por esse motivo, não o queremos fazer esperar.' />;
      case 5:return <ContentDefault title='Garantia de satisfação ou reembolso' description='O nosso objetivo é que todos os veículos superem, ou pelo menos, corresponda às suas expectativas. Caso isso não aconteça, poderá devolver o seu veículo até 14 dias ou 1.000 km após a compra.' />;
      case 6:return <ContentDefault title='Entrega em sua casa' description='A conveniência de poder receber o seu carro em sua casa.' />;
      default: return <div className="custom-box-shadow min-h-fit h-full"><h2>Conteúdo não encontrado</h2></div>;
    }
  };

  return (
    <Container className='my-7 gap-6 md:gap-12 md:my-14'>
      <div className="col-span-full max-w-[732px] flex flex-col gap-5 md:gap-10">
        <h2 className="text-2xl md:text-4xl font-bold text-darkBlueCp">Apenas na Carplus encontrará:</h2>
        <h3 className="text-base font-semibold text-darkBlueCp">Por que se contentar com o comum quando você pode dirigir algo extraordinário? Escolha a Carplus.pt para uma experiência de compra de carros usados seamless,</h3>
      </div>
      <section className="!px-0 col-span-full flex justify-between items-start gap-10 flex-col md:flex-row">
        <aside className="flex flex-col gap-6 relative w-full md:max-w-[361px]">
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
        <div className='w-full h-full max-w-[1100px]'>
          {renderContent(selected)}
        </div>
      </section>
    </Container>
  );
}
