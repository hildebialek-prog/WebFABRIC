import { Shield, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Returns = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">
            Returns & Refunds
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
                <RotateCcw className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">30-Day Return Policy</h2>
              </div>
              <p className="text-muted-foreground">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                you may return most items within 30 days of delivery for a full refund or exchange.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Eligible Returns</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Items must be unused, unworn, and in original condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Original packaging and tags must be intact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Include original receipt or proof of purchase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Technology products must include all accessories and documentation</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-destructive" />
                <h2 className="text-3xl font-bold">Non-Returnable Items</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Personalized or custom-made items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Intimate apparel, swimwear, or underwear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Software or digital products once opened</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Items marked as "Final Sale"</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">How to Return</h2>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <div>
                    <strong>Initiate Return:</strong> Contact us at info@zjfabric-global.com with your order 
                    number and reason for return.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <div>
                    <strong>Receive Authorization:</strong> We'll provide a return authorization number and 
                    shipping instructions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <div>
                    <strong>Pack & Ship:</strong> Securely package the item(s) with all original materials 
                    and ship to the provided address.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <div>
                    <strong>Receive Refund:</strong> Once we receive and inspect your return, we'll process 
                    your refund within 5-10 business days.
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Return Shipping Costs</h2>
              <p className="text-muted-foreground mb-4">
                Return shipping costs depend on the reason for return:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Our Error or Defect:</strong> We cover return shipping costs</li>
                <li><strong>Change of Mind:</strong> Customer responsible for return shipping</li>
                <li><strong>International Returns:</strong> Customer responsible for all customs and duties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Exchanges</h2>
              <p className="text-muted-foreground">
                To exchange an item for a different size, color, or product, please return the original item 
                and place a new order for the desired item. This ensures fastest processing.
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

export default Returns;
