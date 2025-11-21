import {
  ShieldCheck,
  Scale,
  FileCheck2,
  ArrowRight,
  Lock,
  Globe,
  Landmark,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const legalSummary = [
  { label: "Company", value: "ZHEJIANG FABRIC COMPANY LIMITED" },
  { label: "BR Certificate", value: "77224617-000-10-24-2" },
  {
    label: "Registered Address",
    value: "8/F., China Hong Kong Tower, Wan Chai",
  },
  { label: "Validity", value: "24 Oct 2024 – 23 Oct 2025" },
];

const termsSections = [
  {
    title: "1. General Terms",
    body: 'ZHEJIANG FABRIC COMPANY LIMITED ("we", "us", "our") operates the Editorial Horizon platform. These terms apply to all visitors, users, and customers.',
  },
  {
    title: "2. Product Information & Pricing",
    body: "We strive for precise imagery, specifications, and pricing. Errors may be corrected without notice. Unless stated otherwise, prices are listed in USD.",
  },
  {
    title: "3. Orders & Payment",
    body: "Submitting an order constitutes an offer to purchase. We may accept or decline. Orders are processed after receipt of cleared payment.",
  },
  {
    title: "4. Shipping & Delivery",
    body: "Delivery windows vary by destination, courier, and capsule availability. Risk transfers to you once goods are delivered to the shipping address.",
  },
  {
    title: "5. Returns & Refunds",
    body: "Capsules can be returned within 30 days of delivery, provided they remain unused and in original packaging per our Returns Policy.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content (text, imagery, logos, styling) belongs to us or partners and may not be used without written permission.",
  },
  {
    title: "7. Limitation of Liability",
    body: "To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from use of the site or products.",
  },
  {
    title: "8. Governing Law",
    body: "These terms are governed by the laws of Hong Kong. Disputes will be resolved exclusively in the courts of Hong Kong.",
  },
];

const contactChips = [
  {
    label: "Compliance Desk",
    value: "info@zhejiangtextilecompanylimited.com",
    icon: ShieldCheck,
  },
  {
    label: "Registry Authority",
    value: "Companies Registry, Hong Kong",
    icon: Landmark,
  },
  {
    label: "Jurisdiction",
    value: "Hong Kong S.A.R.",
    icon: Globe,
  },
];

const Terms = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40" />
        <div className="relative">
          {/* Hero */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs uppercase tracking-[0.5em]">
                  <Lock className="w-4 h-4" />
                  Legal
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                    Terms & Conditions
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  These terms govern how you interact with Editorial Horizon—our
                  couture + technology platform. By accessing our site, you
                  agree to the conditions below.
                </p>
              </div>
            </div>
          </section>

          {/* Legal summary card */}
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] border border-primary/20 bg-background/80 backdrop-blur-xl p-8 space-y-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Registered Entity
                    </p>
                    <p className="text-2xl font-semibold">
                      ZHEJIANG FABRIC COMPANY LIMITED
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  {legalSummary.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium mt-2 text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Terms Sections */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="grid gap-8">
                {termsSections.map((section) => (
                  <div
                    key={section.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-primary/30 transition"
                  >
                    <h2 className="text-xl font-semibold text-primary mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="pb-24">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] border border-primary/15 bg-gradient-to-r from-primary/10 via-background to-accent/10 backdrop-blur-xl p-8 space-y-6">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Questions
                    </p>
                    <h3 className="text-2xl font-black">
                      Get in touch with our compliance desk
                    </h3>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to="/contact">
                      Contact Desk
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {contactChips.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                          {label}
                        </p>
                        <p className="text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
