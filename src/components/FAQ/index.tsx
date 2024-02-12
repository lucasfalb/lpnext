import Accordion from "@/components/Acordeon"
import Container from "@/components/Container"

type Question = {
  question: string;
  answer: string;
}

type FAQProps = {
  title?: string,
  questions?: Array<Question>,
}

export default function FAQ({ title, questions }: FAQProps) {
  return (
    <Container className="my-7 md:my-14 gap-4 md:gap-6">
      <h2 className="text-2xl h-fit font-bold text-darkBlueCp max-w-[762px] md:text-4xl">{title}</h2>
      <div className="flex flex-col gap-3 md:gap-6">
        {questions && questions.map((question, index) => (
          <Accordion key={index} title={question.question}>
            {question.answer}
          </Accordion>
        ))}
      </div>
    </Container>
  )
}