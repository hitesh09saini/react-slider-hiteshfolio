import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';


export default defineConfig({
    input: "src/index.ts",
    output: {
        name: "async-api-handler",
        dir: 'dist',
        format: 'cjs',
        sourcemap: true
    },
    external: ["react", "react-dom"],
    plugins: [
        typescript({ tsconfig: "tsconfig.json" }),
       
    ]
});
