import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";
import Resources from "./pages/Resources";
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
            <Route path="/wellness" element={<div className="flex items-center justify-center h-96"><p className="text-muted-foreground">Wellness Dashboard - Coming Soon</p></div>} />
            <Route path="/counseling" element={<div className="flex items-center justify-center h-96"><p className="text-muted-foreground">Counseling Booking - Coming Soon</p></div>} />
            <Route path="/forum" element={<div className="flex items-center justify-center h-96"><p className="text-muted-foreground">Peer Support Forum - Coming Soon</p></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>   
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
