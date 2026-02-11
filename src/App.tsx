import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";

const ParkinsonService = lazy(() => import("./pages/ParkinsonService"));
const DiscService = lazy(() => import("./pages/DiscService"));
const TrigeminalService = lazy(() => import("./pages/TrigeminalService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutDoctor = lazy(() => import("./pages/AboutDoctor"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/علاج-الشلل-الرعاش" element={<ParkinsonService />} />
            <Route path="/علاج-الانزلاق-الغضروفي" element={<DiscService />} />
            <Route path="/علاج-العصب-الخامس" element={<TrigeminalService />} />
            <Route path="/عن-الدكتور" element={<AboutDoctor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
