type TableItemProps = {
  title: string,
  pt: number,
  isFirst?: boolean, 
  isLast?: boolean, 
}

export default function TableItem({ title, pt, isFirst = false, isLast = false }: TableItemProps) {
  return (
    <div className={`flex justify-between gap-4 items-center ${isLast ? 'pt-[30px]' : 'py-[24.5px]'} ${isFirst ? '' : 'border-[0] border-t border-solid border-[#334E8C]'}`}>
      <h2 className={`${isLast ? 'text-lg text-white' : 'text-base text-white'}  font-semibold`}>{title}</h2>
      <span className={`${isLast ? 'text-2xl' : 'text-lg'} font-bold  text-white`}>{pt}pt.</span>
    </div>
  )
}
