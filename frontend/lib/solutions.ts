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
  leadEyebrow: string;
  lead: { title: string; body: string; image: string };
  leadImageAlt: string;
  offeringsEyebrow?: string;
  offeringsTitle: string;
  offeringsIntro?: string;
  offerings: ServiceOffering[];
  stepsEyebrow?: string;
  stepsTitle: string;
  steps: Step[];
  faqEyebrow?: string;
  faqTitle: string;
  faqIntro?: string;
  faqs: Faq[];
  primaryCtaLabel: string;
  ctaTitle: string;
  ctaBody: string;
};

export const telehealth: SolutionDetail = {
  slug: "telehealth",
  name: "Telehealth",
  bannerTitle: "Care that comes to you",
  bannerSubtitle:
    "Access top-quality healthcare as conveniently as possible — comprehensive medical care right to your fingertips, from home or wherever you are.",
  highlights: ["General & specialist care", "Evenings & weekends", "HIPAA-secure"],
  leadEyebrow: "Your health, your way",
  lead: {
    title: "Join thousands who made healthcare more accessible",
    body: "Skip the waiting rooms and travel time. Consult experienced healthcare professionals from home — whether you live in a bustling city or a remote area, all you need is an internet connection and a device with a camera. From routine check-ups to specialist consultations, our team of doctors, nurses and specialists provides the care you deserve. Flexible scheduling includes evenings and weekends, and our platform uses advanced encryption to keep your records confidential and secure.",
    image: "/media/2024/07/pexels-edward-jenner-4031818.jpg",
  },
  leadImageAlt: "A patient on a telehealth video visit",
  offeringsTitle: "What you can do from home",
  offeringsIntro:
    "One platform, the whole family — from quick questions to ongoing specialist support.",
  offerings: [
    {
      title: "General consultations",
      body: "Speak with a primary care physician for general health concerns, prescriptions and routine follow-ups.",
      icon: "stethoscope",
    },
    {
      title: "Specialist appointments",
      body: "Access cardiologists, dermatologists, mental health professionals and more.",
      icon: "users",
    },
    {
      title: "Disease management",
      body: "Ongoing support for chronic conditions such as diabetes, hypertension and asthma.",
      icon: "heart",
    },
    {
      title: "Mental health services",
      body: "Support from licensed professionals for anxiety, depression and other mental health needs.",
      icon: "brain",
    },
    {
      title: "Pediatric care",
      body: "Dedicated telehealth services to support your child's health and well-being.",
      icon: "baby",
    },
  ],
  stepsTitle: "From sign-up to seen in four steps",
  steps: [
    { n: "01", title: "Sign up", body: "Create your account on our secure telehealth platform." },
    { n: "02", title: "Book an appointment", body: "Choose the service you need and select a convenient time." },
    { n: "03", title: "Connect", body: "Log in at your appointment time and connect via video call." },
    { n: "04", title: "Receive care", body: "Discuss your concerns, receive a diagnosis and get a treatment plan or prescription as needed." },
  ],
  faqTitle: "Telehealth questions, answered",
  faqIntro: "Everything you need to feel confident before your first visit.",
  faqs: [
    {
      q: "What is telehealth care?",
      a: "Telehealth is healthcare delivered through digital tools — video calls, phone and secure messaging — so you can consult a provider remotely from home or anywhere with an internet connection.",
    },
    {
      q: "What services can I receive through telehealth?",
      a: "General consultations, specialist appointments, chronic disease management, mental health services, pediatric care, follow-ups and prescription renewals.",
    },
    {
      q: "How do I prepare for a telehealth appointment?",
      a: "Find a quiet, well-lit space with a reliable connection, have your medical history and medications ready, and log in a few minutes early to test your camera and microphone.",
    },
    {
      q: "Is telehealth care secure and private?",
      a: "Yes. Our platform uses advanced encryption, and our providers follow strict privacy laws including HIPAA.",
    },
    {
      q: "Can telehealth replace in-person visits?",
      a: "It handles many concerns, but some conditions need a physical exam, lab work or in-person procedures. Your provider will advise when an in-person visit is best.",
    },
    {
      q: "How do I pay for telehealth services?",
      a: "Many insurance plans cover telehealth like in-person care. Check with your insurer or contact us for payment options.",
    },
  ],
  primaryCtaLabel: "Book a visit",
  ctaTitle: "Ready to see a clinician from home?",
  ctaBody: "Book a telehealth visit today, or talk to a care advisor about the right plan for your family.",
};

