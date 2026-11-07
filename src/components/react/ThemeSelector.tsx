import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';

export type Theme = 'dark' | 'light' | 'system';

export const ThemeSelector: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read current theme from localStorage or document class
    const savedTheme = (localStorage.getItem('mj-portfolio-theme') as Theme) || 'dark';
    setTheme(savedTheme);
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    let effectiveTheme: 'dark' | 'light';

    if (t === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      effectiveTheme = t;
    }

    if (effectiveTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    localStorage.setItem('mj-portfolio-theme', t);
  };

  useEffect(() => {
    applyTheme(theme);

    // Listen for system theme changes if set to system
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectTheme = (selected: Theme) => {
    setTheme(selected);
    applyTheme(selected);
    setIsOpen(false);
  };

  const getIcon = (t: Theme) => {
    switch (t) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-blue-400" />;
      case 'system':
        return <Monitor className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Cambiar tema visual (Oscuro, Claro, Sistema)"
        className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-sm"
      >
        {getIcon(theme)}
        <span className="capitalize hidden sm:inline">{theme === 'system' ? 'Sistema' : theme === 'dark' ? 'Oscuro' : 'Claro'}</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <button
            role="menuitem"
            onClick={() => selectTheme('dark')}
            className={`flex items-center w-full gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
            }`}
          >
            <Moon className="w-4 h-4 text-blue-400" />
            Oscuro
          </button>

          <button
            role="menuitem"
            onClick={() => selectTheme('light')}
            className={`flex items-center w-full gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
            }`}
          >
            <Sun className="w-4 h-4 text-amber-500" />
            Claro
          </button>

          <button
            role="menuitem"
            onClick={() => selectTheme('system')}
            className={`flex items-center w-full gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
              theme === 'system'
                ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
            }`}
          >
            <Monitor className="w-4 h-4 text-cyan-400" />
            Sistema
          </button>
        </div>
      )}
    </div>
  );
};
