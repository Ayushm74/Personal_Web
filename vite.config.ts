import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
    publicDir: './public', 
    plugins: [
        glsl(),
    ],
    base: './',
})
