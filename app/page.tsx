"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  MicrophoneIcon,
  SparklesIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowRightIcon,
  CheckIcon,
  PlayIcon,
  StarIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Feature data
const features = [
  {
    icon: MicrophoneIcon,
    title: "Voice Resume Builder",
    description:
      "Turn prison work programs, certifications, and life skills into a professional resume. Just speak—our AI does the writing for you.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    color: "from-primary-600 to-primary-800",
  },
  {
    icon: SparklesIcon,
    title: "Reentry-First Job Matching",
    description:
      "Our AI matches you with employers who actively hire returning citizens. No more applications into the void—these companies want you.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    color: "from-primary-600 to-primary-800",
  },
  {
    icon: UserGroupIcon,
    title: "Find Your Mentor",
    description:
      "Connect with experienced mentors who can guide your career journey. Get real advice, build your network, and stay accountable on your path to success.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    color: "from-primary-600 to-primary-800",
  },
  {
    icon: AcademicCapIcon,
    title: "Reentry Skills Training",
    description:
      "Free courses designed for returning citizens—from workplace readiness to industry certifications that lead to real jobs.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    color: "from-primary-600 to-primary-800",
  },
  {
    icon: TrophyIcon,
    title: "Track Your Reentry Progress",
    description:
      "Celebrate every milestone—from completing training to landing interviews. Stay motivated on your path to breaking the cycle.",
    image:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=800&q=80",
    color: "from-primary-600 to-primary-800",
  },
  {
    icon: BriefcaseIcon,
    title: "Employers",
    description:
      "850+ employers committed to fair-chance hiring. They evaluate your skills first, not your record. Your past doesn't disqualify you here.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    color: "from-primary-600 to-primary-800",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "I served 12 years and came out expecting rejection. JobSeek connected me with employers who practice what they preach. Three years out, zero violations, and I'm training new hires. Reentry done right.",
    author: "Marcus J.",
    role: "Warehouse Supervisor",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
    company: "Dave's Killer Bread",
  },
  {
    quote:
      "Coming out after 5 years, I couldn't even write a resume. The voice feature let me talk about my kitchen work inside, and now I'm feeding people in a hospital instead of a prison. That's redemption.",
    author: "Sarah M.",
    role: "Food Service Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    company: "Greyston Bakery",
  },
  {
    quote:
      "My mentor did 8 years himself before becoming a success story. He understood parole meetings, housing struggles, all of it. Having someone who's been there made all the difference in staying out for good.",
    author: "James T.",
    role: "HVAC Technician",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    company: "Nehemiah Manufacturing",
  },
];

