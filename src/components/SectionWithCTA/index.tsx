import Container from "@/components/Container"
import ButtonLarge from "../FormMultistep/ButtonLarge"
import Link from "next/link"

type SectionWithCTAProps = {
  title?: string,
  description?: string,
  ctaText?: string,
  ctaLink?: string
}

export default function SectionWithCTA({ title, description, ctaText, ctaLink }: SectionWithCTAProps) {
  return (
    <Container className="gap-4 md:gap-6">
      <h2 className="text-2xl font-bold text-darkBlueCp">{title || ''}</h2>
      <div>
        <h3 className="text-lg font-semibold text-darkBlueCp">{description || ''}</h3>
        <Link className="mt-5  flex items-center justify-center text-base font-bold p-[17.5px] text-white bg-darkBlueCp custom-box-shadow rounded md:mt-10" href={ctaLink || '#'}>
          {ctaText || ''}
        </Link>
      </div>
    </Container>
  )
}