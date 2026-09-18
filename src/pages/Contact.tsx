import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, MapPin, Send } from "lucide-react";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SHEETY_API_URL = "https://api.sheety.co/7c902e1a3a2e23b195242f624ed6ddc6/nuroviClients/sheet1";

type Need = "Marketing" | "Technology" | "Both" | "Not sure yet";
const NEEDS: Need[] = ["Marketing", "Technology", "Both", "Not sure yet"];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do you price work?",
    a: "Project-based for builds and brand work, monthly for marketing and maintenance. You get a written scope with both halves on one timeline before anything starts, and we do not bill hours you cannot see.",
  },
  {
    q: "What is the smallest engagement you take?",
    a: "A single service — a performance audit, an ad account rebuild, one landing page. We would rather start small and earn the rest than sell a bundle you do not need yet.",
  },
  {
    q: "How quickly can you start?",
    a: "Discovery usually happens within the week. We can typically begin a marketing engagement or assign an engineering team within three to five business days.",
  },
  {
    q: "Do we have to take both halves?",
    a: "No. Plenty of clients take only marketing or only engineering. The point is that the other half exists when you need it, not that you have to buy it.",
  },
];

const DOMAIN = "https://celertus.germanysoon.com";

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${DOMAIN}/contact` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", company: "", message: "" });
  const [need, setNeed] = useState<Need | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalMessage = need ? `Need: ${need}\n\n${formData.message}` : formData.message;

    try {
      const response = await fetch(SHEETY_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheet1: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            company: formData.company,
            message: finalMessage,
            submittedAt: new Date().toISOString(),
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      toast({
        title: "Message sent",
        description: "We will reply within one business day.",
      });

      setFormData({ name: "", phone: "", email: "", company: "", message: "" });
      setNeed(null);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: (error as Error).message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout theme="dark">
      <SEO
        title="Contact Celertus.ai | Start a Project"
        description="Start a conversation with Celertus.ai — one reply from a human within one business day."
        keywords="contact Celertus.ai, start a project, New Delhi marketing agency, technology studio contact"
        canonicalUrl="/contact"
        schema={contactSchema}
      />

      {/* Hero + form */}
      <section className="px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-[1240px]">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[.12em] text-studio-mutedDark">
            <Link to="/" className="hover:text-studio-cloud">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-studio-cloud">Contact</span>
          </nav>
          <h1 className="mb-5 max-w-[22ch] text-[clamp(2.4rem,6vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.035em] text-studio-cloud">
            Tell us what you are trying to grow.
          </h1>
          <p className="mb-12 max-w-[62ch] text-[17.5px] leading-[1.65] text-studio-mutedDark">
            One reply from a human within one business day. We will tell you honestly whether it is a marketing problem, a product problem, or both — before anyone talks about scope.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
            {/* Form */}
            <Reveal variant="up" className="lg:col-span-3">
              <Card className="rounded-3xl border border-white/10 bg-studio-inkAlt p-6 sm:p-8">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[.1em] text-studio-mutedDark">What do you need?</div>
                <div className="mb-7 flex flex-wrap gap-2.5">
                  {NEEDS.map((n) => {
                    const on = need === n;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setNeed(on ? null : n)}
                        aria-pressed={on}
                        className="rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[.05em] transition-all"
                        style={
                          on
                            ? { background: "#5B5BF5", borderColor: "#5B5BF5", color: "#fff" }
                            : { background: "transparent", borderColor: "rgba(255,255,255,.16)", color: "#9AA4BC" }
                        }
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-studio-mutedDark">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                        className="rounded-xl border border-white/10 bg-background/60 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-studio-mutedDark">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="rounded-xl border border-white/10 bg-background/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider text-studio-mutedDark">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="rounded-xl border border-white/10 bg-background/60 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs font-medium uppercase tracking-wider text-studio-mutedDark">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Inc."
                        className="rounded-xl border border-white/10 bg-background/60 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-studio-mutedDark">What are you trying to grow? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about the campaign, the product, or both..."
                      className="rounded-xl border border-white/10 bg-background/60 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full rounded-full bg-studio-indigo py-6 font-semibold text-white shadow-lg shadow-studio-indigo/25 transition-all hover:bg-studio-indigoDark"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Send it <span aria-hidden="true" className="ml-1">&rarr;</span>
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </Reveal>

            {/* Contact channels */}
            <Reveal variant="up" delay={100} className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:celertustechnologies@gmail.com"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-studio-inkAlt p-5 transition-colors hover:border-studio-indigo/50"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-studio-indigo/15 text-studio-indigoLight">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-studio-cloud">celertustechnologies@gmail.com</h3>
                    <p className="mt-1 text-[13px] leading-[1.55] text-studio-mutedDark">Best for scope, documents and anything you want in writing.</p>
                  </div>
                </a>

                <a
                  href="tel:+918076036432"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-studio-inkAlt p-5 transition-colors hover:border-studio-teal/50"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-studio-teal/15 text-studio-teal">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-studio-cloud">+91-8076036432</h3>
                    <p className="mt-1 text-[13px] leading-[1.55] text-studio-mutedDark">Fastest route if something is live and broken.</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/celertus.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-studio-inkAlt p-5 transition-colors hover:border-studio-ember/50"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-studio-ember/15 text-studio-ember">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-studio-cloud">@celertus.tech</h3>
                    <p className="mt-1 text-[13px] leading-[1.55] text-studio-mutedDark">Work in progress, shipped things, and the occasional opinion.</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-5">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-white/10 text-studio-mutedDark">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-studio-cloud">New Delhi 110043, India</h3>
                    <p className="mt-1 text-[13px] leading-[1.55] text-studio-mutedDark">Working with clients remotely worldwide. Mon–Sat, with 24/7 support for live systems.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-studio-inkAlt px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[860px]">
          <h2 className="mb-9 text-[clamp(1.7rem,3.4vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-studio-cloud">Before you write</h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, fi) => {
              const open = openFaq === fi;
              return (
                <div key={f.q} className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[.03]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : fi)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-studio-cloud"
                  >
                    {f.q}
                    <span aria-hidden="true" className="font-mono text-lg text-studio-indigoLight">{open ? "−" : "+"}</span>
                  </button>
                  {open && <p className="max-w-[72ch] px-6 pb-6 text-[15px] leading-[1.7] text-studio-mutedDark">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
