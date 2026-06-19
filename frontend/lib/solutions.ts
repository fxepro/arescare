import type { IconName } from "@/components/icon";
import type { Step } from "@/lib/content";
import type { Faq } from "@/components/faq-accordion";

export type ServiceOffering = {
  title: string;
  body: string;
  icon: IconName;
};

export type SolutionDetail = {
  slug: string;
  name: string;
  bannerTitle: string;
  bannerSubtitle: string;
  highlights: string[];
  lead: { title: string; body: string; image: string };
  offerings: ServiceOffering[];
  steps: Step[];
  faqs: Faq[];
};

export const telehealth: SolutionDetail = {
  slug: "telehealth",
  name: "Telehealth",
  bannerTitle: "Care that comes to you",
  bannerSubtitle:
    "See an experienced clinician by video from home — for the whole family. Skip the waiting room and the travel; all you need is an internet connection and a device with a camera.",
  highlights: ["General & specialist care", "Evenings & weekends", "HIPAA-secure"],
  lead: {
    title: "Your health, your way",
    body: "From routine check-ups to specialist consultations, our telehealth team of doctors, nurses and specialists is here when you need them. Flexible scheduling — including evenings and weekends — means care fits around your life, not the other way around. And every visit runs on an encrypted, HIPAA-compliant platform, so your records stay private and secure.",
    image: "/media/2024/07/pexels-edward-jenner-4031818.jpg",
  },
  offerings: [
    {
      title: "General consultations",
      body: "Talk with a primary care clinician about everyday health concerns, prescriptions and routine follow-ups.",
      icon: "stethoscope",
    },
    {
      title: "Specialist appointments",
      body: "Connect with cardiologists, dermatologists, mental health professionals and more — without the referral runaround.",
      icon: "users",
    },
    {
      title: "Disease management",
      body: "Ongoing support for chronic conditions such as diabetes, hypertension and asthma, between in-person visits.",
      icon: "heart",
    },
    {
      title: "Mental health services",
      body: "Compassionate support from licensed professionals for anxiety, depression and other mental health needs.",
      icon: "brain",
    },
    {
      title: "Pediatric care",
      body: "Friendly, reassuring care for your little ones — quick answers for the questions that can't wait.",
      icon: "baby",
    },
  ],
  steps: [
    { n: "01", title: "Sign up", body: "Create your account on our secure telehealth platform in minutes." },
    { n: "02", title: "Book a visit", body: "Choose the service you need and pick a time that works — evenings and weekends included." },
    { n: "03", title: "Connect", body: "Join by video at your appointment time and meet your clinician face to face." },
    { n: "04", title: "Receive care", body: "Get a diagnosis, treatment plan or prescription, sent straight to you." },
  ],
  faqs: [
    {
      q: "What is telehealth care?",
      a: "Telehealth is healthcare delivered through digital tools — video calls, phone and secure messaging — so you can consult a provider remotely, from home or anywhere with an internet connection.",
    },
    {
      q: "What services can I receive through telehealth?",
      a: "A wide range: general consultations, specialist appointments (cardiology, dermatology, mental health and more), chronic disease management, mental health services, pediatric care, follow-ups and prescription renewals.",
    },
    {
      q: "How do I prepare for a telehealth appointment?",
      a: "Find a quiet, well-lit space with a reliable connection, have your medical history, current medications and any questions ready, then log in a few minutes early and test your camera and microphone.",
    },
    {
      q: "Is telehealth care secure and private?",
      a: "Yes. Our platform uses advanced encryption, and our providers follow strict privacy laws including HIPAA, so your personal information and medical records stay confidential during and after every visit.",
    },
    {
      q: "Can telehealth replace in-person visits?",
      a: "It handles many concerns and consultations, but some conditions need a physical exam, lab work or procedures done in person. Your provider will let you know if an in-person visit is the better choice.",
    },
    {
      q: "How do I pay for telehealth services?",
      a: "Many insurance plans now cover telehealth much like in-person care. Check with your insurer about coverage, or contact us for payment options and any out-of-pocket costs.",
    },
  ],
};
