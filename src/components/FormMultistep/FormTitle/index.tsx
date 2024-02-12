interface FormTitleProps {
  text: string;
}

export default function FormTitle({ text }: FormTitleProps) {
  return (
    <h2 className="text-darkBlueCp text-lg font-medium text-[18px] col-span-full">{text}</h2>
  );
}
