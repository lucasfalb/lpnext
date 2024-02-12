import Image from "next/image";

type Item = {
  icon: string;
  title: string;
  description: string;
}

type SectionWithCardsProps = {
  title?: string;
  subtitle?: string;
  background?: boolean,
  box?: Array<Item>;
}
export default function SectionWithCards({ title, subtitle, box, background }: SectionWithCardsProps) {
  return (
    <section className={`${background ? 'bg-darkBlueCp' : ''}`}>
      <div className="py-14 max-w-[1920px] px-5 mx-auto flex flex-col gap-10">
        <h2 className={`${background ? 'text-white' : 'text-darkBlueCp'} text-4xl font-bold  max-w-[762px]`} dangerouslySetInnerHTML={{ __html: title || '' }}></h2>
        <h3 className={`${background ? 'text-white' : 'text-darkBlueCp'} text-base font-semibold  max-w-[762px] text-justify tracking-[custom]`}>{subtitle}</h3>
        <div className="grid grid-cols-1 gap-6 flex-wrap md:grid-cols-2 lg:grid-cols-4 ">
          {box && box.map((box, index) => (
            <div key={index} className={`${background ? 'bg-blueAlternative' : 'bg-white'} custom-box-shadow p-8 rounded`}>
              <Image className={`${background ? 'filter brightness-[500] ' : ''}`} src={box.icon} alt="Carplus" width={64} height={64}/>
              <h2 className={`${background ? 'text-white' : 'text-darkBlueCp'} text-lg font-bold mt-6`}>{box.title}</h2>
              <h3 className={`${background ? 'text-grayAlternative' : 'text-gray'} text-base font-semibold mt-2`}>{box.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
