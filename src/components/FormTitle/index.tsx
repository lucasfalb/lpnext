interface FormTitleProps {
  text: string;
}

export default function FormTitle({ text }: FormTitleProps) {
  return (
    <h2 className="text-bluecp text-base font-medium text-[18px] col-span-full">{text}</h2>
  );
}
