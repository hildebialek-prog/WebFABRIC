import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Fashion from "./pages/shop/Fashion";
import Technology from "./pages/shop/Technology";
import Products from "./pages/Products";
import Terms from "./pages/policies/Terms";
import Shipping from "./pages/policies/Shipping";
import Returns from "./pages/policies/Returns";
import Privacy from "./pages/policies/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop/fashion" element={<Fashion />} />
          <Route path="/shop/technology" element={<Technology />} />
          <Route path="/products" element={<Products />} />
          <Route path="/policies/terms" element={<Terms />} />
          <Route path="/policies/shipping" element={<Shipping />} />
          <Route path="/policies/returns" element={<Returns />} />
          <Route path="/policies/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
