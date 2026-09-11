"use client";

import { useState } from "react";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import type { ConceptSlug } from "@/lib/types";
import { Section } from "@/components/sections/Section";

export function TourForm({ concept }: { concept: ConceptSlug }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    const form = new FormData(formEl);
    const payload = {
      concept,
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      program: String(form.get("program") || ""),
      childAge: String(form.get("childAge") || ""),
      startWindow: String(form.get("startWindow") || ""),
      notes: String(form.get("notes") || ""),
      source: "rcc4kids",
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
      setMessage("Thank you — a member of our team will be in touch to schedule your tour.");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please call us.");
    }
  }

  return (
    <Section id="tour" className="bg-[var(--tone-fg)] text-white">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          Schedule a tour
        </p>
        <h2 className="mt-3 font-display text-3xl">{business.ctas.primary}</h2>
        <p className="mt-3 max-w-xl text-sm text-white/70">
          In-person or virtual. We&apos;ll answer questions about availability, tuition, and start
          dates.
        </p>
      </ClipReveal>

      {status === "success" ? (
        <div
          data-form-success
          className="mt-8 rounded-xl border border-white/20 bg-white/10 p-6 text-sm"
          role="status"
        >
          {message}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1 block text-white/70">Parent name</span>
            <input
              name="name"
              required
              className="min-h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-white/70">Email</span>
            <input
              name="email"
              type="email"
              required
              className="min-h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-white/70">Phone</span>
            <input
              name="phone"
              type="tel"
              className="min-h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-white/70">Child&apos;s age / program</span>
            <select
              name="program"
              required
              className="min-h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white"
            >
              <option value="">Select program</option>
              {business.programs.map((p) => (
                <option key={p.slug} value={p.slug} className="text-black">
                  {p.name} ({p.ages})
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-white/70">Child&apos;s age (optional)</span>
            <input
              name="childAge"
              className="min-h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-white/70">Desired start</span>
            <input
              name="startWindow"
              placeholder="e.g. Fall 2026"
              className="min-h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3 text-white"
            />
          </label>
          <label className="block text-sm md:col-span-2">
            <span className="mb-1 block text-white/70">Notes</span>
            <textarea
              name="notes"
              rows={3}
              className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="submit"
              data-submit-tour
              disabled={status === "loading"}
              className="inline-flex min-h-11 min-w-44 items-center justify-center rounded-full bg-[var(--tone-accent)] px-8 text-sm font-semibold text-white disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Request tour"}
            </button>
            {status === "error" && (
              <p className="mt-3 text-sm text-red-200" role="alert">{message}</p>
            )}
          </div>
        </form>
      )}
    </Section>
  );
}
