// client/src/App.tsx

import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

// Importation du composant Home, qui est maintenant votre page d'accueil principale
// Le chemin est corrigé pour pointer vers le dossier 'pages'
import Home from './pages/Home';

// Importation du client de requête (TanStack Query)
import { queryClient } from './lib/queryClient'; 

// Importation du composant Toaster pour les notifications
import { Toaster } from './components/ui/toaster';

const App = () => {
  // Le code non utilisé a été retiré pour la propreté.

  return (
    // L'application est enveloppée dans le QueryClientProvider
    <QueryClientProvider client={queryClient}>
      
      {/* AFFICHAGE DU COMPOSANT HOME - Votre page d'accueil */}
      <Home />
      
      {/* Le Toaster est laissé pour afficher les notifications futures */}
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;

