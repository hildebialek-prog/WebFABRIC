import { Shield, Package, Truck, Clock } from "lucide-react";
import Layout from "@/components/Layout";

const Shipping = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">
            Shipping Policy
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
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Processing Time</h2>
              </div>
              <p className="text-muted-foreground">
                Orders are typically processed within 1-2 business days. During peak seasons, processing may take 
                up to 3-4 business days. You will receive a confirmation email once your order ships.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Shipping Methods & Rates</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Standard Shipping (5-7 business days)</h3>
                  <p className="text-sm text-muted-foreground">Free on orders over $100, otherwise $9.99</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Express Shipping (2-3 business days)</h3>
                  <p className="text-sm text-muted-foreground">$19.99</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2">Overnight Shipping (1 business day)</h3>
                  <p className="text-sm text-muted-foreground">$39.99</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">International Shipping</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We ship to most countries worldwide. International shipping times vary by destination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Asia-Pacific: 5-10 business days</li>
                <li>Europe: 7-14 business days</li>
                <li>Americas: 7-14 business days</li>
                <li>Middle East & Africa: 10-20 business days</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Customs duties and taxes are the responsibility of the recipient and are not included in 
                our shipping charges.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Tracking Your Order</h2>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive a tracking number via email. You can use this number 
                to monitor your package's progress on our shipping partner's website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Lost or Damaged Packages</h2>
              <p className="text-muted-foreground">
                If your package is lost or arrives damaged, please contact us within 48 hours of the expected 
                delivery date. We'll work with you to file a claim with the carrier and send a replacement or 
                issue a refund.
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

export default Shipping;
