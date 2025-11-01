// client/src/App.tsx

import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

// Importation du LanguageProvider nécessaire pour corriger l'erreur de la console
import { LanguageProvider } from './contexts/LanguageContext'; // <-- AJOUTER CETTE LIGNE

// Importation de la page d'accueil principale
import Home from './pages/Home';

// Importation du client de requête 
import { queryClient } from './lib/queryClient'; 

// Importation du composant Toaster pour les notifications
import { Toaster } from './components/ui/toaster';

const App = () => {
  return (
    // Nous enveloppons l'intégralité de l'application avec les deux fournisseurs
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>  {/* <-- ENVELOPPER ICI */}
        
        {/* AFFICHAGE DU COMPOSANT HOME - Votre page d'accueil */}
        <Home />
        
        <Toaster />
      </LanguageProvider> {/* <-- ET FERMER ICI */}
    </QueryClientProvider>
  );
};

export default App;
