import { Shield } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-kinetic-reveal">About Us</h1>
        
        <div className="max-w-3xl space-y-8">
          <p className="text-lg leading-relaxed">
            ZHEJIANG FABRIC COMPANY LIMITED represents the convergence of fashion sensibility and technological precision. 
            We curate and deliver premium products across two distinct verticals—contemporary fashion and cutting-edge technology—united 
            by our commitment to quality, innovation, and customer satisfaction.
          </p>

          <p className="text-lg leading-relaxed">
            Our fashion collections blend timeless elegance with modern design, offering carefully selected pieces for discerning customers. 
            Meanwhile, our technology offerings showcase the latest innovations in computing, mobile devices, and smart home solutions.
          </p>

          {/* Legal Prominence */}
          <div className="my-12 p-8 bg-muted rounded-lg border-2 border-primary/20">
            <div className="flex items-start gap-4">
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

          <h2 className="text-3xl font-bold mt-12 mb-6">Our Values</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-muted-foreground">
                Every product we offer is genuine, sourced from authorized distributors and manufacturers. 
                We stand behind the authenticity of our entire catalog.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly seek out the latest designs in fashion and the most advanced technologies, 
                bringing cutting-edge products to our customers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Trust & Transparency</h3>
              <p className="text-muted-foreground">
                As a fully registered Hong Kong corporation, we operate with complete transparency. 
                Our compliance documentation is readily available for verification by financial institutions and partners.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Excellence</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. From product selection to after-sales support, 
                we're committed to delivering an exceptional experience at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
