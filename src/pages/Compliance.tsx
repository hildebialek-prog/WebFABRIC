import { useState } from "react";
import { FileText, Shield, CheckCircle, Download } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `VER-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setReferenceId(refId);
    setSubmitted(true);
    
    toast({
      title: "Verification Request Submitted",
      description: `Your reference ID is ${refId}`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">
            Compliance & Verification
          </h1>

          <p className="text-lg text-muted-foreground mb-12">
            This page provides official company information for verification by financial institutions, 
            business partners, and regulatory authorities.
          </p>

          {/* Official Company Information */}
          <div className="mb-12 p-8 bg-muted rounded-lg border-2 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Official Company Information</h2>
                <div className="space-y-2 text-base leading-relaxed">
                  <p><strong>Company Name:</strong> ZHEJIANG FABRIC COMPANY LIMITED</p>
                  <p><strong>Business Registration Certificate No.:</strong> 77224617-000-10-24-2</p>
                  <p><strong>Registered Address:</strong> 8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai, Hong Kong</p>
                  <p><strong>Status / Legal Form:</strong> Body Corporate (CORP)</p>
                  <p><strong>Validity:</strong> 24 October 2024 to 23 October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Document Placeholders */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Available Documents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Business Registration Certificate (Current)",
                "Proof of Registered Office Address",
                "Bank Reference Letter",
                "Sample Commercial Invoice & Packing List",
                "Privacy & AML/Compliance Statement",
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{doc}</span>
                  </div>
                  <Button size="sm" variant="outline" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * Documents are available upon verified request. Please use the form below to request access.
            </p>
          </div>

          {/* Verification Request Form */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Request a Verification Pack</h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Institution *</Label>
                    <Input id="company" required className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="purpose">Purpose of Verification *</Label>
                  <Textarea
                    id="purpose"
                    required
                    className="mt-2"
                    placeholder="e.g., Bank account opening, KYC verification, business partnership due diligence"
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="nda" required />
                  <label
                    htmlFor="nda"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to maintain confidentiality of all provided documents and use them solely for 
                    the stated verification purpose.
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Verification Request
                </Button>
              </form>
            ) : (
              <div className="bg-card p-8 rounded-lg border-2 border-primary text-center animate-slide-up">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Request Submitted Successfully</h3>
                <p className="text-muted-foreground mb-6">
                  Your verification request has been received and is being processed.
                </p>
                <div className="p-4 bg-muted rounded-lg inline-block">
                  <p className="text-sm font-medium mb-1">Your Reference ID:</p>
                  <p className="text-2xl font-bold text-primary">{referenceId}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Please save this reference ID for tracking. You will receive an email within 2-3 business days 
                  with access to the requested documents.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Compliance;
