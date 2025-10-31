import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Suppression des plugins et imports Replit inutiles

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  
  // Ligne 'root' supprimée ou mise en commentaire pour utiliser la racine du dépôt
  // root: path.resolve(import.meta.dirname, "client"), 
  
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
