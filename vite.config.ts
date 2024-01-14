import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            modules: "/src/modules",
            components: "/src/components",
            assets: "/src/assets",
            temp: "/src/temp",
            helpers: "/src/helpers",
        },
    },
});
