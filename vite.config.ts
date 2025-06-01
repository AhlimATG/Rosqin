
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// The import for componentTagger can remain if it's used elsewhere or for future use,
// but we will remove its invocation from the plugins array.
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // We are removing the componentTagger plugin for now to troubleshoot the error.
    // mode === 'development' && componentTagger(), 
  ].filter(Boolean), // .filter(Boolean) will remove any falsy values if more conditional plugins are added later
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

