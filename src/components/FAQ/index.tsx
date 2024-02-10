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
    <Container className="my-14">
      <h2 className="text-4xl h-fit font-bold text-darkBlueCp max-w-[762px] sticky top-4">{title}</h2>
      <div className="flex flex-col gap-6">
        {questions && questions.map((question, index) => (
          <Accordion title={question.question}>
            {question.answer}
          </Accordion>
        ))}
      </div>
    </Container>
  )
}