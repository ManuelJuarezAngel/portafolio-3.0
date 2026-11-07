import React, { useState } from 'react';
import { technologies } from '../../data/portfolioData';
import {
  Code2,
  Server,
  Smartphone,
  Database,
  ShieldCheck,
  FileCode,
  FileJson,
  Globe,
  Palette,
  Cpu,
  Layers,
  Send,
  Workflow,
  KeyRound,
  Radio,
  Component,
  Box,
  Sparkles,
  Feather,
  LayoutGrid,
  Terminal,
  Paintbrush,
  Tablet,
  HardDrive,
  Apple,
  Play,
  HardDriveDownload,
  TrendingUp,
  GitBranch,
  Container,
  CheckSquare,
  Kanban,
  PenTool,
  Users,
  ShieldAlert,
  Lock,
  Key,
  FileSpreadsheet,
  Rocket,
  Cloud,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-blue-500" />,
  FileCode: <FileCode className="w-5 h-5 text-amber-500" />,
  FileJson: <FileJson className="w-5 h-5 text-blue-400" />,
  Globe: <Globe className="w-5 h-5 text-cyan-500" />,
  Palette: <Palette className="w-5 h-5 text-pink-500" />,
  Database: <Database className="w-5 h-5 text-indigo-500" />,
  Server: <Server className="w-5 h-5 text-red-500" />,
  Cpu: <Cpu className="w-5 h-5 text-orange-500" />,
  Layers: <Layers className="w-5 h-5 text-purple-500" />,
  Send: <Send className="w-5 h-5 text-sky-500" />,
  Workflow: <Workflow className="w-5 h-5 text-teal-500" />,
  KeyRound: <KeyRound className="w-5 h-5 text-emerald-500" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Radio: <Radio className="w-5 h-5 text-violet-500" />,
  Component: <Component className="w-5 h-5 text-cyan-400" />,
  Box: <Box className="w-5 h-5 text-emerald-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-teal-400" />,
  Feather: <Feather className="w-5 h-5 text-purple-400" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5 text-violet-400" />,
  Terminal: <Terminal className="w-5 h-5 text-amber-400" />,
  Paintbrush: <Paintbrush className="w-5 h-5 text-pink-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-blue-400" />,
  Tablet: <Tablet className="w-5 h-5 text-indigo-400" />,
  HardDrive: <HardDrive className="w-5 h-5 text-cyan-400" />,
  Apple: <Apple className="w-5 h-5 text-slate-300" />,
  Play: <Play className="w-5 h-5 text-green-400" />,
  HardDriveDownload: <HardDriveDownload className="w-5 h-5 text-blue-500" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
  Github: <GitBranch className="w-5 h-5 text-slate-200" />,
  Container: <Container className="w-5 h-5 text-blue-400" />,
  CheckSquare: <CheckSquare className="w-5 h-5 text-blue-500" />,
  Kanban: <Kanban className="w-5 h-5 text-cyan-400" />,
  Figma: <PenTool className="w-5 h-5 text-purple-400" />,
  Users: <Users className="w-5 h-5 text-indigo-400" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-red-400" />,
  Lock: <Lock className="w-5 h-5 text-amber-400" />,
  Key: <Key className="w-5 h-5 text-cyan-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-400" />,
  Rocket: <Rocket className="w-5 h-5 text-orange-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  PenTool: <PenTool className="w-5 h-5 text-pink-400" />,
};

const categories = [
  'Todas',
  'Lenguajes',
  'Backend',
  'Frontend',
  'Mobile',
  'Bases de datos',
  'Herramientas y metodología',
  'Diseño y prototipado',
  'Seguridad',
] as const;

export const TechTabs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const filteredTechs =
    selectedCategory === 'Todas'
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  return (
    <div className="flex flex-col gap-8">
      {/* Category Tabs Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid of Tech Cards */}
      <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredTechs.map((tech) => {
          const icon = iconMap[tech.icon] || <Code2 className="w-5 h-5 text-blue-500" />;
          return (
            <div
              key={tech.name}
              className="tech-card group relative p-4 rounded-2xl hover:border-blue-500/50 transition-[border-color,box-shadow] duration-200 shadow-sm hover:shadow-md flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-200">
                  {icon}
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {tech.category}
                </span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h4>
                {tech.tooltip && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-snug">
                    {tech.tooltip}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
