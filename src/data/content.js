import { Zap, ShieldCheck, BarChart3, Users, Smartphone, Clock } from "lucide-react";

// ⚙️ CHANGE EVERYTHING HERE. Buyers only need to edit this file!
export const site = {
    name: "Sattar Tasks",

  nav: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    badge: "🚀 New: smart task suggestions",
    title: "Plan your work.",
    highlight: "Ship faster.",
    text: "LaunchKit helps small teams plan projects, track tasks and hit deadlines, all in one simple dashboard.",
    primaryBtn: "Start free trial",
    secondaryBtn: "See features",
    note: "No credit card required · 14-day free trial",
    stats: [
      { label: "Tasks done", value: "1,284" },
      { label: "Team members", value: "24" },
      { label: "Time saved", value: "38h" },
    ],
  },

  logosTitle: "Trusted by 2,000+ fast-growing teams",
  logos: ["Nimbus", "Orbitly", "Quantia", "Bluepeak", "Vertexa", "Hexaloop"],

  featuresSection: {
    label: "Features",
    title: "Everything your team needs",
    text: "Simple tools that save hours every week.",
  },
  features: [
    { icon: Zap, title: "Lightning fast", text: "Pages load instantly, so your team never waits." },
    { icon: Users, title: "Team friendly", text: "Invite your team, assign tasks and comment in real time." },
    { icon: BarChart3, title: "Clear reports", text: "See progress with beautiful charts and weekly summaries." },
    { icon: ShieldCheck, title: "Secure by default", text: "Your data is encrypted and backed up every day." },
    { icon: Smartphone, title: "Works everywhere", text: "Use it on desktop, tablet or phone. It just works." },
    { icon: Clock, title: "Save time", text: "Automate boring work with templates and reminders." },
  ],

  pricingSection: {
    label: "Pricing",
    title: "Simple, honest pricing",
    text: "Start free. Upgrade when your team grows.",
    save: "Save 20%",
  },
  plans: [
    {
      name: "Starter",
      desc: "For individuals and small side projects.",
      monthly: 0,
      yearly: 0,
      features: ["1 project", "Up to 3 team members", "Basic reports", "Email support"],
      button: "Get started",
      popular: false,
    },
    {
      name: "Pro",
      desc: "For growing teams that need more power.",
      monthly: 19,
      yearly: 15,
      features: ["Unlimited projects", "Up to 20 team members", "Advanced reports", "Priority support", "Custom templates"],
      button: "Start free trial",
      popular: true,
    },
    {
      name: "Business",
      desc: "For companies with advanced needs.",
      monthly: 49,
      yearly: 39,
      features: ["Everything in Pro", "Unlimited team members", "Admin controls", "SSO login", "Dedicated manager"],
      button: "Contact sales",
      popular: false,
    },
  ],

  testimonialsSection: {
    label: "Testimonials",
    title: "Loved by teams everywhere",
  },
  testimonials: [
    {
      name: "Sara Khan",
      role: "Product Manager, Orbitly",
      text: "We moved our whole team to LaunchKit in one day. Our weekly meetings are now 15 minutes instead of an hour.",
      initials: "SK",
    },
    {
      name: "James Miller",
      role: "Founder, Bluepeak",
      text: "Clean, fast and easy. My team actually enjoys using it, and that has never happened with a project tool before.",
      initials: "JM",
    },
    {
      name: "Ayesha Raza",
      role: "Designer, Nimbus",
      text: "The reports are beautiful. I can show progress to clients in seconds. Worth every penny.",
      initials: "AR",
    },
  ],

  faqSection: {
    label: "FAQ",
    title: "Questions? We have answers.",
  },
  faqs: [
    { q: "Is there a free plan?", a: "Yes! The Starter plan is free forever for 1 project and up to 3 team members." },
    { q: "Can I cancel anytime?", a: "Of course. You can cancel your plan with one click. No questions asked." },
    { q: "Do you offer a free trial?", a: "Yes, every paid plan comes with a 14-day free trial. No credit card needed." },
    { q: "Is my data safe?", a: "Your data is encrypted and backed up every day on secure servers." },
    { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade at any time from your settings." },
  ],

  cta: {
    title: "Ready to launch your next project?",
    text: "Join 2,000+ teams who plan smarter with LaunchKit.",
    button: "Start your free trial",
  },

  footer: {
    about: "The simple project tool for small teams who want to ship faster.",
    columns: [
      { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
      { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
      { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
    ],
    copyright: "All rights reserved.",
  },
};