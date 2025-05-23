import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
    plugins: [vue(),
    createHtmlPlugin({
        entry: '/src/main.ts',
        template: 'index.html'
    })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'vue': '@vue/runtime-dom'
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    server: {
        port: 9000,
        open: true
    }
});