export const chronicCareManagement: SolutionDetail = {
  slug: "chronic-care-management",
  name: "Chronic Care Management",
  bannerTitle: "Support for lifelong wellness",
  bannerSubtitle:
    "Managing a chronic condition can be challenging — you don't have to do it alone. Continuous support, resources and personalized care to help you live your healthiest life.",
  highlights: ["Personalized care plans", "Regular check-ins", "Multi-disciplinary team"],
  leadEyebrow: "Comprehensive support",
  lead: {
    title: "Continuous care for chronic conditions",
    body: "Our Chronic Care Management services support individuals with diabetes, hypertension, heart disease, COPD and more. Every patient is unique — our team develops customized care plans tailored to your needs, lifestyle and goals. Regular check-ins, remote monitoring and access to specialists including dietitians, pharmacists and mental health professionals address all aspects of your well-being. Our patient portal gives 24/7 access to records, care plans and your care team.",
    image: "/media/2024/07/matheus-ferrero-yfmjALh1S6s-unsplash.jpg",
  },
  leadImageAlt: "A care team supporting a patient with chronic care management",
  offeringsTitle: "Our services",
  offerings: [
    {
      title: "Disease management",
      body: "Personalized care for diabetes, hypertension, heart disease, COPD and more.",
      icon: "heart",
    },
    {
      title: "Medication management",
      body: "Assistance with medication adherence, prescription refills and side effect management.",
      icon: "pill",
    },
    {
      title: "Nutritional counseling",
      body: "Tailored dietary plans and guidance from registered dietitians to support your health goals.",
      icon: "stethoscope",
    },
    {
      title: "Lifestyle coaching",
      body: "Strategies for sustainable changes including exercise, stress management and smoking cessation.",
      icon: "clock",
    },
    {
      title: "Mental health support",
      body: "Access to mental health professionals for counseling, therapy and emotional support.",
      icon: "brain",
    },
  ],
  stepsTitle: "Take control of your health in five steps",
  steps: [
    { n: "01", title: "Enrollment", body: "Sign up through our website or contact our patient services team." },
    { n: "02", title: "Initial assessment", body: "Discuss your medical history, current health status and care goals." },
    { n: "03", title: "Personalized care plan", body: "Work with our team to develop a comprehensive plan tailored to you." },
    { n: "04", title: "Ongoing support", body: "Receive continuous support through check-ins, remote monitoring and your care team." },
    { n: "05", title: "Empowerment", body: "Access resources and tools to manage your condition and improve your quality of life." },
  ],
  faqTitle: "Chronic care questions, answered",
  faqIntro: "What to expect when you enroll in Chronic Care Management.",
  faqs: [
    {
      q: "What are Chronic Care Management services?",
      a: "CCM provides continuous support for individuals with chronic conditions such as diabetes, hypertension, heart disease and COPD — including personalized care plans, regular monitoring, medication management, nutritional counseling, lifestyle coaching and access to a multi-disciplinary team.",
    },
    {
      q: "How do I enroll in Chronic Care Management?",
      a: "Sign up through our website or contact our patient services team. You'll schedule an initial consultation to discuss your medical history, current health status and care goals so we can develop a personalized plan.",
    },
    {
      q: "What conditions are covered?",
      a: "CCM supports diabetes, hypertension, heart disease, COPD, asthma, arthritis, chronic kidney disease, and depression or anxiety as part of a comprehensive care plan.",
    },
    {
      q: "What can I expect from my initial assessment?",
      a: "A healthcare professional reviews your medical history, discusses your current health status and goals, and uses that information to create a personalized care plan with monitoring, medication management and lifestyle recommendations.",
    },
    {
      q: "How often will I have check-ins with my care team?",
      a: "Frequency depends on your care plan — typically monthly check-ins via phone, video or in-person visits, adjusted to your needs.",
    },
    {
      q: "Are Chronic Care Management services covered by insurance?",
      a: "Many insurance plans, including Medicare, cover CCM. Coverage varies — check with your insurer or ask our patient services team for help understanding your benefits.",
    },
  ],
  primaryCtaLabel: "Enroll today",
  ctaTitle: "Ready for steady support with your condition?",
  ctaBody: "Talk to our patient services team about Chronic Care Management — we'll help you get started.",
};

