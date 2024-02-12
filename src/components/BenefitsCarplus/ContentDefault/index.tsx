import Link from "next/link";

type ContentDefaultProps = {
  title: string;
  description: string;
  cta?: string;
  ctaLink?: string;
};

export default function ContentDefault({ title, description, cta, ctaLink }: ContentDefaultProps) {
  return (
    <div className="custom-box-shadow min-h-fit h-full relative p-9 gap-6 flex flex-col">
      <h2 className="text-2xl text-darkBlueCp font-bold">{title}</h2>
      <h3 className="text-lg font-semibold text-gray">{description}</h3>
      {cta && (
        <Link className="mt-auto flex items-center justify-center text-base font-bold p-[17.5px] text-white bg-darkBlueCp custom-box-shadow rounded" href={ctaLink || '#'}>
            {cta}
        </Link>
      )}
    </div>
  );
}
