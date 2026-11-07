import React, { useState, useEffect } from 'react';
import { ThemeSelector } from './ThemeSelector';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Tecnologías', href: '#tecnologias' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="nav-enter-item flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
            style={{ '--nav-delay': '120ms' } as React.CSSProperties}
            aria-label="Manuel Juárez Angel - Inicio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
              MJ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Manuel Juárez
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-tight">
                Full Stack &amp; Mobile
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-enter-item hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/70 p-1.5 rounded-full border border-white/30 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-blue-500/5" style={{ '--nav-delay': '220ms' } as React.CSSProperties}>
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls (Desktop) */}
          <div className="nav-enter-item hidden lg:flex items-center gap-3" style={{ '--nav-delay': '320ms' } as React.CSSProperties}>
            <ThemeSelector />

            <a
              href={personalInfo.cvUrl}
              download="cv-manuel-juarez.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/25 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              aria-label="Descargar Currículum PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="nav-enter-item flex items-center gap-2 lg:hidden" style={{ '--nav-delay': '220ms' } as React.CSSProperties}>
            <ThemeSelector />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
              className="p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-slate-950/60 backdrop-blur-md lg:hidden z-40 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl flex flex-col gap-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs opacity-60">→</span>
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={personalInfo.cvUrl}
                download="cv-manuel-juarez.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
