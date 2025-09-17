import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";
import Resources from "./pages/Resources";
import Wellness from "./pages/Wellness";
import Counseling from "./pages/Counseling";
import VRRelaxation from "./pages/VRRelaxation";
import Forum from "./pages/Forum";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/vr-relaxation" element={<VRRelaxation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>   
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
