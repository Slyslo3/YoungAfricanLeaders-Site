import * as React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
// CECI EST LA LIGNE CLÉ CORRIGÉE : Utilisation de "./lib" au lieu de "../lib"
import { queryClient } from './lib/queryClient'; 

// Importation des composants UI nécessaires
import { Button } from './components/ui/button';
import { useToast } from './components/ui/use-toast';
import { Toaster } from './components/ui/toaster';

const App = () => {
  const { toast } = useToast();

  const handleTestToast = () => {
    toast({
      title: "Test de notification réussi",
      description: "Le composant Toast fonctionne correctement avec useToast.",
      variant: "default",
    });
  };

  // ...
  return (
    <QueryClientProvider client={queryClient}>
      {/* Assurez-vous d'importer ce composant en haut du fichier si ce n'est pas fait */}
      <Router /> 

      <Toaster />
    </QueryClientProvider>
  );
};
// ...

export default App;
