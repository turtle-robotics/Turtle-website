/**
 * Sponsorship Page Component
 *
 * Information and contact page for potential corporate sponsors.
 * Features:
 * - Sponsorship tier packages (Platinum, Gold, Silver, Bronze)
 * - Benefits for each tier (logo placement, event access, recognition)
 * - Why sponsor TURTLE Robotics (impact, reach, community)
 * - Contact form modal for sponsor inquiries
 * - Email popup option for direct contact
 * - Statistics on student reach and project impact
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SponsorContactForm from "../components/SponsorContactForm";

gsap.registerPlugin(ScrollTrigger);

const Sponsorship = () => {
  const heroRef = useRef(null);
  // Modal states
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Hero animations
    gsap.fromTo(
      hero.querySelectorAll("h1 span"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      hero.querySelector(".hero-subtitle"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      },
    );

    // Animate sections on scroll
    const sections = document.querySelectorAll(".sponsor-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );
    });
  }, []);

  const sponsorshipTiers = [
    {
      name: "Bronze Sponsor",
      amount: "$500",
      color: "tier-bronze",
      benefits: [
        "Logo placement on website",
        "Recognition at events",
        "Showcase Advertisement",
        "Social media post",
      ],
    },
    {
      name: "Silver Sponsor",
      amount: "$1,500",
      color: "tier-silver",
      benefits: [
        "All Bronze benefits",
        "Resume Bank",
        "Recuiter Paneling",
        "Annual report recognition",
        "Exclusive workshop access",
      ],
    },
    {
      name: "Gold Sponsor",
      amount: "$3,000",
      color: "tier-gold",
      benefits: [
        "All Bronze benefits",
        "All Silver benefits",
        "Direct team collaboration",
        "Priority recruitment access",
        "Custom research opportunities",
        "Recruiter Table at Showcase",
      ],
    },
    {
      name: "Platinum Sponsor",
      amount: "$5,000",
      color: "tier-platinum",
      benefits: [
        "All Bronze benefits",
        "All Silver benefits",
        "All Gold benefits",
        "Logo on an Advanced Project",
        "Custom internship programs",
        "Industry conference speaking",
        "Patent collaboration rights",
      ],
    },
  ];

  const impactStats = [
    { number: "350++", label: "Annual Members" },
    { number: "20+", label: "Projects Running" },
    { number: "4", label: "Industry Partners" },
    { number: "12", label: "Years of Innovation" },
  ];

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("turtlerobotics@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-primary-2 opacity-40"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <div className="glass-card p-16 rounded-3xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-secondary-3 mb-8">
              <span className="block">SPONSOR</span>
              <span className="block text-primary-1">TURTLE</span>
            </h1>

            <p className="hero-subtitle text-xl md:text-2xl font-normal tracking-wide text-secondary-2 mb-12 max-w-3xl mx-auto">
              Partner with the next generation of robotics innovators. Support
              cutting-edge research and shape the future of autonomous systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#sponsorship-tiers"
                className="bg-gradient-basic text-gradient-foreground px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                View Sponsorship Tiers
              </a>
              <button
                onClick={() => setShowContactForm(true)}
                className="border-2 border-primary-1 text-primary-1 px-8 py-4 rounded-xl font-medium hover:bg-primary-1 hover:text-primary-2 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-1 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-normal text-secondary-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-secondary-3 mb-8">
              Why Sponsor <span className="text-primary-1">TURTLE</span>?
            </h2>
            <p className="text-xl font-light text-secondary-2 max-w-3xl mx-auto">
              Join us in advancing robotics technology while gaining access to
              top engineering talent and innovative research opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="sponsor-section text-center p-8 rounded-2xl bg-gradient-to-br from-surface to-surface/80 border border-border">
              <div className="w-16 h-16 bg-gradient-basic rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gradient-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-secondary-3 mb-4">
                Innovation Access
              </h3>
              <p className="text-secondary-2">
                Get early access to cutting-edge robotics research and potential
                patent opportunities.
              </p>
            </div>

            <div className="sponsor-section text-center p-8 rounded-2xl bg-gradient-to-br from-surface to-surface/80 border border-border">
              <div className="w-16 h-16 bg-gradient-basic rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gradient-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-secondary-3 mb-4">
                Talent Pipeline
              </h3>
              <p className="text-secondary-2">
                Connect with top engineering students for internships and
                full-time positions.
              </p>
            </div>

            <div className="sponsor-section text-center p-8 rounded-2xl bg-gradient-to-br from-surface to-surface/80 border border-border">
              <div className="w-16 h-16 bg-gradient-basic rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-gradient-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-secondary-3 mb-4">
                Brand Recognition
              </h3>
              <p className="text-secondary-2">
                Enhance your brand visibility among future engineers and
                industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="sponsorship-tiers" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-secondary-3 mb-8">
              Sponsorship <span className="text-primary-1">Tiers</span>
            </h2>
            <p className="text-xl font-light text-secondary-2 max-w-3xl mx-auto">
              Choose the sponsorship level that best fits your organization's
              goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="sponsor-section group">
                <div
                  className={`${tier.color} p-8 rounded-2xl shadow-lg transition-shadow duration-300`}
                >
                  <h3 className="text-2xl font-light mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-6">{tier.amount}</div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-primary-1/80 mr-3 mt-1">✓</span>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-secondary-3 mb-8">
              Current <span className="text-primary-1">Projects</span>
            </h2>
            <p className="text-xl font-light text-secondary-2 max-w-3xl mx-auto">
              Your sponsorship directly supports these innovative robotics
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="sponsor-section p-8 rounded-2xl bg-gradient-to-br from-surface to-surface/80 border border-border">
              <h3 className="text-2xl font-light text-secondary-3 mb-4">
                SNOUT - Olfactory Sensing Robot
              </h3>
              <p className="text-secondary-2 mb-4">
                Advanced robotic vehicle equipped with olfactory sensors for
                chemical detection and identification.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent/10 text-primary-1 px-3 py-1 rounded-full">
                  IMS Sensors
                </span>
                <span className="text-xs bg-accent/10 text-primary-1 px-3 py-1 rounded-full">
                  Machine Learning
                </span>
                <span className="text-xs bg-accent/10 text-primary-1 px-3 py-1 rounded-full">
                  Robotics
                </span>
              </div>
            </div>

            <div className="sponsor-section p-8 rounded-2xl bg-gradient-to-br from-surface to-surface/80 border border-border">
              <h3 className="text-2xl font-light text-secondary-3 mb-4">
                Autonomous Navigation Systems
              </h3>
              <p className="text-secondary-2 mb-4">
                Development of advanced pathfinding and obstacle avoidance
                algorithms for mobile robots.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent/10 text-primary-1 px-3 py-1 rounded-full">
                  Computer Vision
                </span>
                <span className="text-xs bg-accent/10 text-primary-1 px-3 py-1 rounded-full">
                  SLAM
                </span>
                <span className="text-xs bg-accent/10 text-primary-1 px-3 py-1 rounded-full">
                  Control Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight text-secondary-3 mb-8">
            Ready to <span className="text-primary-1">Partner</span>?
          </h2>
          <p className="text-xl font-light text-secondary-2 mb-8 max-w-2xl mx-auto">
            Let's discuss how your organization can support the future of
            robotics innovation while gaining valuable benefits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-basic text-gradient-foreground px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Contact Our Team
            </button>
            <button
              onClick={() => setShowEmailPopup(true)}
              className="border-2 border-primary-1 text-primary-1 px-8 py-4 rounded-xl font-medium hover:bg-accent hover:text-gradient-foreground transition-colors duration-300"
            >
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-8 overflow-y-auto"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="relative bg-background rounded-3xl p-8 md:p-12 max-w-3xl w-full mx-4 my-8 shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-secondary-2 hover:text-secondary-3 transition-colors z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-basic rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-gradient-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-extralight text-secondary-3 mb-3">
                Get In Touch
              </h3>
              <p className="text-secondary-2 font-light">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <SponsorContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}

      {/* Email Popup Modal */}
      {showEmailPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={() => setShowEmailPopup(false)}
        >
          <div
            className="relative bg-background rounded-3xl p-10 max-w-lg mx-4 shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 text-secondary-2 hover:text-secondary-3 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-basic rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-gradient-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-extralight text-secondary-3 mb-3 text-center">
              Get In Touch
            </h3>
            <p className="text-secondary-2 mb-8 text-center font-light">
              We'd love to hear from you! Reach out to discuss sponsorship
              opportunities.
            </p>

            {/* Email display */}
            <div className="bg-background rounded-xl p-6 mb-6 border-2 border-border">
              <p className="text-xs font-medium text-secondary-2 mb-2 uppercase tracking-wide text-center">
                Email Address
              </p>
              <p className="text-xl font-medium text-primary-1 text-center break-all">
                turtlerobotics@gmail.com
              </p>
            </div>

            {/* Button */}
            <button
              onClick={copyEmailToClipboard}
              className="w-full bg-gradient-basic text-gradient-foreground px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;
