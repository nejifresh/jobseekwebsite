"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#stories", label: "Success Stories" },
  { href: "/#employers", label: "For Employers" },
  { href: "/#donate", label: "Donate" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-200/50"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="JobSeek AI Logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="btn-ghost text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://jobseek.works/loginPage"
                className="btn-ghost"
              >
                Sign In
              </Link>
              <Link
                href="https://jobseek.works"
                className="btn-primary relative z-10"
              >
                <span className="relative z-10">Get Started Free</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-700" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-700" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
                <Link
                  href="https://jobseek.works/loginPage"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-secondary text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="https://jobseek.works"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center"
                >
                  <span className="relative z-10">Get Started Free</span>
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
