import Image from 'next/image'
import VehicleDetail from '@/utils/TypesVehicle'

export default function VehicleCard(props: VehicleDetail): JSX.Element { 
    const { brand, model, version, imageUrl, pricePvp } = props;

    return (
      <article className='animate-fadeIn flex flex-col gap-4 cursor-pointer w-full '>
        <figure>
          <Image className='rounded aspect-video object-cover w-full' src={imageUrl} alt={model} width={418} height={241} /> 
        </figure>
        <div className='flex items-start justify-between gap-2'>
          <div>
            <h2 className='text-darkBlueCp font-semibold text-lg'>{brand} {model}</h2> 
            <h3 className='text-darkBlueCp text-base'>{version}</h3>
          </div>
          <span className='bg-[#CCDDFF] rounded pt-4 pb-2 px-2 flex flex-col text-[#3375FF]'>
            Desde
            <b className='font-bold text-2xl whitespace-nowrap text-[#0053FF]'>{pricePvp} €</b>
          </span>
        </div>
      </article>
    )
}
