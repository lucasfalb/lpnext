import { useEffect, useState } from 'react';
import Image from 'next/image';
import Content1Img from '../../../../public/content1-img.svg';
import TableItem from '../TableItem';

export default function ContentTable() {
  const tableContent = [
    {
      title: 'Teste condução em estrada e suspensão',
      pt: 65
    },
    {
      title: 'Iluminação',
      pt: 28
    },
    {
      title: 'Carroçaria, chassis e interior',
      pt: 70
    },
    {
      title: 'Carroçaria inferior',
      pt: 34
    },
    {
      title: 'Debaixo do capô',
      pt: 41
    },
    {
      title: 'Documentação',
      pt: 8
    },
    {
      title: 'Outros',
      pt: 54
    }
  ];

  const [totalPt, setTotalPt] = useState(0);
  useEffect(() => {
    const total = tableContent.reduce((acc, item) => acc + item.pt, 0);
    setTotalPt(total);
  }, [tableContent]);
  return (
    <div className="custom-box-shadow min-h-fit h-full relative p-9">
      <h2 className="text-lg text-darkBlueCp font-bold">O que inspecionamos?</h2>
      {tableContent.map((table, index) => (
        <TableItem key={index} title={table.title} pt={table.pt} isFirst={index === 0} />
      ))}
      <TableItem title="Total" pt={totalPt} isLast />
      <Image className="absolute top-[-80px] right-[37px]" src={Content1Img} alt="Carplus" width={160} height={160} />
    </div>
  );
}
