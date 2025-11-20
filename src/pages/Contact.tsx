import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our products or services? We're here to help. 
                Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Registered Office</h3>
                    <p className="text-muted-foreground">
                      8/F., China Hong Kong Tower<br />
                      8–12 Hennessy Road<br />
                      Wan Chai, Hong Kong
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@zjfabric-global.com</p>
                    <p className="text-xs text-muted-foreground mt-1">[Contact placeholder]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+852 0000 0000</p>
                    <p className="text-xs text-muted-foreground mt-1">[Contact placeholder]</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9826294937!2d114.16866!3d22.277349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE2JzM4LjUiTiAxMTTCsDEwJzA3LjIiRQ!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input id="contact-name" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input id="contact-email" type="email" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input id="contact-subject" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      className="mt-2"
                      rows={6}
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Honeypot for spam prevention */}
                  <input type="text" name="honeypot" className="hidden" tabIndex={-1} />

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="bg-card p-8 rounded-lg border-2 border-primary text-center animate-slide-up">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
