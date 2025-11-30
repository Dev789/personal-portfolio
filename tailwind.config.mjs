/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Custom terminal green for that DevOps aesthetic
                'terminal-green': '#4af626',
                'terminal-dark': '#0c0c0c',
                'terminal-slate': '#1e293b',
            },
            fontFamily: {
                mono: [
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace'
                ],
            },
        },
    },
    plugins: [],
}