export const managedHealthcare: SolutionDetail = {
  slug: "managed-healthcare",
  name: "Managed & Packaged Care",
  bannerTitle: "Your health. Your plan. Your peace of mind.",
  bannerSubtitle:
    "Healthcare should be accessible, affordable and straightforward. A seamless, all-inclusive approach to managing your health — the best care without navigating complex systems alone.",
  highlights: ["All-inclusive packages", "Dedicated care managers", "Transparent pricing"],
  leadEyebrow: "Managed and packaged care",
  lead: {
    title: "A comprehensive bundle tailored to you",
    body: "Our healthcare packages cover a wide range of services — from routine check-ups to specialized treatments — with no hidden costs. Dedicated care managers handle scheduling, referrals and follow-ups so you receive the right care at the right time. Personalized plans include preventive care, chronic disease management and wellness programs. Transparent pricing helps you manage your healthcare budget while enjoying significant savings through our network of trusted providers.",
    image: "/media/2024/07/national-cancer-institute-0YBIMOqQzt0-unsplash.jpg",
  },
  leadImageAlt: "A patient reviewing a coordinated healthcare plan",
  offeringsTitle: "Our services",
  offerings: [
    {
      title: "Preventive care",
      body: "Regular health screenings, vaccinations and wellness check-ups to keep you healthy.",
      icon: "calendar",
    },
    {
      title: "Disease management",
      body: "Ongoing support for chronic conditions such as diabetes, hypertension and heart disease.",
      icon: "heart",
    },
    {
      title: "Specialist consultations",
      body: "Access to cardiologists, dermatologists, orthopedic surgeons and more.",
      icon: "users",
    },
    {
      title: "Mental health services",
      body: "Counseling and therapy to support your mental and emotional well-being.",
      icon: "brain",
    },
    {
      title: "Lifestyle counseling",
      body: "Personalized advice on diet, exercise and lifestyle changes for overall health.",
      icon: "clock",
    },
  ],
  stepsTitle: "Experience seamless care in five steps",
  steps: [
    { n: "01", title: "Enrollment", body: "Sign up through our website or contact our patient services team." },
    { n: "02", title: "Health assessment", body: "Evaluate your medical history, current status and future health goals." },
    { n: "03", title: "Custom package", body: "Receive a tailored healthcare package with all necessary services." },
    { n: "04", title: "Care coordination", body: "Your care manager handles scheduling, referrals and follow-ups." },
    { n: "05", title: "Ongoing support", body: "Benefit from monitoring, regular check-ins and 24/7 access to professionals." },
  ],
  faqTitle: "Packaged care questions, answered",
  faqIntro: "How managed and packaged healthcare works at Arescare.",
  faqs: [
    {
      q: "What are Packaged Healthcare Services?",
      a: "A comprehensive bundle of medical services tailored to your needs — typically including preventive care, chronic disease management, specialist consultations, mental health services and lifestyle counseling, coordinated through a single streamlined plan.",
    },
    {
      q: "How do I enroll?",
      a: "Visit our website or contact patient services. You'll schedule an initial health assessment, and we'll create a customized healthcare package based on your profile.",
    },
    {
      q: "What are the benefits?",
      a: "Comprehensive all-inclusive packages, simplified coordination through a dedicated care manager, transparent upfront pricing and personalized plans tailored to your health profile.",
    },
    {
      q: "Are Packaged Services covered by insurance?",
      a: "Coverage varies by provider and plan. Many plans offer coverage — check with your insurer or ask our patient services team to help determine your benefits.",
    },
    {
      q: "Can I customize my healthcare package?",
      a: "Yes. During your initial assessment we create a personalized plan with the services most relevant to your goals, and you can adjust your package as your needs change.",
    },
    {
      q: "How does care coordination work?",
      a: "You're assigned a dedicated care manager who schedules appointments, coordinates with specialists, manages follow-ups and acts as your primary point of contact — making your experience seamless and stress-free.",
    },
  ],
  primaryCtaLabel: "Get your package",
  ctaTitle: "Ready for one coordinated plan?",
  ctaBody: "Talk to a care advisor about managed and packaged healthcare — we'll build a plan around your needs.",
};

