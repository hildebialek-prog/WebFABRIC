import { Shield, Lock, Eye, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">
            Privacy Policy
          </h1>

          {/* Legal Block */}
          <div className="mb-12 p-6 bg-muted rounded-lg border-2 border-primary/20">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold mb-2">ZHEJIANG FABRIC COMPANY LIMITED</p>
                <p>Business Registration Certificate No. 77224617-000-10-24-2</p>
                <p>Registered Address: 8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai, Hong Kong</p>
                <p>Valid 24 October 2024 to 23 October 2025</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              ZHEJIANG FABRIC COMPANY LIMITED is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Information We Collect</h2>
              </div>
              <p className="text-muted-foreground mb-4">We collect information you provide directly to us, including:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Name, email address, phone number, and shipping/billing address</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Payment information (processed securely through our payment providers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Purchase history and preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Communications with us (emails, contact forms, customer service inquiries)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Device and browser information, IP address, and usage data</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">How We Use Your Information</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Process and fulfill your orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Communicate with you about your orders, inquiries, and account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Send marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improve our website, products, and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Detect and prevent fraud and security threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Information Sharing</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Service providers (payment processors, shipping companies, email providers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Legal authorities when required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Business partners with your consent</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Access, update, or delete your personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Opt out of marketing communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Request a copy of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Lodge a complaint with a data protection authority</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at info@zjfabric-global.com.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site 
                traffic, and personalize content. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under 13. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                ZHEJIANG FABRIC COMPANY LIMITED<br />
                8/F., China Hong Kong Tower, 8–12 Hennessy Road, Wan Chai, Hong Kong<br />
                Email: info@zjfabric-global.com
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
