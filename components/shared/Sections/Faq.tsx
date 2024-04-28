import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Quel est l&apos;âge minimum requis pour participer ?
        </AccordionTrigger>
        <AccordionContent>
          L&apos;âge minimum requis pour participer est de 18 ans. Les mineurs
          de moins de 18 ans doivent être accompagnés d&apos;un adulte.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Pouvons-nous annuler ou reporter notre réservation ?
        </AccordionTrigger>
        <AccordionContent>
          Oui, vous pouvez annuler ou reporter votre réservation jusqu&apos;à 24
          heures avant la date de votre réservation. Veuillez nous contacter
          pour plus d&apos;informations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Est-ce que l&apos;escape game est adapté aux personnes à mobilité
          réduite ?
        </AccordionTrigger>
        <AccordionContent>
          Oui, notre escape game est accessible aux personnes à mobilité
          réduite. Veuillez nous contacter pour plus d&apos;informations et pour
          organiser votre visite.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Quelles sont les mesures de sécurité en place ?
        </AccordionTrigger>
        <AccordionContent>
          Nous avons mis en place des mesures de sécurité strictes pour garantir
          la sécurité de nos clients et de notre personnel. Cela comprend le
          port du masque, la désinfection régulière des locaux et le respect de
          la distanciation sociale.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