export const internationalDrugs: SolutionDetail = {
  slug: "international-drugs",
  name: "Medication Access",
  bannerTitle: "Affordable healthcare. Quality medications.",
  bannerSubtitle:
    "Legal import and export of generic drugs — cost-effective alternatives to brand-name medications so you receive the treatments you need without breaking the bank.",
  highlights: ["Up to 80% savings", "Quality verified", "Fully compliant"],
  leadEyebrow: "Peace of mind",
  lead: {
    title: "Same benefits, significantly lower cost",
    body: "Generic drugs offer the same therapeutic benefits as brand-name medications at a fraction of the cost — save up to 80% through our legal import services. We source from reputable manufacturers worldwide with rigorous quality control. Our compliant process handles all paperwork and logistics. From chronic conditions to specialty treatments, simply provide your prescription and we take care of sourcing and delivery. Our customer service team is always available to assist you.",
    image: "/media/2024/07/myriam-zilles-KltoLK6Mk-g-unsplash.jpg",
  },
  leadImageAlt: "Affordable generic medications",
  offeringsTitle: "Our services",
  offerings: [
    {
      title: "Prescription medications",
      body: "Access a wide range of generic drugs for various health conditions.",
      icon: "pill",
    },
    {
      title: "Chronic disease medications",
      body: "Affordable medications for ongoing conditions such as diabetes and asthma.",
      icon: "heart",
    },
    {
      title: "Specialty drugs",
      body: "Cost-effective alternatives for expensive specialty treatments.",
      icon: "research",
    },
    {
      title: "Acute care",
      body: "Generic options for short-term illnesses and acute conditions.",
      icon: "stethoscope",
    },
    {
      title: "Custom orders",
      body: "Special requests for medications not readily available in your area.",
      icon: "package",
    },
  ],
  stepsTitle: "From prescription to delivery in five steps",
  steps: [
    { n: "01", title: "Consultation", body: "Contact our team to discuss your medication needs and obtain a quote." },
    { n: "02", title: "Prescription submission", body: "Provide a valid prescription from your healthcare provider." },
    { n: "03", title: "Sourcing and verification", body: "We source from approved manufacturers and verify quality." },
    { n: "04", title: "Delivery", body: "Medications ship to your door with full tracking and support." },
    { n: "05", title: "Ongoing support", body: "Our team answers questions and assists with future orders." },
  ],
  faqTitle: "Medication access questions, answered",
  faqIntro: "Safety, savings and how ordering works.",
  faqs: [
    {
      q: "What are generic drugs?",
      a: "Medications with the same active ingredients, strength, dosage form and route of administration as brand-name drugs — equivalent in quality, safety and efficacy, typically at lower cost.",
    },
    {
      q: "Is it legal to import generic drugs?",
      a: "Yes, when the process complies with all relevant laws and regulations. We ensure our import services adhere to legal requirements so you receive safe, legally obtained medications.",
    },
    {
      q: "How do I know the drugs are safe and effective?",
      a: "We source from reputable manufacturers that meet stringent quality standards. Rigorous quality control ensures medications are safe, effective and meet regulatory requirements.",
    },
    {
      q: "How can I order through your service?",
      a: "Contact our team for a consultation, submit a valid prescription, we source and verify the medication, then ship it to you with tracking and support.",
    },
    {
      q: "How much can I save?",
      a: "You can save up to 80% compared to brand-name drugs. Exact savings depend on the specific medication and your insurance coverage, if applicable.",
    },
    {
      q: "What if I need a medication that isn't readily available?",
      a: "We offer custom order services. Contact us with your request and we'll work to source it from our network of approved manufacturers.",
    },
  ],
  primaryCtaLabel: "Request a quote",
  ctaTitle: "Ready to access affordable medications?",
  ctaBody: "Contact our team to discuss your prescription needs — we'll walk you through every step.",
};

