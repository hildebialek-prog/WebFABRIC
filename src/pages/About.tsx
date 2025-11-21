import {
  ArrowRight,
  BadgeCheck,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const heroHighlights = [
  { label: "Founded", detail: "2024 — Hong Kong" },
  { label: "Studios", detail: "3 Design Labs" },
  { label: "Global Reach", detail: "28 Markets" },
  { label: "Capsule Drops", detail: "120+ / Year" },
];

const complianceDetails = [
  { title: "Company Name", value: "ZHEJIANG FABRIC COMPANY LIMITED" },
  { title: "BR Certificate", value: "77224617-000-10-24-2" },
  {
    title: "Registered Address",
    value: "8/F., China Hong Kong Tower, 8–12 Hennessy Rd, Wan Chai",
  },
  { title: "Legal Form", value: "Body Corporate (CORP)" },
  { title: "Validity", value: "24 Oct 2024" },
];

const valuePillars = [
  {
    title: "Authenticity Capsule",
    description:
      "Every garment and device is authenticated through dual verification pipelines before it reaches our vault.",
    badge: "Proof-of-Origin",
    icon: Shield,
  },
  {
    title: "Innovation Fabric",
    description:
      "Material science labs meet neural-tech ateliers to prototype textures, firmware, and kinetic packaging.",
    badge: "Hybrid Labs",
    icon: Sparkles,
  },
  {
    title: "Customer Excellence",
    description:
      "Private stylists, concierge engineers, and white-glove delivery ensure every interaction feels bespoke.",
    badge: "24/7 Atelier Desk",
    icon: Users,
  },
];

const timeline = [
  {
    year: "2024",
    title: "Inception of the Capsule",
    description:
      "Menswear artisans and hardware engineers unite in Hong Kong to design dual-vertical collections.",
  },
  {
    year: "2025",
    title: "Compliance Beam",
    description:
      "Live audit dashboards and holographic certificates launch for banks and institutional partners.",
  },
  {
    year: "2026",
    title: "Immersive Studios",
    description:
      "XR fitting rooms and kinetic product sandboxes open in our Shanghai and Dubai experience labs.",
  },
];

const leadership = [
  {
    title: "Creative Capsule Director",
    quote:
      "“We stitch textiles and circuits into the same narrative—tailoring couture silhouettes with adaptive tech.”",
    focus: "Fashion Systems",
  },
  {
    title: "Technology Habitat Lead",
    quote:
      "“Hardware, firmware, concierge care—we orchestrate every signal so devices feel alive in your palm.”",
    focus: "Immersive Devices",
  },
];

const capabilityMetrics = [
  {
    label: "Design Studios",
    value: "3",
    detail: "Hong Kong / Shanghai / Dubai",
  },
  {
    label: "Trusted Partners",
    value: "60+",
    detail: "Global mills & OEM labs",
  },
  {
    label: "Avg Fulfilment",
    value: "48h",
    detail: "Priority concierge routes",
  },
  { label: "Verification Links", value: "100%", detail: "Each capsule" },
];

const About = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40" />
        <div className="relative">
          {/* Hero Section */}
          <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background/80" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.35),_transparent_55%)]" />
            <div className="container relative z-10 mx-auto px-4">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                <div className="space-y-6">
                  <BadgeCheck className="w-10 h-10 text-primary" />
                  <p className="uppercase tracking-[0.6em] text-xs text-muted-foreground">
                    About ZFC
                  </p>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                      Couture. Circuitry. Compliance.
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ZHEJIANG FABRIC COMPANY LIMITED is a Hong Kong-registered
                    capsule house fusing fashion ateliers with technology labs.
                    Every drop is authenticated, documented, and delivered
                    through kinetic experience suites.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {[
                      "Fashion Capsule",
                      "Technology Habitat",
                      "Compliance Beam",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-semibold"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg shadow-primary/10 hover:border-primary/40 transition-all"
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-2xl font-semibold mt-3">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Capsule */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="relative rounded-[36px] border border-primary/20 bg-background/80 backdrop-blur-2xl overflow-hidden shadow-[0_40px_120px_rgba(15,23,42,0.4)]">
                <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                <div className="relative z-10 grid lg:grid-cols-[0.7fr_1.3fr] gap-10 p-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-[0.35em]">
                      <Shield className="w-4 h-4" />
                      Official Registry
                    </div>
                    <h2 className="text-3xl font-black leading-tight">
                      Verified Hong Kong entity with holographic compliance
                      channels.
                    </h2>
                    <p className="text-muted-foreground">
                      Banks, partners, and family offices can pull live
                      documentation via our compliance portal with encrypted BR
                      references.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em]">
                      {["TrustBar", "Audit Portal", "Encrypted Docs"].map(
                        (token) => (
                          <span
                            key={token}
                            className="px-4 py-2 rounded-full border border-white/10 text-white/70 bg-white/5"
                          >
                            {token}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {complianceDetails.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                      >
                        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Pillars */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.5em] text-xs text-muted-foreground">
                  Value System
                </p>
                <h2 className="text-4xl font-black mt-4">
                  Pillars of the Capsule Company
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {valuePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="relative rounded-3xl border border-primary/10 bg-background/80 backdrop-blur-xl p-6 overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 text-xs uppercase tracking-[0.35em] text-primary/80">
                          <Icon className="w-4 h-4" />
                          {pillar.badge}
                        </div>
                        <h3 className="text-2xl font-semibold">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                  Heritage
                </p>
                <h2 className="text-4xl font-black">
                  Timeline of the Capsule Beam
                </h2>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-transparent to-accent" />
                <div className="space-y-10 ml-10">
                  {timeline.map((item) => (
                    <div
                      key={item.year}
                      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
                    >
                      <div className="absolute -left-10 top-6 w-6 h-6 rounded-full border-2 border-primary bg-background" />
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        {item.year}
                      </p>
                      <h3 className="text-2xl font-semibold mt-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Capability Metrics */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilityMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur p-6 text-center"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className="text-4xl font-black mt-3">{metric.value}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                  Leadership & Culture
                </p>
                <h2 className="text-4xl font-black">
                  Voices behind the Capsule
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {leadership.map((leader) => (
                  <div
                    key={leader.title}
                    className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background/80 backdrop-blur-xl p-8 space-y-4 shadow-lg shadow-primary/10"
                  >
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-primary">
                      <Star className="w-4 h-4" />
                      {leader.focus}
                    </div>
                    <h3 className="text-2xl font-semibold">{leader.title}</h3>
                    <p className="text-lg text-muted-foreground italic">
                      {leader.quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] border border-white/15 bg-gradient-to-r from-primary/20 via-background to-accent/20 backdrop-blur-xl p-10 text-center space-y-6">
                <p className="uppercase tracking-[0.5em] text-xs text-muted-foreground">
                  Next
                </p>
                <h2 className="text-4xl font-black">
                  Schedule a studio session or request compliance access.
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our concierge desk opens private showings, compliance
                  briefings, and bespoke capsule sourcing.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
                  >
                    Book a Session
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/compliance"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
                  >
                    View Compliance
                    <Shield className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
