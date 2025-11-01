// client/src/App.tsx

import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

// Importation de la page d'accueil principale
import Home from './pages/Home';

// Importation du client de requête (le "problème" était souvent ici)
import { queryClient } from './lib/queryClient'; 

// Importation du composant Toaster pour les notifications
import { Toaster } from './components/ui/toaster';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      
      {/* AFFICHAGE DU COMPOSANT HOME - Votre page d'accueil */}
      <Home />
      
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;


