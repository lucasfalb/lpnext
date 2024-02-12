import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="gap-6 px-4 py-8 bg-darkBlueCp w-full flex flex-col md: md:py-[80px] md:px-[64px] md:gap-[85px] pb-[40px]">
      <div className="w-full m-auto max-w-[1920px] gap-6 justify-between items-center flex-col flex  md:gap-16 md:flex-row">
        <Image src={"/logo-footer.svg"} className="cursor-pointer" alt="Compra e Venda de Carros Usados | Stand Online | Carplus" width={180} height={40} />
        <span className="opacity-50 text-sm text-white font-semibold whitespace-nowrap">
          © 2023 Carplus Portugal
        </span>
      </div>
    </footer>
  );
}
