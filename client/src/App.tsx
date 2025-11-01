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

  return (
    // Application principale utilisant QueryClientProvider et le Toaster
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="p-8 bg-white shadow-xl rounded-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4 text-green-700">Déploiement Netlify réussi !</h1>
          <p className="mb-6 text-gray-600">
            Ce build a réussi car les dépendances et les chemins de modules manquants ont été corrigés.
          </p>
          <Button onClick={handleTestToast} className="w-full bg-blue-500 hover:bg-blue-600">
            Afficher un Toast de test
          </Button>
        </div>
      </div>
      {/* Doit être inclus pour afficher les notifications toast */}
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
