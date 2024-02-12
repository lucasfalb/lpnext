import Image from "next/image";
import Container from "@/components/Container";
import './style.css';

export default function CustomerTestimonial() {
  return (
    <Container className="my-7 md:my-14 gap-2">
      <div className="grid grid-cols-3 gap-4 lg:w-[140%]">
        <figure className="col-span-2 w-full rounded overflow-hidden">
          <Image className="w-full rounded h-full object-cover hover:scale-110 duration-500" src='https://assets-global.website-files.com/65a7c073cee168c7567a4185/65a80082d06b453109289317_UGC_Diogo%20Ventura_%20Jul%202023-p-500.png' width={644} height={357} alt='Carplus' />
        </figure>
        <figure className="w-full rounded overflow-hidden">
          <Image className="w-full rounded h-full object-cover hover:scale-110 duration-500" src='https://assets-global.website-files.com/65a7c073cee168c7567a4185/65a80081deba5c1921c85f64_UGC_Roxana%20Salajan-p-500.png' width={314} height={357} alt='Carplus' />
        </figure>
        <figure className="w-full rounded overflow-hidden">
          <Image className="w-full rounded h-full object-cover hover:scale-110 duration-500" src='https://assets-global.website-files.com/65a7c073cee168c7567a4185/65a80081187c2dfb4b227e66_UGC_Mila%20Santos_%20Jan%202023-p-500.png' width={314} height={357} alt='Carplus' />
        </figure>
        <figure className="col-span-2 w-full rounded overflow-hidden">
          <Image className=" w-full h-full object-cover hover:scale-110 duration-500" src='https://assets-global.website-files.com/65a7c073cee168c7567a4185/65a7eeb9b6640ad4e231cc25_UGC_1-p-500.webp' width={644} height={357} alt='Carplus' />
        </figure>
      </div>
      <div className="flex items-center justify-center h-fit m-auto">
        <div className="flex flex-col gap-2 items-start justify-start p-8 shadow-custom2 rounded relative z-[1] bg-white">
          <h2 className="text-[40px] font-bold text-darkBlueCp">+ 15 mil</h2>
          <h3 className="font-bold text-darkBlueCp text-[28px]">pessoas confiaram em nós</h3>
          <p className="text-base text-darkBlueCp">Em alguns passos, encontre o seu carro do sonho, faça a sua compra e receba-o no conforto de sua casa.</p>
        </div>
      </div>
    </Container>
  )
}