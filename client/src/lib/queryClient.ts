import { QueryClient } from '@tanstack/react-query';

// Crée une instance unique de QueryClient à utiliser dans toute l'application.
// Ceci gère la mise en cache, la synchronisation et l'état des données asynchrones.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Configuration pour éviter les problèmes de mise au point automatique sur l'éditeur
      staleTime: 5 * 60 * 1000, // Les données sont considérées comme 'stale' après 5 minutes
      refetchOnWindowFocus: false, // Désactive le refetching automatique lors du focus de la fenêtre
    },
  },
});
