import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  Clock
} from "lucide-react";
import ShinyText from "./ShinyText";
import Reveal from "@/components/Reveal";

const typingText = "Amazing Together...";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: '',
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    setTyped("");
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    const startTyping = () => {
      i = 0;
      setTyped("");
      interval = setInterval(() => {
        setTyped(typingText.substring(0, i + 1));
        i++;
        if (i >= typingText.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            startTyping();
          }, 3000);
        }
      }, 80);
    };
    startTyping();
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

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
        title: "Discovery Request Submitted!",
        description: "Our technical architects will contact you within 24 hours.",
      });

      // Clear form
      setFormData({ name: "", phone: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: (error as Error).message || "Please try again later.",
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
    <section id="contact" className="w-full py-16 sm:py-20 lg:py-24 bg-background px-4 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Split-Screen Header & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Split: Details & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col items-start text-left font-mono">
            <Reveal variant="up" className="w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 backdrop-blur-xl text-xs text-primary uppercase tracking-wider mb-4 rounded-full shadow-lg shadow-primary/10">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>[04 // INITIATE DISCOVERY]</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-wide text-foreground mb-4 leading-tight">
                LET'S BUILD <br />
                <span className="text-gradient-animated inline-block min-h-[1.25em]">{typed}</span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-[1.7] max-w-[70ch] mb-8">
                Ready to accelerate your engineering roadmap? Share your system specifications or project objectives with our team.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 w-full">
                <div className="border border-white/10 hover:border-primary/50 bg-card/60 backdrop-blur-xl p-5 rounded-2xl shadow-xl transition-all flex items-center gap-4">
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl text-primary shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">Email Us</h3>
                    <p className="text-muted-foreground text-xs font-mono mt-0.5 truncate">celertustechnologies@gmail.com</p>
                  </div>
                </div>

                <div className="border border-white/10 hover:border-primary/50 bg-card/60 backdrop-blur-xl p-5 rounded-2xl shadow-xl transition-all flex items-center gap-4">
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl text-primary shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">Direct Line</h3>
                    <p className="text-muted-foreground text-xs font-mono mt-0.5">+91-8076036432</p>
                  </div>
                </div>

                <div className="border border-white/10 hover:border-primary/50 bg-card/60 backdrop-blur-xl p-5 rounded-2xl shadow-xl transition-all flex items-center gap-4">
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl text-primary shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-sm text-foreground uppercase tracking-wider">Headquarters</h3>
                    <p className="text-muted-foreground text-xs font-mono mt-0.5">New Delhi 110043, India</p>
                  </div>
                </div>
              </div>

              {/* Response Guarantee Pill */}
              <div className="mt-6 p-4 border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl rounded-2xl flex items-center gap-3 text-xs text-foreground">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>SLA Guarantee:</strong> Technical response within 24 business hours.</span>
              </div>
            </Reveal>
          </div>

          {/* Right Split: High-Contrast Glass Form */}
          <Reveal variant="up" delay={100} className="lg:col-span-7 w-full font-mono">
            <Card className="border border-white/10 bg-card/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8">
              <CardHeader className="p-0 mb-6 pb-4 border-b border-white/10">
                <CardTitle className="font-display text-xl font-bold uppercase tracking-wider flex items-center gap-2.5 text-foreground">
                  <Send className="w-5 h-5 text-primary" />
                  SUBMIT SPECIFICATIONS
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background/60 border border-white/10 focus:border-primary rounded-xl font-mono text-xs py-3.5 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="bg-background/60 border border-white/10 focus:border-primary rounded-xl font-mono text-xs py-3.5 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="bg-background/60 border border-white/10 focus:border-primary rounded-xl font-mono text-xs py-3.5 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company / Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise Inc."
                        className="bg-background/60 border border-white/10 focus:border-primary rounded-xl font-mono text-xs py-3.5 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Project Specification &amp; Timeline *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Outline your project scope, target tech stack, timeline, or engineering team requirements..."
                      className="bg-background/60 border border-white/10 focus:border-primary rounded-xl font-mono text-xs p-3.5 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full cs-magnetic font-mono text-xs uppercase tracking-wider rounded-full bg-primary hover:bg-primary/90 text-white font-bold py-6 border border-primary shadow-2xl shadow-primary/25 hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        SUBMITTING REQUEST...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        INITIATE PROJECT DISCOVERY
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-[11px] pt-1">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Non-disclosure agreement &amp; data privacy protected</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;