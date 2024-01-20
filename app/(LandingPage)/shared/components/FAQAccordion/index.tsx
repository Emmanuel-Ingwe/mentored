import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';
import { faqs } from '../../contents';

export const FAQAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className=" mx-auto py-16 lg:w-[48rem]"
    >
      {faqs.map((faq, index) => {
        return (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
