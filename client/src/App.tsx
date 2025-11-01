import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// NOUVEL IMPORT DU LOGO: utilise le chemin relatif vers votre dossier local
// Le logo est importé comme un module (standard React/Vite)
import logoImage from "./images_générées/logo.jpg"; 

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          
          {/* NOUVEL EN-TÊTE FIXE AVEC LE LOGO */}
          <header className="p-4 bg-white shadow-md flex items-center justify-start border-b border-gray-100">
            <img 
              src={logoImage} 
              alt="Young African Leaders Worldwide Logo" 
              className="h-10 w-auto rounded-lg" // Classes Tailwind pour un beau rendu
            />
            <h1 className="text-xl font-bold ml-3 text-purple-700">YALW</h1>
          </header>

          {/* Le contenu principal */}
          <main className="min-h-screen">
            <Toaster />
            <Router />
          </main>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
