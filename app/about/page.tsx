"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

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

const values = [
  {
    icon: HeartIcon,
    title: "Dignity First",
    description:
      "Everyone deserves to be treated with respect, regardless of their past. We build products that honor people's humanity.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: LightBulbIcon,
    title: "Opportunity for All",
    description:
      "We believe talent is universal, but opportunity isn't. We're working to change that by connecting talent with employers who see potential.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: UserGroupIcon,
    title: "Community Powered",
    description:
      "Real change happens through connection. Our mentor network and support community ensure no one walks this path alone.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: SparklesIcon,
    title: "Technology for Good",
    description:
      "AI should help people, not replace them. We use technology to remove barriers and amplify human potential.",
    color: "from-primary-500 to-accent-600",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Former public defender who saw too many clients struggle to find work after serving their time.",
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "AI engineer who believes technology should create opportunities, not barriers.",
  },
  {
    name: "Dr. Angela Martinez",
    role: "Head of Impact",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Criminal justice reform advocate and researcher with 15 years in reentry programs.",
  },
  {
    name: "James Thompson",
    role: "Head of Partnerships",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Formerly incarcerated professional who now helps companies build fair-chance hiring programs.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Started with a mission to help returning citizens find employment",
  },
  {
    year: "2022",
    title: "1,000 Placements",
    description: "Helped our first thousand users land jobs",
  },
  {
    year: "2023",
    title: "Voice Resume Launch",
    description: "Launched AI-powered voice resume builder in 9 languages",
  },
  {
    year: "2024",
    title: "10,000+ Lives Changed",
    description: "Crossed 10,000 successful job placements",
  },
  {
    year: "2025",
    title: "850+ Employer Partners",
    description: "Built the largest network of fair-chance employers",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-200/30 to-accent-200/20 rounded-full blur-[100px] -translate-y-1/2" />

        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-5 py-2 mb-8"
            >
              <HeartIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Our Mission
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="heading-1 text-gray-900 mb-8"
            >
              Building Bridges to
              <span className="block gradient-text">Second Chances</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="body-large max-w-3xl mx-auto"
            >
              We started JobSeek AI because we believe everyone deserves the
              opportunity to build a meaningful career — regardless of their
              past. Our AI-powered platform removes barriers and connects
              talented individuals with employers who value potential over
              history.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Person starting fresh"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-3 text-gray-900 mb-6">
                The Problem We're Solving
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Every year, over 600,000 people are released from
                  incarceration in the United States. The vast majority want to
                  work, rebuild their lives, and contribute to their
                  communities.
                </p>
                <p>
                  But the barriers are immense. Background checks, gaps in
                  employment history, outdated skills, and social stigma make
                  finding meaningful work nearly impossible. Without employment,
                  recidivism rates skyrocket.
                </p>
                <p className="font-semibold text-gray-900">
                  We're changing that narrative — one second chance at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-gray-900 mb-6"
            >
              Our Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large">
              Everything we build is guided by these core principles.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 card-hover"
              >
                <div
                  className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg mb-6`}
                >
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[128px]" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-white mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large text-gray-300">
              From a small idea to a movement that's changed thousands of lives.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                      <span className="text-sm font-bold text-primary-400">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex h-4 w-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 ring-4 ring-gray-900 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="heading-2 text-gray-900 mb-6"
            >
              Meet Our Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-large">
              A diverse team united by a shared mission to create opportunities.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6" />
                  <div className="relative h-full w-full rounded-3xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Join Our Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large max-w-2xl mx-auto mb-10"
            >
              Whether you're looking to rebuild your career or want to help
              create opportunities for others, there's a place for you here.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/signup" className="btn-primary text-lg group">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/careers" className="btn-secondary">
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
