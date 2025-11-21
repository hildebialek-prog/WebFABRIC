import {
  ShieldCheck,
  Plane,
  Package,
  Truck,
  Clock3,
  Globe,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const shippingTiers = [
  {
    title: "Standard Capsule",
    timing: "5–7 business days",
    rate: "Complimentary over $100, otherwise $9.99",
    note: "Ground couriers + insured packaging",
  },
  {
    title: "Express Capsule",
    timing: "2–3 business days",
    rate: "$19.99",
    note: "Priority handling + weekend dispatch",
  },
  {
    title: "Overnight Capsule",
    timing: "1 business day",
    rate: "$39.99",
    note: "Door-to-door concierge network",
  },
];

const regionTransit = [
  { region: "Asia-Pacific", window: "5–10 business days" },
  { region: "Europe", window: "7–14 business days" },
  { region: "Americas", window: "7–14 business days" },
  { region: "Middle East & Africa", window: "10–20 business days" },
];

const Shipping = () => {
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
                  <Plane className="w-4 h-4" />
                  Logistics
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                    Shipping & Delivery Protocol
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  Capsules are processed inside our Hong Kong logistics lab with
                  signature verification, weather-proof packaging, and live
                  tracking. Explore how your order moves through the Editorial
                  Horizon network.
                </p>
              </div>
            </div>
          </section>

          {/* Registry badge */}
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] border border-primary/20 bg-background/80 backdrop-blur-xl p-8 space-y-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Verified Entity
                      </p>
                      <h2 className="text-2xl font-semibold">
                        ZHEJIANG FABRIC COMPANY LIMITED
                      </h2>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    BR Certificate No. 77224617-000-10-24-2 • 8/F., China Hong
                    Kong Tower, Wan Chai
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Processing */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Package className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Processing Window</h3>
                </div>
                <p className="text-muted-foreground">
                  Orders are queued within 1–2 business days. During capsule
                  drops or peak seasons, processing may extend to 3–4 business
                  days. A confirmation email with tracking details arrives as
                  soon as the courier scans your parcel.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping tiers */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                  Delivery Capsules
                </p>
                <h2 className="text-3xl font-black mt-4">Services & Rates</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {shippingTiers.map((tier) => (
                  <div
                    key={tier.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col gap-4 hover:border-primary/40 transition"
                  >
                    <h3 className="text-xl font-semibold text-primary">
                      {tier.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      {tier.timing}
                    </p>
                    <p className="text-sm text-muted-foreground">{tier.rate}</p>
                    <p className="text-xs text-muted-foreground">{tier.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* International coverage */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/10 via-background to-accent/10 backdrop-blur-xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">International Sectors</h3>
                </div>
                <p className="text-muted-foreground">
                  Editorial Horizon ships globally. Transit estimates below
                  exclude customs clearance. Duties and taxes are payable by the
                  recipient per local regulation.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {regionTransit.map((region) => (
                    <div
                      key={region.region}
                      className="rounded-2xl border border-white/15 bg-white/5 p-4 flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {region.region}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {region.window}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tracking */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Tracking & Updates</h3>
                </div>
                <p className="text-muted-foreground">
                  Once the courier scans your parcel, you’ll receive an email
                  with the tracking number. Use the link provided to see
                  real-time checkpoints. Contact our logistics desk if scans
                  pause for more than 48 hours.
                </p>
              </div>
            </div>
          </section>

          {/* Lost or damaged */}
          <section className="pb-20">
            <div className="container mx-auto px-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">
                    Lost / Damaged Capsules
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  If your parcel is lost, delayed, or arrives with damage,
                  notify us within 48 hours of the expected delivery date. We
                  will coordinate with the carrier, file a claim, and arrange a
                  replacement or refund.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="pb-24">
            <div className="container mx-auto px-4">
              <div className="rounded-[32px] border border-primary/15 bg-gradient-to-r from-primary/10 via-background to-accent/10 backdrop-blur-xl p-8 space-y-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    Concierge
                  </p>
                  <h3 className="text-2xl font-black mt-2">
                    Need help with a shipment?
                  </h3>
                  <p className="text-muted-foreground">
                    Our logistics desk can expedite changes, reroute parcels, or
                    supply compliance paperwork for customs.
                  </p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Contact Logistics
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="pb-12">
            <div className="container mx-auto px-4">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
