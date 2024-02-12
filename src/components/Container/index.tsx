type ContainerProps = {
  children: React.ReactNode
  className?: string,
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <section className={`px-5 ${className ? className : ''} max-w-[1920px] relative w-full m-auto grid gap-12  grid-cols-1 lg:grid-cols-2`}>
      {children}
    </section>
  )
}
