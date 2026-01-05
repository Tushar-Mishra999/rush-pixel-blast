import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingPixels } from "@/components/PixelBlock";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "What is Rush 11.0?",
  answer: "Rush 11.0 is the annual flagship cultural and management fest of IIM Ranchi, bringing together students from colleges across India for competitions, workshops, performances, and unforgettable experiences."
}, {
  question: "Who can participate in Rush 11.0?",
  answer: "Rush 11.0 is open to undergraduate and postgraduate students from all recognized colleges and universities across India."
}, {
  question: "How do I register for events?",
  answer: "You can register through the official Rush 11.0 website by visiting the Events section and completing the online registration form for your chosen event."
}, {
  question: "Is there any registration fee?",
  answer: "Some events may have a registration fee, while others are free. Detailed information is available on the respective event pages."
}, {
  question: "Will accommodation be provided?",
  answer: "Yes, limited accommodation will be provided for outstation participants, subject to prior registration and availability."
}, {
  question: "Where will Rush 11.0 be held?",
  answer: "Rush 11.0 will be hosted at the IIM Ranchi campus and selected venues in Ranchi. Exact details will be shared with registered participants."
}, {
  question: "Are certificates provided?",
  answer: "Yes, all participants will receive e-certificates, and winners will receive merit certificates and prizes."
}, {
  question: "How can I contact the organizing team?",
  answer: "You can reach out to us through the Contact Us section on the website or via our official social media handles."
}];
const pastArtists = [{
  name: "Artist 1",
  year: "2024",
  type: "Bollywood"
}, {
  name: "Artist 2",
  year: "2023",
  type: "EDM"
}, {
  name: "Artist 3",
  year: "2022",
  type: "Indie"
}, {
  name: "Artist 4",
  year: "2019",
  type: "Rapper"
}];
const milestones = [{
  year: "2015",
  event: "RUSH debuts as IIM Ranchi's sports and cultural festival"
}, {
  year: "2015",
  event: "Introduction of AGON, the management fest of IIM Ranchi"
}, {
  year: "2021",
  event: "AGON and RUSH converge for the virtual version of the festival"
}, {
  year: "2022",
  event: "Inaugural Rush-a-thon launched, integrating sport with social impact"
}, {
  year: "2025",
  event: "RUSH: The Soul Carnival marks ten years of celebration"
}, {
  year: "2026",
  event: "RUSH 1(1), a fresh beginning marking the 11th edition of RUSH"
}];
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-card overflow-hidden scanlines">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <FloatingPixels />
          
          <div className="container relative z-10 px-4 text-center">
            <h1 className="font-heading text-3xl text-primary drop-shadow-[0_0_10px_hsl(var(--primary))] mb-6 md:text-3xl">
              ABOUT RUSH
            </h1>
            <p className="font-subheading text-lg text-muted-foreground max-w-3xl mx-auto font-bold">
              A stage for ambition, energy and youth shaping what lies ahead
            </p>
          </div>
        </section>

        {/* About IIM Ranchi */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-8 text-center font-bold">
                About IIM Ranchi
              </h2>
              
              <div className="border-2 border-primary p-8 shadow-pixel">
                <p className="font-subheading text-muted-foreground leading-relaxed mb-6">
                  The Indian Institute of Management Ranchi is a leading management institute that believes excellence is built not only in classrooms, but through holistic development beyond them. Established in 2009, IIM Ranchi has steadily emerged as a centre for nurturing talent, creativity and leadership, offering students a vibrant ecosystem where academics and extra-curricular pursuits go hand in hand.
                </p>
                <p className="font-subheading text-muted-foreground leading-relaxed">
                  Operating from its state-of-the-art campus at Prabandhan Nagar, Nayasarai, Ranchi, the institute provides a dynamic platform for students to explore interests across cultural, sports, literary and leadership domains. Guided by its Vision, Mission and Core Values, IIM Ranchi follows a progressive approach to education that encourages experimentation, collaboration and creative expression. This balanced focus empowers students to innovate, lead with confidence and make meaningful contributions in an ever-evolving world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What is RUSH */}
        <section className="py-20 bg-card">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-4 text-center font-bold">
                RUSH: An Experience Like No Other
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-primary p-6 shadow-pixel transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-glow-primary hover:border-primary">
                  <h3 className="font-heading text-sm text-primary mb-4 uppercase tracking-wider">What Is Rush?</h3>
                  <p className="font-subheading text-muted-foreground leading-relaxed">
                    RUSH is the flagship annual cultural festival of IIM Ranchi, uniting talented students from leading B-schools nationwide. It is a platform where competition meets celebration, strategy meets creativity and ideas find expression beyond the classroom.
                  </p>
                </div>
                
                <div className="border-2 border-secondary p-6 shadow-pixel-secondary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-glow-secondary hover:border-secondary">
                  <h3 className="font-heading text-sm text-secondary mb-4 uppercase tracking-wider">What Awaits You?</h3>
                  <p className="font-subheading text-muted-foreground leading-relaxed">
                    Three days of non-stop action featuring sports tournaments, cultural performances, management competitions, and star-studded nights. RUSH is where future leaders come to compete, celebrate and shine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container px-4">
            <h2 className="font-heading text-lg md:text-2xl text-foreground mb-8 md:mb-12 text-center">
              <span className="text-accent">[</span> THE JOURNEY <span className="text-accent">]</span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Center vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />
              
              {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return <div key={milestone.year} className="relative flex items-center mb-6 md:mb-12 last:mb-0">
                    {/* Dot on the line - always centered */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-accent border-2 border-background z-10" />
                    
                    {/* Mobile layout: year on left, line, description on right */}
                    <div className="md:hidden flex w-full items-start">
                      {/* Year box */}
                      <div className="w-12 h-12 border-2 border-accent flex items-center justify-center bg-accent/10 shrink-0">
                        <span className="font-heading text-[10px] text-accent">{milestone.year}</span>
                      </div>
                      {/* Connecting line */}
                      <div className="h-0.5 w-4 bg-accent self-center shrink-0" />
                      {/* Description box - extends to right */}
                      <div className="flex-1 border-2 border-accent p-2 bg-card">
                        <p className="text-foreground text-sm leading-tight">{milestone.event}</p>
                      </div>
                    </div>
                    
                    {/* Desktop layout: alternating sides */}
                    <div className={`hidden md:flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-[45%] border-2 border-accent p-6 bg-card transition-all duration-300 hover:scale-105 hover:shadow-glow-primary ${isLeft ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'flex-row-reverse' : ''}`}>
                          <div className="w-14 h-14 border-2 border-accent flex items-center justify-center bg-accent/10 shrink-0">
                            <span className="font-heading text-xs text-accent">{milestone.year}</span>
                          </div>
                          <div className={`h-0.5 flex-1 bg-gradient-to-r ${isLeft ? 'from-transparent to-accent' : 'from-accent to-transparent'}`} />
                        </div>
                        <p className="text-foreground text-base">{milestone.event}</p>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-4 text-center">
                <span className="text-primary">FAQs</span> – Rush 11.0
              </h2>
              <p className="font-subheading text-muted-foreground text-center mb-10">
                Got questions? We've got answers!
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-2 border-primary/50 bg-card px-6 shadow-pixel hover:border-primary transition-all duration-300">
                    <AccordionTrigger className="font-subheading text-left text-foreground hover:text-primary hover:no-underline py-5">
                      <span className="flex items-center gap-3">
                        <span className="text-primary font-heading text-xs">Q{index + 1}</span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="font-subheading text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;