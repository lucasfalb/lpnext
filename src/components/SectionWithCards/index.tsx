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
    <section className={`${background ? 'bg-custom-gradient' : ''}`}>
      <div className="py-7 max-w-[1920px] px-5 mx-auto flex flex-col gap-6 md:gap-10 md:py-14">
        <h2 className={`${background ? 'text-white' : 'text-darkBlueCp'}  font-bold  max-w-[762px] text-2xl md:text-4xl`} dangerouslySetInnerHTML={{ __html: title || '' }}></h2>
        <h3 className={`${background ? 'text-white' : 'text-darkBlueCp'} text-base font-semibold  max-w-[762px] text-justify tracking-[custom]`}>{subtitle}</h3>
        <div className="grid grid-cols-1 gap-6 flex-wrap md:grid-cols-2 lg:grid-cols-4 ">
          {box && box.map((box, index) => (
            <div key={index} className={`${background ? 'bg-custom-gradient border border-solid border-[#334E8C]' : 'bg-white'} custom-box-shadow p-8 rounded`}>
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
