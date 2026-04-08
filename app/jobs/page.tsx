"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
  ExclamationCircleIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

interface JobResult {
  title: string;
  company_name: string;
  location: string;
  via: string;
  description: string;
  job_highlights?: { title: string; items: string[] }[];
  detected_extensions?: {
    posted_at?: string;
    schedule_type?: string;
    work_from_home?: boolean;
    salary?: string;
  };
  related_links?: { link: string; text: string }[];
  share_link?: string;
  apply_options?: { title: string; link: string }[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const REENTRY_SUGGESTIONS = [
  "warehouse associate",
  "customer service representative",
  "truck driver",
  "construction worker",
  "food service worker",
  "security guard",
  "landscaping",
  "manufacturing technician",
];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState<JobResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobResult | null>(null);
  const [chips, setChips] = useState<{ text: string; link: string }[]>([]);

  const search = useCallback(async (q: string, loc: string) => {
    if (!q.trim()) return;
    setLoading(true);
    setError("");
    setHasSearched(true);
    setSelectedJob(null);

    try {
      const params = new URLSearchParams({ q: q.trim() });
      if (loc.trim()) params.set("location", loc.trim());

      const res = await fetch(`/api/jobs?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Search failed");
      }

      setJobs(data.jobs ?? []);
      setChips(data.chips ?? []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(query, location);
  };

  const handleSuggestion = (s: string) => {
    setQuery(s);
    search(s, location);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pt-28 pb-20">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="text-center px-4 mb-10"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-6"
        >
          <SparklesIcon className="h-4 w-4" />
          Reentry-Friendly Job Search
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display"
        >
          Find Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
            Opportunity
          </span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-600 max-w-xl mx-auto"
        >
          Search thousands of jobs from employers who hire returning citizens.
        </motion.p>
      </motion.div>

      {/* Search Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto px-4 mb-8"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-3 flex flex-col sm:flex-row gap-3"
        >
          <div className="flex items-center gap-3 flex-1 bg-gray-50 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary-500 transition">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, keyword, or company"
              className="bg-transparent w-full text-gray-900 placeholder-gray-400 text-sm outline-none"
            />
          </div>
          <div className="flex items-center gap-3 sm:w-52 bg-gray-50 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary-500 transition">
            <MapPinIcon className="h-5 w-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, state, or remote"
              className="bg-transparent w-full text-gray-900 placeholder-gray-400 text-sm outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="btn-primary shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center gap-2">
              {loading ? (
                <>
                  <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching…
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  Search Jobs
                </>
              )}
            </span>
          </button>
        </form>

        {/* Quick suggestions */}
        {!hasSearched && (
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {REENTRY_SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="text-sm px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Filter chips from SerpAPI */}
        {chips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <FunnelIcon className="h-4 w-4 text-gray-400 mt-1 shrink-0" />
            {chips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSuggestion(chip.text)}
                className="text-sm px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 hover:bg-primary-100 transition-all"
              >
                {chip.text}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto px-4 mb-6"
          >
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
              <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4">
        {hasSearched && !loading && jobs.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <BriefcaseIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No jobs found</p>
            <p className="text-sm mt-1">Try a different keyword or location</p>
          </motion.div>
        )}

        {jobs.length > 0 && (
          <div className="flex gap-6">
            {/* Job list */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex-1 space-y-3 min-w-0"
            >
              <p className="text-sm text-gray-500 mb-4">
                Showing{" "}
                <span className="font-semibold text-gray-700">
                  {jobs.length}
                </span>{" "}
                results
                {query && (
                  <>
                    {" "}
                    for{" "}
                    <span className="font-semibold text-gray-700">
                      "{query}"
                    </span>
                  </>
                )}
                {location && (
                  <>
                    {" "}
                    in{" "}
                    <span className="font-semibold text-gray-700">
                      {location}
                    </span>
                  </>
                )}
              </p>

              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  onClick={() => setSelectedJob(job)}
                  className={`bg-white rounded-2xl border p-5 cursor-pointer transition-all hover:shadow-md hover:border-primary-300 ${
                    selectedJob === job
                      ? "border-primary-400 shadow-md ring-1 ring-primary-300"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shrink-0">
                      <BuildingOfficeIcon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {job.company_name}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        {job.location && (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPinIcon className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                        )}
                        {job.detected_extensions?.schedule_type && (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <ClockIcon className="h-3.5 w-3.5" />
                            {job.detected_extensions.schedule_type}
                          </span>
                        )}
                        {job.detected_extensions?.work_from_home && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                            Remote
                          </span>
                        )}
                        {job.detected_extensions?.salary && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">
                            {job.detected_extensions.salary}
                          </span>
                        )}
                      </div>
                    </div>
                    {job.detected_extensions?.posted_at && (
                      <span className="text-xs text-gray-400 shrink-0">
                        {job.detected_extensions.posted_at}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs text-gray-400">via {job.via}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Job detail panel */}
            <AnimatePresence>
              {selectedJob && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:block w-96 shrink-0"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="font-bold text-gray-900 text-lg leading-snug">
                          {selectedJob.title}
                        </h2>
                        <p className="text-primary-600 font-medium mt-1">
                          {selectedJob.company_name}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="text-gray-400 hover:text-gray-600 text-lg leading-none shrink-0 p-1"
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedJob.location && (
                        <span className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                          <MapPinIcon className="h-3.5 w-3.5" />
                          {selectedJob.location}
                        </span>
                      )}
                      {selectedJob.detected_extensions?.schedule_type && (
                        <span className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                          <ClockIcon className="h-3.5 w-3.5" />
                          {selectedJob.detected_extensions.schedule_type}
                        </span>
                      )}
                      {selectedJob.detected_extensions?.work_from_home && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                          Remote
                        </span>
                      )}
                      {selectedJob.detected_extensions?.salary && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                          {selectedJob.detected_extensions.salary}
                        </span>
                      )}
                    </div>

                    {/* Apply buttons */}
                    {selectedJob.apply_options &&
                    selectedJob.apply_options.length > 0 ? (
                      <div className="space-y-2 mb-6">
                        {selectedJob.apply_options.slice(0, 3).map((opt, i) => (
                          <a
                            key={i}
                            href={opt.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                              i === 0
                                ? "bg-primary-600 text-white hover:bg-primary-700"
                                : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                            Apply on {opt.title}
                          </a>
                        ))}
                      </div>
                    ) : selectedJob.share_link ? (
                      <a
                        href={selectedJob.share_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-all mb-6"
                      >
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        View Job
                      </a>
                    ) : null}

                    {/* Highlights */}
                    {selectedJob.job_highlights?.map((section, i) => (
                      <div key={i} className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">
                          {section.title}
                        </h3>
                        <ul className="space-y-1">
                          {section.items.map((item, j) => (
                            <li
                              key={j}
                              className="text-xs text-gray-600 flex items-start gap-2"
                            >
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Description */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 mb-2">
                        Description
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                        {selectedJob.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
