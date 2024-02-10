type ContainerProps = {
  children: React.ReactNode
  className?: string,
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <section className={`max-w-[1440px] relative w-full m-auto grid gap-12 px-5 grid-cols-1 lg:grid-cols-2 ${className ? className : ''}`}>
      {children}
    </section>
  )
}
