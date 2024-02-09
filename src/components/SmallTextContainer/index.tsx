type SmallTextContainerProps = {
  text: string,
  background: boolean,
}

export default function SmallTextContainer({text, background}: SmallTextContainerProps){
  return (
    <section className={`py-10 ${background ? 'bg-darkBlueCp text-white' : 'text-gray'}`}>
      <h2 className="max-w-[1440px] px-5 m-auto text-justify text-sm">{text}</h2>
    </section>
  )
}