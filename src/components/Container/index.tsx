type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="max-w-[1440px] w-full m-auto grid gap-12 px-5 grid-cols-1 lg:grid-cols-2">
      {children}
    </section>
  )
}
