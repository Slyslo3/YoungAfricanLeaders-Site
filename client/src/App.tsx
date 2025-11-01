// client/src/App.tsx

import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

// 1. Correction du chemin d'accès et Import du client de requête (TanStack Query)
import { queryClient } from './lib/queryClient'; 

// 2. Importation du composant de routage principal de l'application
// ⚠️ ASSUREZ-VOUS que ce chemin est correct pour votre fichier Router
import Router from './Router';

// Importation du composant Toaster pour les notifications
import { Toaster } from './components/ui/toaster';

const App = () => {
  // Remarque : Le code pour 'handleTestToast' et 'useToast' a été retiré
  // car il n'est plus utilisé et causait un affichage de page de test.

  return (
    // L'application est enveloppée dans le QueryClientProvider pour la gestion des données
    <QueryClientProvider client={queryClient}>
      
      {/* 3. Le composant Router affiche l'intégralité de votre site Web */}
      <Router />
      
      {/* Le Toaster est laissé pour afficher les notifications dans l'application */}
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
