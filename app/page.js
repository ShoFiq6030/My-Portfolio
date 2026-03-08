"use client";

import { useState, useEffect, Suspense } from 'react';
import NavBar from '@/components/common/NavBar';
import Hero from '@/components/homepage/Hero';
import Footer from '@/components/common/Footer';
import Experience from '@/components/aboutpage/Experience';
import ContactForm from '@/components/contactpage/ContactForm';
import ProjectItems from '@/components/projectpage/ProjectItems';
import SkillsDetails from '@/components/skillspage/SkillsDetails';
import SkillsItems from '@/components/skillspage/SkillsItems';
import { useTheme } from '@/components/common/ThemeProvider';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact', 'more'];

  useEffect(() => {
    setIsMounted(true);

    // Intersection Observer for section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    // Also listen for scroll events as a fallback
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use both methods for maximum compatibility
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });

      // Alternative method using window.scrollTo for better browser support
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetScroll = rect.top + scrollTop - 80; // Account for navbar height

        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="container mx-auto px-4 pt-20 md:pt-24">
        {/* Hero Section */}
        <section
          id="hero"
          className="h-[550px] flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 "
        >
          <div className="w-full fade-in-up">
            <Hero />
          </div>
        </section>

        {/* Spacer */}
        {/* <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24"></div> */}

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 slide-in-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                About Me
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 slide-in-left">
                <div className="space-y-4 sm:space-y-5 text-base sm:text-lg">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hello! I am <span className="font-bold text-blue-600 dark:text-blue-400">Shofiq</span>, a passionate web developer with a keen interest in creating dynamic and responsive web applications.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    In addition to web development, I am also a <span className="font-bold text-purple-600 dark:text-purple-400">System Admin</span> <span>and </span><span className="font-bold text-purple-600 dark:text-purple-400">Networking Expert</span>, with a strong knowledge in <span className="font-bold text-purple-600 dark:text-purple-400">Linux systems</span>.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    When I am not coding, you can find me gaming or exploring the latest tech trends.
                  </p>
                </div>
              </div>

              <div className="slide-in-right">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 sm:p-1.5 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 pulse-glow">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 md:p-8 h-full">
                    <Experience />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacer */}
        {/* <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24"></div> */}

        {/* Skills Section */}
        <section
          id="skills"
          className=" px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-16 md:py-20 "
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 slide-in-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
                My Skills
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <SkillsDetails />
              <div className="mt-6 sm:mt-8 md:mt-10">
                <SkillsItems />
              </div>
            </div>
          </div>
        </section>

        {/* Spacer */}
        {/* <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24"></div> */}

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 slide-in-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                My Projects
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <ProjectItems />
            </div>
          </div>
        </section>

        {/* Spacer */}
        {/* <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24"></div> */}

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 slide-in-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 dark:from-blue-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Get In Touch
              </h1>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl">
                {`Have a project in mind? Let's work together!`}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl p-1 sm:p-1.5 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 slide-in-right">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 sm:p-7 md:p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Spacer */}
        {/* <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24"></div> */}

        {/* More Section */}
        {/* <section
          id="more"
          className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto text-center slide-in-left">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                More Content Coming Soon...
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-7 md:mb-8">
                Stay tuned for exciting updates and new projects!
              </p>
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
