import Container from "@/components/Container"
import ButtonLarge from "../ButtonLarge"
import Link from "next/link"

type SectionWithCTAProps = {
  title?: string,
  description?: string,
  ctaText?: string,
  ctaLink?: string
}

export default function SectionWithCTA({ title, description, ctaText, ctaLink }: SectionWithCTAProps) {
  return (
    <Container>
      <h2 className="text-2xl font-bold text-darkBlueCp">{title || ''}</h2>
      <div>
        <h3 className="text-lg font-semibold text-darkBlueCp">{description || ''}</h3>
        <Link className="mt-10 flex items-center justify-center text-base font-bold p-[17.5px] text-white bg-darkBlueCp custom-box-shadow rounded" href={ctaLink || '#'}>
          {ctaText || ''}
        </Link>
      </div>
    </Container>
  )
}