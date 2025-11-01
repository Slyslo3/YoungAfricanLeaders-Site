import { QueryClient } from '@tanstack/react-query';

// CORRECTION FINALE : La constante 'queryClient' est exportée pour être utilisée dans App.tsx
export const queryClient = new QueryClient({
  // Ajoutez vos options de configuration si vous en avez
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});


// La fonction 'apiRequest' est exportée pour être utilisée par les hooks TanStack Query
export async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  
  // Gestion d'erreur robuste pour les codes HTTP non-2xx
  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API Error (${res.status}): ${errorBody}`);
  }
  
  // Tente de retourner le JSON, sinon retourne undefined pour les réponses 204 (No Content)
  if (res.status === 204) return undefined as unknown as T;
  
  return (await res.json()) as T;
}