// Steps
const steps = [
  {
    number: "01",
    title: "Share Your Journey",
    description:
      "Tell us about work programs, certifications, and skills you gained inside. Voice or text—whatever feels right.",
    icon: MicrophoneIcon,
  },
  {
    number: "02",
    title: "Build Your Future Resume",
    description:
      "Our AI transforms your experience into a professional resume that focuses on your abilities, not your record.",
    icon: SparklesIcon,
  },
  {
    number: "03",
    title: "Connect with Reentry Employers",
    description:
      "Get matched with employers who actively hire returning citizens. No more wasted applications.",
    icon: BriefcaseIcon,
  },
  {
    number: "04",
    title: "Break the Cycle",
    description:
      "With a stable job, mentor support, and community—build the life that keeps you free for good.",
    icon: TrophyIcon,
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-200/40 via-accent-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-200/30 via-primary-200/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-wide relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="heading-1 text-gray-900 mb-8"
              >
                Break the Cycle.
                <span className="block gradient-text">Build Your Future.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={fadeInUp}
                className="body-large max-w-xl mx-auto lg:mx-0 mb-10"
              >
                The #1 platform for prison reentry success. AI-powered job
                matching, formerly incarcerated mentors, and employers who hire
                returning citizens. Reduce recidivism. Rebuild lives.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
              >
                <Link
                  href="https://jobseek.works/signup"
                  className="btn-primary text-lg group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="btn-secondary flex items-center gap-2"
                >
                  <PlayIcon className="h-5 w-5 text-primary-600" />
                  See How It Works
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-purple-600" />
                  <span>Free for Returning Citizens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-purple-600" />
                  <span>850+ Employers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-purple-600" />
                  <span>87% Stay Out for Good</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative aspect-[4/5] max-w-lg mx-auto">
                {/* Main Image */}
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary-500/20">
                  <Image
                    src="/manchange.png"
                    alt="Man transforming from prison to professional success"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                      <CheckIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Resume Created!
                      </p>
                      <p className="text-xs text-gray-500">
                        Professional format ready
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -right-8 top-1/2 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <BriefcaseIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        12 Jobs Matched
                      </p>
                      <p className="text-xs text-gray-500">
                        Fair-chance employers
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white rounded-2xl p-4 shadow-xl shadow-gray-200/50 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 ring-2 ring-white flex items-center justify-center text-white text-xs font-bold">
                        M
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 ring-2 ring-white flex items-center justify-center text-white text-xs font-bold">
                        S
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 ring-2 ring-white flex items-center justify-center text-white text-xs font-bold">
                        J
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        500+ hired this month
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-5 py-2 mb-6"
            >
              <SparklesIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Built for Successful Reentry
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-gray-900 mb-6"
            >
              Everything You Need to
              <span className="block gradient-text">Never Go Back</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large">
              Employment is the #1 factor in reducing recidivism. We give
              returning citizens the tools, connections, and support to build
              stable careers and stay free.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>
                <div className="relative p-8 -mt-20">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-5`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Resume Highlight */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-8">
                <MicrophoneIcon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white/90">
                  Built for Returning Citizens
                </span>
              </div>
              <h2 className="heading-2 text-white mb-6">
                Your Prison Experience
                <span className="block text-primary-200">
                  Becomes Your Resume.
                </span>
              </h2>
              <p className="body-large text-white/80 mb-8">
                Kitchen work, maintenance, vocational programs, certifications
                earned inside—it all counts. Just talk about what you did, and
                our AI builds a professional resume that helps employers see
                your value, not your record.
              </p>

              {/* Languages */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "🇺🇸 English",
                  "🇪🇸 Spanish",
                  "🇫🇷 French",
                  "🇨🇳 Mandarin",
                  "🇯🇵 Japanese",
                  "🇩🇪 German",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="bg-white/10 rounded-full px-4 py-2 text-sm text-white/90"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Try Voice Resume Free
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center animate-pulse">
                    <MicrophoneIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      Recording...
                    </p>
                    <p className="text-white/60 text-sm">
                      "Inside, I ran the kitchen crew for 4 years..."
                    </p>
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex items-center justify-center gap-1 h-20 mb-8">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-white/60 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 60 + 20}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="bg-white/10 rounded-2xl p-5 space-y-3">
                  <p className="text-sm text-white/60 mb-4">
                    AI is building your resume:
                  </p>
                  {[
                    "Kitchen work program → Food Service Experience",
                    "GED completion noted",
                    "Vocational welding certification added",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <CheckIcon className="h-5 w-5 text-purple-300 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-gray-50">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 mb-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-gray-700">
                Your Path to Staying Free
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-gray-900 mb-6"
            >
              Four Steps to
              <span className="block gradient-text">Breaking the Cycle</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large">
              12,500+ returning citizens have used this exact process to find
              stable employment and stay out for good.
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-32 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 h-full hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500">
                    <div className="relative mb-6">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 text-6xl font-bold text-primary-100">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-accent-50 border border-accent-200 rounded-full px-5 py-2 mb-6"
            >
              <StarIcon className="h-5 w-5 text-accent-600" />
              <span className="text-sm font-semibold text-accent-700">
                Reentry Success Stories
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-gray-900 mb-6"
            >
              From Prison to
              <span className="block gradient-text">Purpose</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large">
              Real stories from returning citizens who broke the cycle.
              Employment changed everything. It can for you too.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 card-hover"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover ring-4 ring-primary-100"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-primary-600 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employers Section */}
      <section
        id="employers"
        className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-8">
                <BriefcaseIcon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white/90">
                  For Fair-Chance Employers
                </span>
              </div>
              <h2 className="heading-2 text-white mb-6">
                Help Reduce Recidivism.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">
                  Hire Returning Citizens.
                </span>
              </h2>
              <p className="body-large text-gray-300 mb-8">
                Employment reduces recidivism by up to 50%. When you hire
                returning citizens, you're not just filling roles—you're
                breaking cycles of incarceration and transforming communities.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Reduce recidivism in your community",
                  "WOTC tax credits up to $9,600 per hire",
                  "78% lower turnover than average hires",
                  "Pre-screened, job-ready returning citizens",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <CheckIcon className="h-6 w-6 text-purple-300 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/employers"
                className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Partner With Us
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Employer shaking hands with returning citizen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <TrophyIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Fair-Chance Certified
                    </p>
                    <p className="text-xs text-gray-500">850+ companies</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support / Mission Section */}
      <section
        id="support"
        className="section-padding bg-white relative overflow-hidden"
      >
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-[100px]" />
              </div>

              <div className="relative z-10">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-8"
                >
                  <span className="text-sm font-semibold text-white/90">
                    🎯 Our Mission
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Help Us Break the Cycle for
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">
                    10,000 Returning Citizens
                  </span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/80 mb-10 max-w-2xl"
                >
                  Every year, 600,000 people leave prison—and within 3 years,
                  two-thirds return. Employment is proven to cut recidivism by
                  50%. Your donation helps us provide free job matching, resume
                  building, and mentorship to those who need it most.
                </motion.p>

                {/* Progress Section */}
                <motion.div variants={fadeInUp} className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">
                      3,000 of 10,000 reentries supported
                    </span>
                    <span className="text-accent-300 font-bold text-lg">
                      30%
                    </span>
                  </div>
                  <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="h-full bg-gradient-to-r from-accent-400 to-accent-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                  <p className="text-white/60 text-sm mt-3">
                    Join 1,200+ donors helping us reach our goal
                  </p>
                </motion.div>

                {/* Impact Stats */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-white/10"
                >
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      $50
                    </p>
                    <p className="text-white/60 text-sm">Builds one resume</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      $150
                    </p>
                    <p className="text-white/60 text-sm">3 months mentorship</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      $500
                    </p>
                    <p className="text-white/60 text-sm">
                      Full reentry support
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <Link
                    href="/support"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center"
                  >
                    <HeartIcon className="h-5 w-5 text-rose-500" />
                    Support Now
                  </Link>
                  <Link
                    href="/about#mission"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors"
                  >
                    Learn more about our impact
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-200/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-200/50 rounded-full blur-[150px]" />

        <div className="container-tight relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-gray-900 mb-6"
            >
              You Served Your Time.
              <span className="block gradient-text">
                Now Reclaim Your Life.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large max-w-2xl mx-auto mb-10"
            >
              12,500+ returning citizens have used JobSeek AI to find employment
              and stay free. Stable work breaks the cycle. Your reentry success
              story starts today.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="https://jobseek.works/signup"
                className="btn-primary text-lg group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey Free
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="https://jobseek.works/signup"
                className="btn-secondary"
              >
                I'm an Employer
              </Link>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-sm text-gray-500"
            >
              No credit card required. 100% free for candidates. Always.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
