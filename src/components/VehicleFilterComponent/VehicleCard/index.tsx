import Image from 'next/image'
import VehicleDetail from '@/utils/TypesVehicle'

export default function VehicleCard(props: VehicleDetail): JSX.Element { 
    const { brand, model, version } = props;

    return (
      <article>
        <figure>
          <Image src={props.imageUrl} alt={props.model} width={418} height={241} /> 
        </figure>
        <div>
          <div>
            <h2>{brand} {model}</h2> 
            <h3>{version}</h3>
          </div>
          <span>
            Desde
            <b>{props.pricePvp} €</b>
          </span>
        </div>
      </article>
    )
}
