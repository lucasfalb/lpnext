import Image from "next/image";

import Container from "@/components/Container";
import Link from "next/link";
import FullForm from "@/components//FullForm";

type HeroSectionFullFormProps = {
  title?: string,
  subtitle?: string,
  highlight_image?: string,
}

export default function HeroSectionFullForm({title,subtitle,highlight_image}:HeroSectionFullFormProps) {
  return (
    <Container className="my-7 md:my-14">
      <article>
        <h1 className="font-bold text-[40px] leading-[52px] text-left text-darkBlueCp" dangerouslySetInnerHTML={{ __html: title || '' }}></h1>
        <h2 className="font-medium text-[18px] mt-4 leading-[27px] text-left text-darkBlueCp">{subtitle || ''}</h2>
        <Image className="w-full object-contain max-h-[356px]" src={highlight_image || ''} alt="Carplus - Promoção Continente" width={884} height={350} />
        <div className="flex-col flex gap-4 items-center md:flex-row">
          <Link href="#">
            <Image src="/trust-pilot.png" alt="Carplus - TrustPilot" width={309} height={111} />
          </Link>
          <Link href="#">
            <Image src="/gaia.png" alt="Carplus - TrustPilot" width={309} height={111} />
          </Link>
          <Link href="#">
            <Image src="/sintra.png" alt="Carplus - TrustPilot" width={309} height={111} />
          </Link>
        </div>
      </article>
      <FullForm />
    </Container>
  )
}