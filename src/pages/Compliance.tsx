import { useMemo, useState, useCallback } from "react";
import {
  ArrowRight,
  CalendarRange,
  CheckCircle,
  FileText,
  Landmark,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Compliance = () => {
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      toast({
        title: "Missing information",
        description: "Please complete all required fields before submitting.",
        variant: "destructive",
      });
      form.reportValidity();
      return;
    }

    const refId = `VER-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;
    setReferenceId(refId);
    setSubmitted(true);

    toast({
      title: "Verification Request Submitted",
      description: `Your reference ID is ${refId}`,
    });
  };

  const documentCatalog = useMemo(
    () => [
      {
        title: "Business Registration Certificate (Current)",
        detail: "Digitally signed BR copy refreshed annually.",
      },
      {
        title: "Proof of Registered Office Address",
        detail: "Utility + tenancy dossier for KYC teams.",
      },
      {
        title: "Bank Reference Letter",
        detail: "Issued quarterly covering major credit lines.",
      },
      {
        title: "Sample Commercial Invoice & Packing List",
        detail: "Templates for customs & trade facilitation.",
      },
      {
        title: "Privacy & AML / Compliance Statement",
        detail: "Data handling, escalation, AML reporting.",
      },
      {
        title: "Directors Register & Shareholding",
        detail: "Certified excerpt upon NDA execution.",
      },
    ],
    []
  );

  const verificationSteps = [
    {
      title: "Submit Credentials",
      description: "Provide institutional details and intended use case.",
      icon: FileText,
    },
    {
      title: "Compliance Review",
      description: "Internal audit desk verifies eligibility within 48h.",
      icon: ShieldCheck,
    },
    {
      title: "Encrypted Delivery",
      description: "Expiring vault link shared with tracking reference.",
      icon: Lock,
    },
  ];

  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/40" />
        <div className="relative">
          {/* Hero */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                <div className="space-y-6">
                  <Sparkles className="w-10 h-10 text-primary" />
                  <p className="uppercase tracking-[0.6em] text-xs text-muted-foreground">
                    Compliance Deck
                  </p>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                      Verified Hong Kong Entity & Audit Capsule.
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ZHEJIANG FABRIC COMPANY LIMITED provides financial
                    institutions and partners with real-time documentation
                    covering registration, banking references, and AML
                    policies—delivered through our encrypted compliance beam.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Registry",
                        value: "Hong Kong Companies Registry",
                      },
                      { label: "Status", value: "Body Corporate (CORP)" },
                      { label: "Audit Trail", value: "Live / Encrypted" },
                      { label: "Response", value: "48h SLA" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold mt-2">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[32px] border border-primary/20 bg-background/80 backdrop-blur-xl p-8 space-y-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)]">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Official Details
                      </p>
                      <h2 className="text-2xl font-semibold mt-2">
                        ZHEJIANG FABRIC COMPANY LIMITED
                      </h2>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    {[
                      {
                        label: "BR Certificate",
                        value: "77224617-000-10-24-2",
                      },
                      {
                        label: "Registered Address",
                        value:
                          "8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai",
                      },
                      { label: "Validity", value: "24 Oct 2024 – 23 Oct 2025" },
                      { label: "Legal Counsel", value: "On-call (HK)" },
                    ].map((info) => (
                      <div
                        key={info.label}
                        className="rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium mt-2 text-foreground">
                          {info.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Documents */}
          <section className="py-20 bg-background/60">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                  Documents on File
                </p>
                <h2 className="text-3xl md:text-4xl font-black mt-4">
                  The Compliance Stack
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Access granted upon verification. Each file carries a digital
                  signature and expiring download link.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {documentCatalog.map((doc) => (
                  <div
                    key={doc.title}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex items-start gap-4 hover:border-primary/40 transition"
                  >
                    <FileText className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {doc.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                  Protocol
                </p>
                <h2 className="text-3xl font-black mt-4">
                  Verification Sequence
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {verificationSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-3xl border border-primary/20 bg-background/80 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-lg shadow-primary/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                          {index + 1}
                        </span>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Request Form */}
          <section className="py-20 bg-background/70">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                    Secure Access
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black mt-4">
                    Request a Verification Pack
                  </h2>
                  <p className="text-muted-foreground mt-4">
                    Provide institutional credentials. The compliance desk
                    replies with an encrypted dossier link and tracking ID.
                  </p>
                </div>

                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-card p-8 rounded-[32px] border border-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          className="mt-2"
                          onInvalid={handleInvalidField}
                          onInput={handleInputField}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company / Institution *</Label>
                        <Input
                          id="company"
                          required
                          className="mt-2"
                          onInvalid={handleInvalidField}
                          onInput={handleInputField}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-2"
                        onInvalid={handleInvalidField}
                        onInput={handleInputField}
                      />
                    </div>
                    <div>
                      <Label htmlFor="purpose">Purpose of Verification *</Label>
                      <Textarea
                        id="purpose"
                        required
                        className="mt-2"
                        placeholder="e.g., Bank account opening, KYC verification, business partnership due diligence"
                        rows={5}
                        onInvalid={handleInvalidField}
                        onInput={handleInputField}
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="nda" required />
                      <label
                        htmlFor="nda"
                        className="text-sm leading-none text-muted-foreground"
                      >
                        I agree to confidentiality and will use the documents
                        solely for the stated verification purpose.
                      </label>
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Submit Verification Request
                    </Button>
                  </form>
                ) : (
                  <div className="rounded-[32px] border-2 border-primary bg-background/80 backdrop-blur-xl p-10 text-center animate-fade-in">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-black mb-2">
                      Request Submitted
                    </h3>
                    <p className="text-muted-foreground">
                      The compliance desk will respond within 2–3 business days.
                    </p>
                    <div className="mt-6 inline-flex flex-col items-center gap-2 px-6 py-4 rounded-2xl border border-primary/30 bg-primary/5">
                      <p className="text-sm uppercase tracking-[0.4em] text-primary/80">
                        Reference ID
                      </p>
                      <p className="text-2xl font-black text-primary">
                        {referenceId}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      Save this ID for correspondence. Check your inbox for the
                      dossier link.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Compliance;
