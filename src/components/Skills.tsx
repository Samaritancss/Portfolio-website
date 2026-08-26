import React, { useState } from 'react';
import { Code2, CheckCircle2, ShieldCheck, Sparkles, Layers, Cpu, Compass, Check, ArrowUpRight, Award } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { SkillItem } from '../types';

interface SkillsProps {
  theme: 'light' | 'dark';
}

export const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('react');
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'language' | 'tools' | 'engineering'>('all');
  const isLight = theme === 'light';

  const selectedSkill: SkillItem = skillsData.find((s) => s.id === selectedSkillId) || skillsData[3];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className={`py-24 relative overflow-hidden transition-colors ${
        isLight
          ? 'bg-white border-t border-slate-200/90 text-slate-900'
          : 'bg-slate-950/80 border-t border-slate-800/80 text-slate-100'
      }`}
    >
      {/* Ambient glowing background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold ${
              isLight
                ? 'bg-blue-50 border border-blue-200 text-blue-800'
                : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Mastery</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}
          >
            Core Technical Skills
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            Directly mapped to modern remote engineering requirements: HTML5, CSS3, JavaScript, React, Python, Git & GitHub.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {[
              { id: 'all', label: 'All Skills' },
              { id: 'frontend', label: 'Frontend Stack' },
              { id: 'language', label: 'Languages' },
              { id: 'tools', label: 'Git & Tooling' },
              { id: 'engineering', label: 'Engineering Rigor' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Layout: Left Skills Grid, Right Architectural Impact Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Skill Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredSkills.map((skill) => {
                const isSelected = skill.id === selectedSkillId;
                return (
                  <div
                    key={skill.id}
                    id={`skill-card-${skill.id}`}
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${
                      isSelected
                        ? isLight
                          ? 'bg-blue-50/90 border-blue-400 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                          : 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                        : isLight
                        ? 'bg-slate-50/70 hover:bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm'
                        : 'bg-slate-900/60 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: `${skill.color}18`,
                            color: skill.color,
                            border: `1px solid ${skill.color}35`,
                          }}
                        >
                          {skill.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3
                            className={`font-bold text-sm transition-colors ${
                              isSelected
                                ? isLight
                                  ? 'text-blue-900'
                                  : 'text-white'
                                : isLight
                                ? 'text-slate-900 group-hover:text-blue-600'
                                : 'text-slate-200 group-hover:text-white'
                            }`}
                          >
                            {skill.name}
                          </h3>
                          <span
                            className={`text-[11px] font-mono capitalize ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          color: skill.color,
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <p
                      className={`text-xs leading-relaxed line-clamp-2 mt-1.5 ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {skill.summary}
                    </p>

                    {/* Progress Bar */}
                    <div
                      className={`w-full h-1.5 rounded-full mt-3 overflow-hidden ${
                        isLight ? 'bg-slate-200' : 'bg-slate-950'
                      }`}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Skill Guarantee Callout */}
            <div
              className={`p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-700'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  All skills proven with production code across 4 featured portfolio apps.
                </span>
              </div>
              <a
                href="https://github.com/Samaritancss?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline font-semibold shrink-0 flex items-center gap-1"
              >
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Competency & Production Impact Inspector (NO RAW CODE) */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`rounded-3xl border shadow-xl overflow-hidden backdrop-blur-xl transition-all ${
                isLight
                  ? 'bg-white border-slate-200 shadow-slate-200/60 text-slate-800'
                  : 'bg-slate-900/95 border-slate-800 shadow-2xl text-slate-200'
              }`}
            >
              {/* Header */}
              <div
                className={`p-6 border-b flex items-start justify-between gap-4 ${
                  isLight ? 'bg-slate-50/80 border-slate-200' : 'bg-slate-950/80 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: selectedSkill.color }}
                    />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                      Engineering Inspector
                    </span>
                  </div>
                  <h3 className={`text-xl font-extrabold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                    {selectedSkill.name}
                  </h3>
                  <p className={`text-xs mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    {selectedSkill.summary}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className="text-lg font-mono font-extrabold block"
                    style={{ color: selectedSkill.color }}
                  >
                    {selectedSkill.level}%
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isLight ? 'bg-white border border-slate-200 text-slate-700' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {selectedSkill.experienceText}
                  </span>
                </div>
              </div>

              {/* Body: Architectural Impact & Key Mastery Points */}
              <div className="p-6 space-y-6">
                {/* Real-World Application */}
                <div className="space-y-2">
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Production Engineering Application
                  </h4>
                  <div
                    className={`p-3.5 rounded-2xl border text-xs leading-relaxed ${
                      isLight ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-slate-950/60 border-slate-800 text-slate-300'
                    }`}
                  >
                    {selectedSkill.realWorldApplication}
                  </div>
                </div>

                {/* Verified in Projects */}
                <div className="space-y-2">
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    Verified In Portfolio Projects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.verifiedInProjects.map((proj, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 ${
                          isLight
                            ? 'bg-blue-50/70 border-blue-200 text-blue-800'
                            : 'bg-blue-950/30 border-blue-800/60 text-cyan-300'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{proj}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Mastery Points */}
                <div className="space-y-2">
                  <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    <Award className="w-3.5 h-3.5 text-purple-600" />
                    Key Architectural Competencies
                  </h4>
                  <div className="space-y-2">
                    {selectedSkill.keyConcepts.map((concept, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs ${
                          isLight
                            ? 'bg-slate-50/60 border-slate-200 text-slate-800'
                            : 'bg-slate-950/40 border-slate-800 text-slate-300'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inspector Footer */}
              <div
                className={`px-6 py-3.5 border-t flex items-center justify-between text-xs ${
                  isLight ? 'bg-slate-50/80 border-slate-200 text-slate-600' : 'bg-slate-950/80 border-slate-800 text-slate-400'
                }`}
              >
                <span>Remote Ready Standards Verified</span>
                <a
                  href="https://github.com/Samaritancss?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Review Code Repos →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
