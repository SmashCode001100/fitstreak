import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#000000',
                    50:  '#FAFAFA',
                    100: '#F5F5F5',
                    200: '#E5E5E5',
                    300: '#D4D4D4',
                    400: '#A3A3A3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
                accent: {
                    DEFAULT: '#171717',
                    50:  '#FFFFFF',
                    100: '#FAFAFA',
                    200: '#F5F5F5',
                    300: '#E5E5E5',
                    400: '#D4D4D4',
                    500: '#A3A3A3',
                    600: '#737373',
                    700: '#525252',
                    800: '#404040',
                    900: '#262626',
                },
                neutral: {
                    50:  '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                    950: '#020617',
                },
                success:  '#10B981',
                warning:  '#F59E0B',
                danger:   '#EF4444',
                info:     '#3B82F6',
            },
            backgroundImage: {
                'gradient-brand':    'linear-gradient(135deg, #000000 0%, #404040 100%)',
                'gradient-dark':     'linear-gradient(180deg, #000000 0%, #171717 100%)',
                'gradient-card':     'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 100%)',
                'gradient-hero':     'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 100%)',
            },
            boxShadow: {
                'glow-primary': '0 0 20px rgba(0, 0, 0, 0.35)',
                'glow-accent':  '0 0 20px rgba(64, 64, 64, 0.35)',
                'glow-sm':      '0 0 10px rgba(0, 0, 0, 0.2)',
                'card':         '0 4px 24px rgba(0, 0, 0, 0.08)',
                'card-hover':   '0 8px 40px rgba(0, 0, 0, 0.14)',
            },
            keyframes: {
                'fade-in-up': {
                    '0%':   { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'scale-in': {
                    '0%':   { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%':      { transform: 'translateY(-6px)' },
                },
                'shimmer': {
                    '0%':   { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                'pulse-ring': {
                    '0%':   { transform: 'scale(1)',   opacity: '0.8' },
                    '100%': { transform: 'scale(1.6)', opacity: '0' },
                },
                'slide-in-right': {
                    '0%':   { opacity: '0', transform: 'translateX(20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%':      { backgroundPosition: '100% 50%' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(0,0,0,0.3)' },
                    '50%':      { boxShadow: '0 0 24px rgba(0,0,0,0.6)' },
                },
            },
            animation: {
                'fade-in-up':     'fade-in-up 0.5s ease-out forwards',
                'fade-in':        'fade-in 0.3s ease-out forwards',
                'scale-in':       'scale-in 0.3s ease-out forwards',
                'float':          'float 3s ease-in-out infinite',
                'shimmer':        'shimmer 2s linear infinite',
                'pulse-ring':     'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
                'slide-in-right': 'slide-in-right 0.4s ease-out forwards',
                'gradient-shift': 'gradient-shift 4s ease infinite',
                'glow-pulse':     'glow-pulse 2s ease-in-out infinite',
            },
        },
    },

    plugins: [forms],
};
