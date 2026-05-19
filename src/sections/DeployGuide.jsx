// src/sections/DeployGuide.jsx
import { useEffect, useState } from "react";
import { ChevronRight, Server, Globe, Code, Shield } from "lucide-react";

const iconMap = {
  server: Server,
  globe: Globe,
  code: Code,
  shield: Shield,
};

export function DeployGuide({ steps = [], isLoading = false }) {
  const [activeGuideStep, setActiveGuideStep] = useState(0);
  useEffect(() => {
    setActiveGuideStep(0);
  }, [steps]);

  const clampedIndex = Math.min(
    activeGuideStep,
    Math.max((steps?.length || 1) - 1, 0)
  );
  const activeStep = steps?.[clampedIndex];
  const ActiveIcon = activeStep ? iconMap[activeStep.icon] : null;
  const bullets = activeStep?.bullets ?? [];

  if (!steps || steps.length === 0) {
    return (
      <section id="guide" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              // 04 — Guide
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Deployment Guideline
            </h2>
            <p className="text-slate-400">
              {isLoading
                ? "Loading deployment steps..."
                : "No deployment steps available yet."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="guide" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Deployment Guideline
          </h2>
          <p className="text-slate-400">
            A quick reference guide for setting up a production-ready web
            server with HTTPS.
            <br className="hidden sm:block" />
            <span className="text-sm opacity-75">
              Click the tabs below to navigate the workflow.
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Step Navigation */}
          <div className="md:w-1/3 space-y-2">
            {steps.map((step, idx) => {
              const Icon = iconMap[step.icon];
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveGuideStep(idx)}
                  className={`w-full text-left px-4 py-4 rounded-lg flex items-center gap-3 transition-all ${
                    activeGuideStep === idx
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                  }`}
              >
                <span
                  className={`${
                    activeGuideStep === idx ? "text-white" : "text-slate-500"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </span>
                <span className="font-medium text-sm">{step.title}</span>
                {activeGuideStep === idx && (
                  <ChevronRight className="ml-auto w-4 h-4" />
                )}
                </button>
              );
            })}
          </div>

          {/* Step Content */}
          <div className="md:w-2/3 bg-slate-900/50 border border-slate-800 rounded-xl p-6 min-h-[400px]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
              <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                {ActiveIcon && <ActiveIcon className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-bold text-white">
                {activeStep.title}
              </h3>
            </div>
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-3 text-slate-300 text-sm">
                <p>{activeStep.summary}</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  {bullets.map((bullet) => (
                    <li key={bullet.id}>
                      {bullet.segments.map((segment, segmentIdx) =>
                        segment.type === "code" ? (
                          <code
                            key={segmentIdx}
                            className="px-1.5 py-0.5 bg-slate-800/60 rounded text-xs text-slate-200"
                          >
                            {segment.value}
                          </code>
                        ) : (
                          <span key={segmentIdx}>{segment.value}</span>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
