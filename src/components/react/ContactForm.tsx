import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Download, Send, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Contacto de ${formData.name || 'Portafolio'}`);
    const mailtoBody = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Direct Info & Quick Action Buttons */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="p-5 sm:p-8 rounded-3xl glass-card shadow-xl flex flex-col gap-6 min-w-0">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Información de contacto</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Disponible para puestos Senior Full Stack &amp; Mobile, consultoría o proyectos a medida.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-mono text-slate-400">Correo Electrónico</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-500 transition-colors truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-mono text-slate-400">Teléfono / WhatsApp</span>
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-slate-400">Ubicación</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white break-words">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-blue-500" />
                  <span>Copiar correo</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-600" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-purple-500" />
              <span>Enviar correo</span>
            </a>

            <a
              href={personalInfo.cvUrl}
              download="cv-manuel-juarez.pdf"
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Mailto Form */}
      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-8 rounded-3xl glass-card shadow-xl flex flex-col gap-5 min-w-0"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Envíame un mensaje</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Completa los datos y se abrirá tu cliente de correo preferido con el mensaje preparado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Tu nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. Carlos Mendoza"
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Tu correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="carlos@empresa.com"
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Asunto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Oportunidad laboral / Proyecto Full Stack"
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hola Manuel, nos interesa tu perfil para..."
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="w-4 h-4" />
            <span>Generar y enviar correo</span>
          </button>
        </form>
      </div>
    </div>
  );
};
