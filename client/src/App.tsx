import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// ATTENTION: Nous n'importons plus l'image comme un module.
// Le logo sera chargé via son chemin statique absolu (fonctionne car le fichier sera dans /public/)

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
          
          {/* EN-TÊTE AVEC RÉFÉRENCE STATIQUE "/logo.jpg" */}
          <header className="p-4 bg-white shadow-md flex items-center justify-start border-b border-gray-100">
            <img 
              src="/logo.jpg" 
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
