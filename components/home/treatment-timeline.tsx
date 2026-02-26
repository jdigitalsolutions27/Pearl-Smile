"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { timelineSteps } from "@/data/business";

export function TreatmentTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-3 md:grid-cols-6">
        {timelineSteps.map((step, index) => (
          <button
            type="button"
            key={step.title}
            onClick={() => setActive(index)}
            className={`rounded-xl border px-3 py-3 text-left text-xs transition md:text-sm ${
              active === index
                ? "border-cyan-500 bg-cyan-500 text-white"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-200"
            }`}
          >
            <span className="block text-[11px] uppercase tracking-[0.2em] opacity-80">
              Step {index + 1}
            </span>
            <span className="block font-semibold">{step.title}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={timelineSteps[active].title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-teal-50 p-6"
      >
        <h3 className="text-xl font-semibold text-slate-900">{timelineSteps[active].title}</h3>
        <p className="mt-3 text-sm text-slate-700">{timelineSteps[active].description}</p>
      </motion.div>
    </div>
  );
}
