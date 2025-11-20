import { Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">
            Terms & Conditions
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

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              These Terms and Conditions govern your use of our website and purchase of products. 
              By accessing our site or making a purchase, you agree to these terms.
            </p>

            <h2>1. General Terms</h2>
            <p>
              ZHEJIANG FABRIC COMPANY LIMITED ("we," "us," or "our") operates this e-commerce platform. 
              These terms apply to all visitors, users, and customers.
            </p>

            <h2>2. Products & Pricing</h2>
            <p>
              We strive to display accurate product information and pricing. However, we reserve the right 
              to correct any errors and update information without prior notice. All prices are in USD unless 
              otherwise specified.
            </p>

            <h2>3. Orders & Payment</h2>
            <p>
              By placing an order, you make an offer to purchase products. We reserve the right to accept 
              or decline your order. Payment must be received before order processing begins.
            </p>

            <h2>4. Shipping & Delivery</h2>
            <p>
              Shipping times vary by location and product availability. See our Shipping Policy for detailed 
              information. Risk of loss transfers to you upon delivery.
            </p>

            <h2>5. Returns & Refunds</h2>
            <p>
              Products may be returned within 30 days of delivery, subject to our Returns & Refunds Policy. 
              Items must be unused and in original packaging.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on this site, including text, images, logos, and designs, is owned by or licensed 
              to ZHEJIANG FABRIC COMPANY LIMITED and protected by copyright and trademark laws.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ZHEJIANG FABRIC COMPANY LIMITED shall not be liable 
              for any indirect, incidental, or consequential damages arising from your use of our website or products.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms are governed by the laws of Hong Kong. Any disputes shall be resolved in the courts 
              of Hong Kong.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at info@zjfabric-global.com.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
