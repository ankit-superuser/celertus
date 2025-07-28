import { useState } from "react";
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
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium text-primary-glow">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Build Something{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team of experts 
            and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="bg-card/10 backdrop-blur-sm border-white/20 text-white animate-slide-in-left">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-white/80">hello@yourcompany.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur-sm border-white/20 text-white animate-slide-in-left delay-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur-sm border-white/20 text-white animate-slide-in-left delay-400">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-white/80">123 Tech Street, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur-sm border-white/20 text-white animate-slide-in-left delay-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-white/80">Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 4PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/10 backdrop-blur-sm border-white/20 animate-fade-in delay-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary-glow" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary-glow"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary-glow"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-white">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary-glow"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary-glow resize-none"
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="hero"
                    size="lg"
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    We typically respond within 24 hours
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;