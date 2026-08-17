import { useState } from "react";
import { ContactFormDialog } from "@/components/contact/ContactFormDialog";
import { ContactWegCard } from "@/components/contact/ContactWegCard";
import { CONTACT_PAGE, type ContactCard } from "@/content/contact";

export function ContactPage() {
  const { lead, cards } = CONTACT_PAGE;
  const [activeCard, setActiveCard] = useState<ContactCard | null>(null);

  return (
    <section
      className="bg-pm-light-container py-12 md:py-16 lg:py-20"
      aria-label="Kontakt"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-pm-light-headline sm:text-5xl">
            Wir sind nur eine{" "}
            <em className="font-display-serif font-normal italic">Nachricht</em>{" "}
            entfernt
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pm-light-text-1 md:mt-6 md:text-xl">
            {lead}
          </p>
        </div>

        <section
          aria-labelledby="kontakt-wege-heading"
          className="mt-10 md:mt-14"
        >
          <h2 id="kontakt-wege-heading" className="sr-only">
            Kontakt nach Anliegen
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {cards.map((card) => (
              <ContactWegCard
                key={card.id}
                card={card}
                onOpen={() => setActiveCard(card)}
              />
            ))}
          </div>
        </section>
      </div>

      {activeCard ? (
        <ContactFormDialog
          card={activeCard}
          onClose={() => setActiveCard(null)}
        />
      ) : null}
    </section>
  );
}