export const healthcareResearch: SolutionDetail = {
  slug: "healthcare-research",
  name: "Healthcare Research",
  bannerTitle: "Pioneering research for the future of healthcare",
  bannerSubtitle:
    "Groundbreaking research is the cornerstone of medical advancement. Comprehensive research services to support innovative solutions, cutting-edge treatments and improved patient outcomes.",
  highlights: ["Clinical trials", "Regulatory compliance", "Publication support"],
  leadEyebrow: "Research solutions",
  lead: {
    title: "Thorough, accurate and impactful research",
    body: "Our team of skilled researchers, clinicians and scientists brings extensive expertise to your projects. A multidisciplinary approach ensures research that is thorough and impactful. Services are tailored whether you're conducting clinical trials, epidemiological studies or health services research. State-of-the-art facilities support advanced methodologies, and our team navigates regulatory requirements including ethical guidelines and data protection — so you can focus on driving innovation with confidence.",
    image: "/media/2024/07/national-cancer-institute-701-FJcjLAQ-unsplash.jpg",
  },
  leadImageAlt: "Healthcare researchers collaborating in a lab",
  offeringsTitle: "Our services",
  offerings: [
    {
      title: "Clinical trials management",
      body: "Support for all phases — study design and patient recruitment through data analysis and regulatory submission.",
      icon: "research",
    },
    {
      title: "Epidemiological studies",
      body: "Analysis of disease patterns, risk factors and health outcomes to inform public health strategies.",
      icon: "users",
    },
    {
      title: "Health services research",
      body: "Evaluation of delivery systems, patient outcomes and cost-effectiveness to improve quality of care.",
      icon: "heart",
    },
    {
      title: "Biostatistics and data analysis",
      body: "Advanced statistical analysis and data management for robust, reliable findings.",
      icon: "research",
    },
    {
      title: "Regulatory consulting",
      body: "Guidance on regulatory compliance, ethical considerations and submission processes.",
      icon: "shield",
    },
    {
      title: "Publication support",
      body: "Assistance with manuscript preparation, peer review and publication in reputable journals.",
      icon: "calendar",
    },
  ],
  stepsTitle: "Transform your research in five steps",
  steps: [
    { n: "01", title: "Consultation", body: "Discuss your research needs and objectives with our team." },
    { n: "02", title: "Proposal development", body: "Develop a detailed proposal including study design, methodology and budget." },
    { n: "03", title: "Project execution", body: "Our team manages all aspects from initiation to completion." },
    { n: "04", title: "Analysis and reporting", body: "Comprehensive data analysis and detailed reports of your findings." },
    { n: "05", title: "Ongoing support", body: "Continued collaboration to maximize the impact of your research." },
  ],
  faqTitle: "Research services questions, answered",
  faqIntro: "How we partner with organizations on healthcare research.",
  faqs: [
    {
      q: "What types of research services do you offer?",
      a: "Clinical trials management, epidemiological studies, health services research, biostatistics and data analysis, regulatory consulting and publication support.",
    },
    {
      q: "How can your research services benefit my company?",
      a: "Access to skilled researchers, tailored solutions, streamlined project management, regulatory compliance assurance and collaboration with industry experts and academic institutions.",
    },
    {
      q: "How do I get started with a research project?",
      a: "Contact us for a consultation, we'll develop a detailed proposal, execute the project, provide analysis and reporting, and offer ongoing support to maximize impact.",
    },
    {
      q: "What makes your research services different?",
      a: "Multidisciplinary expertise, state-of-the-art facilities, strict regulatory compliance, customized research plans and a collaborative network of industry and academic partners.",
    },
    {
      q: "Can you help with regulatory compliance?",
      a: "Yes. Our team navigates healthcare regulations and ensures research complies with ethical guidelines and data protection laws, with consulting on compliance and submission processes.",
    },
    {
      q: "What support do you offer for publishing research?",
      a: "Manuscript preparation, peer review guidance, publication strategy and advice on journal selection, plus support disseminating findings to the scientific community.",
    },
  ],
  primaryCtaLabel: "Start a project",
  ctaTitle: "Ready to advance your research?",
  ctaBody: "Talk to our research team about your objectives — we'll design a plan that fits.",
};

