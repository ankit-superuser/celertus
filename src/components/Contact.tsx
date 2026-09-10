import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const typingWords = ["something people notice.", "a brand people remember.", "a product people keep."];

const contactDetails = [
  { Icon: Mail, label: "Email", value: "celertustechnologies@gmail.com", href: "mailto:celertustechnologies@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91-8076036432", href: "tel:+918076036432" },
  { Icon: MapPin, label: "Studio", value: "New Delhi 110043, India", href: null },
];

const inputClass =
  "bg-background border-border focus:border-primary rounded-xl text-sm py-3.5 transition-colors";
const labelClass = "text-sm text-muted-foreground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [typed, setTyped] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const word = typingWords[wordIndex];
    let i = 0;
    setTyped("");
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    interval = setInterval(() => {
      setTyped(word.substring(0, i + 1));
      i++;
      if (i >= word.length) {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setWordIndex((n) => (n + 1) % typingWords.length);
        }, 2600);
      }
    }, 55);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [wordIndex]);

  const SHEETY_API_URL = 'https://api.sheety.co/7c902e1a3a2e23b195242f624ed6ddc6/nuroviClients/sheet1';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SHEETY_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sheet1: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            submittedAt: new Date().toISOString()
          }
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      toast({
        title: "Thanks — we've got it.",
        description: "We'll get back to you within one business day.",
      });

      // Clear form
      setFormData({ name: "", phone: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "That didn't send",
        description: (error as Error).message || "Please try again, or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    /* The second dark contrast band on the page. */
    <div className="dark bg-background text-foreground">
      <section className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-8 md:px-12 relative overflow-hidden">
        <div className="cs-aurora" aria-hidden="true" />

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: pitch + direct contact details */}
            <div className="lg:col-span-5">
              <Reveal variant="up" className="w-full">
                <span className="text-sm text-muted-foreground">Get in touch</span>

                <h2 className="font-display text-foreground mt-3 mb-5">
                  Let&rsquo;s build{" "}
                  {/* Fixed min-height so the typing loop can never reflow the page. */}
                  <span className="text-gradient-animated inline-block min-h-[1.2em] align-top">
                    {typed}
                    <span className="sr-only">{typingWords[wordIndex]}</span>
                  </span>
                </h2>

                <p className="text-base text-muted-foreground mb-9">
                  Tell us what you&rsquo;re trying to grow. Whether that&rsquo;s traffic,
                  a launch, or a platform that keeps falling over — start with the
                  problem and we&rsquo;ll tell you what we&rsquo;d do about it.
                </p>

                <div className="space-y-3">
                  {contactDetails.map(({ Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="border border-border bg-card p-5 rounded-2xl flex items-center gap-4 hover:border-primary/40 transition-colors"
                    >
                      <span className="p-2.5 bg-secondary rounded-xl text-primary shrink-0">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-foreground hover:text-primary transition-colors block truncate"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground truncate">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>We reply within one business day.</span>
                </div>
              </Reveal>
            </div>

            {/* Right: the form */}
            <Reveal variant="up" delay={100} className="lg:col-span-7 w-full">
              <div className="border border-border bg-card rounded-3xl p-6 sm:p-8 shadow-soft-lg">
                <h3 className="font-display text-xl text-foreground mb-6 pb-5 border-b border-border">
                  Tell us about your project
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={labelClass}>Your name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={labelClass}>Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={labelClass}>Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className={labelClass}>Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Co."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className={labelClass}>
                      What are you trying to do? *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="A rough idea of the goal, the timeline, and anything you've already tried."
                      className={`${inputClass} p-3.5`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full cs-magnetic rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-sm shadow-soft"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin mr-2" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send message
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs pt-1">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>Your details stay private. Happy to sign an NDA.</span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
