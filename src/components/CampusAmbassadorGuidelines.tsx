import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const termsAndConditions = [
  "By registering for any event under RUSH, the participant confirms that the information provided is accurate to the best of their knowledge. Registration does not guarantee participation and is subject to confirmation by the RUSH organizing team.",
  "Campus Ambassadors attending RUSH on campus must also register through the official participant registration form.",
  "Participants must carry valid identification and comply with all campus rules, security protocols, and instructions issued by the organizing team, volunteers, or campus authorities during the event.",
  "Participants are expected to maintain discipline, decorum, and respectful behaviour on campus. Consumption, possession, or distribution of alcohol, drugs, or any prohibited substances is strictly prohibited during RUSH events. Any violation may result in immediate removal from the event and campus premises.",
  "The RUSH organizing team reserves the right to modify event schedules, formats, rules, venues, or participation criteria as required. All decisions related to event conduct, participation, judging, and results shall be final and binding.",
  "Any form of misconduct, indiscipline, misrepresentation, or violation of event or campus rules may lead to disqualification and forfeiture of prizes or certificates, if applicable.",
  "Prizes, certificates, or recognitions (if applicable) will be awarded based on predefined criteria and are subject to verification by the organizing team.",
  "Participants grant permission to the organizers to use photographs or videos captured during RUSH events for official promotional and archival purposes.",
  "Personal information collected during registration will be used solely for event coordination and official communication and will not be shared with third parties.",
  "Any disputes arising from participation in RUSH events shall be subject to the jurisdiction of the organizing institute.",
  "By registering for the event, the participant confirms that they have read, understood, and agreed to these Terms & Conditions."
];

const CampusAmbassadorGuidelines = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            Campus Ambassador Guidelines
          </h2>
          
          {/* Content box */}
          <div className="relative p-8 md:p-12 rounded-lg bg-gradient-to-br from-secondary/20 via-background to-primary/20 border border-primary/20">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Registration for RUSH implies acceptance of event rules, campus regulations, organizer decisions, media usage & confirmation of accurate information provided by participants.
            </p>

            {/* Terms and Conditions Accordion */}
            <Accordion type="single" collapsible className="w-full text-left">
              <AccordionItem value="terms" className="border-primary/20">
                <AccordionTrigger className="text-foreground font-pixel text-xl md:text-2xl hover:text-primary hover:no-underline py-4">
                  Terms and Conditions
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ol className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                    {termsAndConditions.map((term, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{term}</span>
                      </li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CampusAmbassadorGuidelines };
