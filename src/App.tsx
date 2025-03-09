import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import { useEffect } from "react";
import LogRocket from "logrocket";
LogRocket.init("8f2dud/builderstown");
const queryClient = new QueryClient();

// Scroll management component
const ScrollManager = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // Save scroll position to localStorage when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = JSON.parse(
        localStorage.getItem("scrollPositions") || "{}"
      );
      scrollPositions[pathname] = window.scrollY;
      localStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle scroll restoration or reset
  useEffect(() => {
    if (navigationType === "POP") {
      // Try to restore previous scroll position when navigating back/forward
      try {
        const scrollPositions = JSON.parse(
          localStorage.getItem("scrollPositions") || "{}"
        );
        if (scrollPositions[pathname] !== undefined) {
          window.scrollTo(0, scrollPositions[pathname]);
          return;
        }
      } catch (error) {
        console.error("Error restoring scroll position:", error);
      }
    }

    // Default: scroll to top for new navigation or if restoration fails
    window.scrollTo(0, 0);
  }, [pathname, navigationType]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
