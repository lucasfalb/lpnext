'use client';
import Image from "next/image";
import Link from "next/link";
import CountdownHeader from "@/components/CountdownHeader";

type HeaderProps = {
  countdown?: boolean,
  endDate?: string
}

export default function Header({ countdown, endDate }: HeaderProps) {
  return (
    <header className="bg-white text-white flex custom-box-shadow mb-8">
      <div className="flex align-middle max-w-[1440px] w-full m-auto p-5 justify-between">
        <Link href="#" title="Compra e Venda de Carros Usados | Stand Online | Carplus">
          <Image src={"/logo.svg"} alt="Carplus" width={158} height={32} />
        </Link>
        {countdown && <CountdownHeader endDate={endDate} />}
      </div>
    </header>
  );
}