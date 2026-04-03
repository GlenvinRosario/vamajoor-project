import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ProgramsPage from "./pages/ProgramsPage";
import NewsPage from "./pages/NewsPage";
import DonationsPage from "./pages/DonationsPage";
import GalleryPage from "./pages/GalleryPage";
import MagazinePage from "./pages/MagazinePage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import Donations from "./pages/Donations";
import Achievements from "./pages/Achievements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <div className="pt-[88px] md:pt-[112px]">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/magazine" element={<MagazinePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/donations2" element={<Donations />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