export const consultingPlacement: SolutionDetail = {
  slug: "consulting-placement",
  name: "Consulting & Placement",
  bannerTitle: "The right talent. The right solutions.",
  bannerSubtitle:
    "Healthcare organizations succeed on the expertise of their workforce. Connect with top-tier talent and strategic consulting to optimize operations — whether filling critical roles or enhancing efficiency.",
  highlights: ["Executive search", "Clinical staffing", "Strategic advisory"],
  leadEyebrow: "Your partner in healthcare talent",
  lead: {
    title: "Empower your organization with the right people",
    body: "Our network includes highly qualified physicians, nurses, administrators and specialized consultants — rigorously screened for skills and cultural fit. Experienced consultants deliver tailored solutions for operational efficiency, regulatory compliance, patient care and technology integration. Our efficient placement process handles sourcing, interviewing, onboarding and follow-up so you can focus on delivering exceptional care. We provide continuous support with regular check-ins and performance evaluations.",
    image: "/media/2024/07/tim-gouw-bwki71ap-y8-unsplash.jpg",
  },
  leadImageAlt: "Healthcare professionals in a consulting meeting",
  offeringsTitle: "Our services",
  offerings: [
    {
      title: "Consultant placement",
      body: "Temporary and permanent placement in operations, IT, compliance and patient care.",
      icon: "users",
    },
    {
      title: "Executive search",
      body: "Recruitment of senior leaders who drive strategic initiatives and organizational success.",
      icon: "users",
    },
    {
      title: "Clinical staffing",
      body: "Placement of physicians, nurses and allied health professionals for clinical needs.",
      icon: "stethoscope",
    },
    {
      title: "Administrative support",
      body: "Recruitment of administrative and support staff for smooth, efficient operations.",
      icon: "package",
    },
    {
      title: "Project-based consulting",
      body: "Short-term engagements for technology implementation, compliance and specific challenges.",
      icon: "research",
    },
    {
      title: "Strategic advisory",
      body: "Long-term partnerships for ongoing strategic guidance and organizational growth.",
      icon: "calendar",
    },
  ],
  stepsTitle: "How we work with your organization",
  steps: [
    { n: "01", title: "Contact us", body: "Reach out via our website or email to express your interest." },
    { n: "02", title: "Initial consultation", body: "Discuss your consulting or placement needs in detail." },
    { n: "03", title: "Needs assessment", body: "We assess requirements to understand roles and qualifications needed." },
    { n: "04", title: "Service proposal", body: "Receive a tailored proposal outlining scope, timeline and costs." },
    { n: "05", title: "Engagement", body: "Begin consulting or placement with ongoing collaboration and check-ins." },
  ],
  faqTitle: "Consulting and placement questions, answered",
  faqIntro: "How we match talent and strategy to healthcare organizations.",
  faqs: [
    {
      q: "What types of consulting services do you offer?",
      a: "Operational efficiency, regulatory compliance, technology integration, patient care improvement, strategic planning and financial management.",
    },
    {
      q: "How does your placement process work?",
      a: "Consultation and needs assessment, candidate sourcing and screening, coordinated interviews and selection, placement and onboarding support, then ongoing follow-up and performance evaluations.",
    },
    {
      q: "What qualifications do your consultants have?",
      a: "Highly experienced professionals with advanced degrees and certifications, extensive hands-on experience in healthcare management, operations and strategy.",
    },
    {
      q: "How do you ensure candidates are a good fit?",
      a: "Detailed skills assessments, cultural fit evaluation, reference and background checks, and relevant pre-employment testing.",
    },
    {
      q: "What industries or sectors do you specialize in?",
      a: "Hospitals and health systems, primary and specialty clinics, long-term care, pharmaceutical and biotech, healthcare technology and public health organizations.",
    },
    {
      q: "How do I get started?",
      a: "Contact us for an initial consultation. We'll assess your needs, provide a tailored proposal and begin engagement with ongoing support throughout.",
    },
  ],
  primaryCtaLabel: "Talk to our team",
  ctaTitle: "Need the right people or the right strategy?",
  ctaBody: "Contact our consulting and placement team — we'll help you find talent and solutions that fit.",
};

export const solutionsBySlug: Record<string, SolutionDetail> = {
  telehealth,
  "chronic-care-management": chronicCareManagement,
  "managed-healthcare": managedHealthcare,
  "international-drugs": internationalDrugs,
  "healthcare-research": healthcareResearch,
  "consulting-placement": consultingPlacement,
};

export const solutionSlugs = Object.keys(solutionsBySlug);

export function getSolution(slug: string): SolutionDetail | undefined {
  return solutionsBySlug[slug];
}
