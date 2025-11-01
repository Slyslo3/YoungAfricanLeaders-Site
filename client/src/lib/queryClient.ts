// ... (le reste de votre code, y compris l'import de QueryClient)

// C'EST CETTE FONCTION QUI DOIT ÊTRE EXPORTÉE
export async function apiRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  // Ajoutez une gestion d'erreur robuste pour les codes HTTP non-2xx
  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API Error (${res.status}): ${errorBody}`);
  }
  // Tente de retourner le JSON, sinon retourne undefined pour les réponses 204 (No Content)
  if (res.status === 204) return undefined as unknown as T;
  return (await res.json()) as T;
}

// ... (le reste de votre code)

