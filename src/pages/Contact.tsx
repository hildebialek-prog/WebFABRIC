import { useState, useCallback } from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Clock3,
  ArrowRight,
  SatelliteDish,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInvalidField = useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.currentTarget.setCustomValidity("Please fill out this field.");
    },
    []
  );

  const handleInputField = useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.currentTarget.setCustomValidity("");
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
        <div className="relative">
          {/* Hero */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                <div className="space-y-6">
                  <SatelliteDish className="w-10 h-10 text-primary" />
                  <p className="uppercase tracking-[0.6em] text-xs text-muted-foreground">
                    Studio Hotline
                  </p>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                      Speak with the Capsule Desk.
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fashion stylists, technology architects, and compliance
                    liaisons respond within 24 hours. Tell us your capsule
                    needs—we orchestrate fittings, demos, and verification
                    briefings globally.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Concierge Availability",
                        value: "24 / 7",
                        icon: Clock3,
                      },
                      {
                        label: "Avg Response Time",
                        value: "6h",
                        icon: Mail,
                      },
                    ].map(({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 flex items-center gap-3"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                            {label}
                          </p>
                          <p className="text-lg font-semibold mt-1">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[32px] border border-primary/20 bg-background/80 backdrop-blur-xl p-8 space-y-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-10 h-10 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Registered Office
                      </p>
                      <h2 className="text-2xl font-semibold mt-2">
                        China Hong Kong Tower, Wan Chai
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai,
                    Hong Kong. Visits by appointment only—contact our concierge
                    to schedule fittings or verification briefings.
                  </p>
                  <div className="grid gap-4 text-sm">
                    {[
                      {
                        icon: Phone,
                        title: "Concierge Line",
                        value: "+44 7365 570 610",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        value: "info@zhejiangtextilecompanylimited.com",
                      },
                    ].map(({ icon: Icon, title, value }) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                            {title}
                          </p>
                          <p className="text-sm font-medium">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(15,23,42,0.4)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7384.021889533613!2d114.16597297602182!3d22.277575243717358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005d6fc23d75%3A0x4668b4958bb9caef!2sChina%20Hong%20Kong%20Tower!5e0!3m2!1svi!2sau!4v1763714150164!5m2!1svi!2sau"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="China Hong Kong Tower"
                />
              </div>
            </div>
          </section>

          {/* Contact Grid + Form */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h2 className="text-3xl font-black">
                    Talk to the Capsule Desk
                  </h2>
                  <p className="text-muted-foreground">
                    Choose the channel that fits your request—fashion fittings,
                    technology demos, or compliance verification. Our concierge
                    desk routes your message to the right studio.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: SatelliteDish,
                        title: "Fashion Studio",
                        detail:
                          "Private fittings, capsule curation, bespoke tailoring.",
                      },
                      {
                        icon: Phone,
                        title: "Technology Habitat",
                        detail:
                          "Hardware demos, firmware requests, logistics support.",
                      },
                      {
                        icon: Clock3,
                        title: "Compliance Beam",
                        detail:
                          "BR certificates, AML documentation, audit briefings.",
                      },
                    ].map(({ icon: Icon, title, detail }) => (
                      <div
                        key={title}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 flex items-start gap-4"
                      >
                        <Icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="text-lg font-semibold">{title}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-card backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
                  <h3 className="text-2xl font-semibold mb-6">
                    Send a Message
                  </h3>
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="contact-name">Name *</Label>
                        <Input
                          id="contact-name"
                          required
                          className="mt-2"
                          onInvalid={handleInvalidField}
                          onInput={handleInputField}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          required
                          className="mt-2"
                          onInvalid={handleInvalidField}
                          onInput={handleInputField}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-subject">Subject *</Label>
                        <Input
                          id="contact-subject"
                          required
                          className="mt-2"
                          onInvalid={handleInvalidField}
                          onInput={handleInputField}
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-message">Message *</Label>
                        <Textarea
                          id="contact-message"
                          required
                          className="mt-2"
                          rows={6}
                          placeholder="Tell us how we can help..."
                          onInvalid={handleInvalidField}
                          onInput={handleInputField}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll respond within 24
                        hours.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
