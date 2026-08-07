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
  CheckCircle
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
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
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
    <section id="contact" className="py-20 bg-muted/20 px-4 sm:px-8 md:px-16 relative">
      <div className="container mx-auto">
        {/* Header */}
        <Reveal variant="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/30 backdrop-blur-md">
            <MessageSquare className="w-4 h-4 text-primary" />
            <ShinyText text="Get In Touch" speed={3} className="text-sm font-medium text-primary" />
          </div>

          {/* Responsive Title */}
          <div className="mb-6">
            <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Let's Build Something
            </span>
            <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mt-2 min-h-[1.5em]">
              {typed}
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team of experts
            and let's discuss your next project.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Reveal variant="left" delay={0}>
              <Card className="cs-magnetic sheen hover:shadow-xl border-border/60 hover:border-primary/50 group transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5 text-foreground group-hover:text-primary transition-colors">Email Us</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-mono">celertustechnologies@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="left" delay={90}>
              <Card className="cs-magnetic sheen hover:shadow-xl border-border/60 hover:border-primary/50 group transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5 text-foreground group-hover:text-primary transition-colors">Call Us</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-mono">+91-8076036432</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="left" delay={180}>
              <Card className="cs-magnetic sheen hover:shadow-xl border-border/60 hover:border-primary/50 group transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-sm">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-0.5 text-foreground group-hover:text-primary transition-colors">Visit Us</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">123 Tech Street, Suite 100<br />New Delhi 110043</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal variant="right" className="lg:col-span-2 w-full">
            <Card className="border-border/60 shadow-2xl backdrop-blur-md">
              <CardHeader className="p-6 sm:p-8 border-b border-border/40">
                <CardTitle className="text-xl font-bold flex items-center gap-2.5 text-foreground">
                  <Send className="w-5 h-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="bg-card/60 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl py-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                        className="bg-card/60 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl py-3"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="bg-card/60 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl py-3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="bg-card/60 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl py-3"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="bg-card/60 border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl p-3"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full cs-magnetic sheen bg-primary hover:bg-primary/90 font-semibold py-4 shadow-tech text-white rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-2 text-muted-foreground text-xs pt-1">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    We typically respond within 24 hours
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