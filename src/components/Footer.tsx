import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Shield,
  ArrowUpRight,
  PhoneCall,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navColumns = [
  {
    title: "Collections",
    links: [
      { label: "Fashion Capsule", href: "/shop/fashion" },
      { label: "Men's Studio", href: "/shop/fashion?category=men" },
      { label: "Women's Atelier", href: "/shop/fashion?category=women" },
      { label: "Technology Capsule", href: "/shop/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Compliance", href: "/compliance" },
      { label: "Contact", href: "/contact" },
      { label: "Terms", href: "/policies/terms" },
      { label: "Shipping", href: "/policies/shipping" },
      { label: "Returns", href: "/policies/returns" },
      { label: "Privacy", href: "/policies/privacy" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background mt-32 border-t border-primary/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom,hsl(var(--accent)/0.3),transparent_45%)]" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10 space-y-16">
        {/* Compliance capsule */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-card/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_70px_rgba(15,23,42,0.35)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/15 opacity-60" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center relative overflow-hidden">
                <Shield className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-transparent mix-blend-screen opacity-40" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">
                  Verified
                </p>
                <h3 className="text-2xl font-black text-foreground">
                  ZHEJIANG FABRIC COMPANY LIMITED
                </h3>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground md:text-right">
              <p>Business Registration Certificate No. 77224617-000-10-24-2</p>
              <p>
                8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai, Hong
                Kong
              </p>
              <p>Valid 24 October 2024 – 23 October 2025</p>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                ZFC
              </p>
              <h4 className="text-3xl font-black mt-2 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Editorial Horizon
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium capsules that unite couture-grade fabrics and precision
              hardware, backed by a Hong Kong registered corporation.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {[
                { icon: MapPin, text: "8/F., China Hong Kong Tower, Wan Chai" },
                { icon: Mail, text: "info@zjfabric-global.com" },
                { icon: PhoneCall, text: "+852 0000 0000" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="inline-flex items-center gap-3">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    to={social.href}
                    className="w-10 h-10 rounded-full border border-primary/25 bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/15 transition"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation columns */}
          {navColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h5 className="font-semibold text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {column.title}
              </h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="inline-flex items-center gap-2 hover:text-primary transition group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Signal
              </h5>
              <p className="text-lg font-bold mt-2">Join the drop list</p>
              <p className="text-sm text-muted-foreground">
                Priority invites to capsule releases, compliance updates, and
                atelier events.
              </p>
            </div>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-background/60 border border-primary/20"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing you agree to receive updates and accept our{" "}
              <Link to="/policies/privacy" className="text-primary underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ZHEJIANG FABRIC COMPANY LIMITED.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/policies/privacy"
              className="hover:text-primary transition"
            >
              Privacy
            </Link>
            <Link
              to="/policies/terms"
              className="hover:text-primary transition"
            >
              Terms
            </Link>
            <Link to="/contact" className="hover:text-primary transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
