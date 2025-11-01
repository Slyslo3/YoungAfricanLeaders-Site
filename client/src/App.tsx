import { Switch, Route } from "wouter";
import { queryClient } from "../lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "../components/ui/toaster";
import { TooltipProvider } from "../components/ui/tooltip";
import { LanguageProvider } from "../contexts/LanguageContext";
import Home from "../pages/Home";
import NotFound from "../pages/not-found";

// Composant SVG qui représente le logo YALW
// Ceci élimine toute dépendance à un fichier externe (logo.jpg)
const YalwLogo = () => (
  // La couleur #6B46C1 est un violet profond (similaire à celui de votre image)
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cercle extérieur (anneau) */}
    <circle cx="50" cy="50" r="48" stroke="#6B46C1" strokeWidth="3" />
    
    {/* Le texte "YALW" centré */}
    <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#6B46C1">
      YALW
    </text>
    
    {/* Simulation de la forme de l'Afrique au centre (simplifiée) */}
    <path 
        d="M 40 35 L 60 35 L 65 45 L 60 55 L 50 65 L 45 55 L 40 45 Z" 
        fill="#DDD6FE" // Couleur de fond claire pour l'Afrique
        stroke="#6B46C1" 
        strokeWidth="0.5"
    />
  </svg>
);


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
          
          {/* EN-TÊTE AVEC LE COMPOSANT SVG */}
          <header className="p-4 bg-white shadow-md flex items-center justify-start border-b border-gray-100">
            {/* Utilisation du composant SVG en ligne */}
            <YalwLogo />
            
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
