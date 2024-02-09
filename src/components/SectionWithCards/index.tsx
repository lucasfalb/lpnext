type Item = {
  icon: string;
  title: string;
  description: string;
}

type SectionWithCardsProps = {
  title?: string;
  subtitle?: string;
  background?: boolean,
  items?: Array<Item>;
}
export default function SectionWithCards({ title, subtitle, items, background }: SectionWithCardsProps) {
  return (
    <section className={`${background ? 'bg-darkBlueCp' : ''}`}>
      <div className="py-14 max-w-[1440px] px-5 mx-auto flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-darkBlueCp max-w-[762px]">{title}</h2>
        <h3 className="text-base font-semibold text-darkBlueCp max-w-[762px] text-justify tracking-[custom]">{subtitle}</h3>
        <div className="grid grid-cols-1 gap-6 flex-wrap md:grid-cols-2 lg:grid-cols-4 ">
          {items && items.map((item, index) => (
            <div key={index} className="bg-white custom-box-shadow p-8 rounded">
              <div className="w-16 h-16 bg-darkBlueCp mb-6"></div>
              <h2 className="text-darkBlueCp text-lg font-bold">{item.title}</h2>
              <h3 className="text-base text-gray font-semibold mt-2">{item.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
