/** About page — sourced from arescare-recovery/content/about.md */

export type AboutPillar = {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export type AboutMilestone = {
  date: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  achievements: string[];
};

export const aboutPage = {
  banner: {
    title: "About Arescare",
    subtitle:
      "A boutique healthcare advisory and services company — close to professionals, providers and patients since 2017.",
  },
  intro: {
    eyebrow: "Company history",
    title: "Empowering you with our choices",
    body: "Arescare was founded to provide services that only a boutique company could — close to professionals, service providers and patients at the same time. There are big names with huge reach. But do they know their customers as well as we do? We think not.",
  },
  pillars: [
    {
      title: "High-quality patient care and satisfaction",
      body: "Delivering exceptional patient care is paramount. Ensuring patients receive high-quality, compassionate and timely care leads to improved outcomes and satisfaction — critical for our reputation and success.",
      image: "/media/2024/07/national-cancer-institute-LlZCxFmljxI-unsplash.jpg",
      imageAlt: "Clinician supporting a patient",
    },
    {
      title: "Operational efficiency and compliance",
      body: "Efficient and compliant operations are essential for sustainability and growth — optimizing workflows, reducing waste and adhering to regulatory standards to minimize risk and enhance service delivery.",
      image: "/media/2024/07/nappy-WuYuMUnNRTI-unsplash.jpg",
      imageAlt: "Healthcare team collaborating",
    },
    {
      title: "Strategic growth and innovation",
      body: "To stay competitive in a dynamic industry, we focus on strategic growth and innovation — expanding services, adopting new technologies and exploring new opportunities.",
      image: "/media/2024/07/national-cancer-institute-roZ52cNNQuo-unsplash.jpg",
      imageAlt: "Medical research and innovation",
    },
  ] satisfies AboutPillar[],
  timeline: [
    {
      date: "Summer 2017",
      title: "The founding vision",
      body: "Arescare was founded with a vision to revolutionize healthcare delivery through innovative solutions and exceptional service. Starting with a single employee and an active partner, the company focused on establishing a solid foundation in healthcare consulting.",
      image: "/media/2024/07/online-marketing-hIgeoQjS_iE-unsplash.jpg",
      imageAlt: "Early team collaboration",
      achievements: [
        "Introduced core consulting services including operational efficiency and regulatory compliance",
        "Successfully onboarded the first client",
        "Generated early revenue for reinvestment into the business",
      ],
    },
    {
      date: "Nov 2019",
      title: "Expansion and service diversification",
      body: "After establishing a strong reputation, Arescare expanded to five specialized professionals, diversifying services across healthcare sectors — including technology integration and strategic planning.",
      image: "/media/2024/07/mykenzie-johnson-4qjxCUOc3iQ-unsplash.jpg",
      imageAlt: "Growing healthcare team",
      achievements: [
        "Grew the team to five employees",
        "Added technology integration and financial management services",
        "Completed high-impact technology implementations for major healthcare systems",
      ],
    },
    {
      date: "Aug 2022",
      title: "Financial excellence",
      body: "With a growing client base, Arescare expanded to fifteen employees, solidifying its position as a leading provider of healthcare consulting and placement — delivering comprehensive solutions and earning recognition for innovation and client satisfaction.",
      image: "/media/2024/07/mykenzie-johnson-5Hib8uDTm6g-unsplash.jpg",
      imageAlt: "Healthcare professionals at work",
      achievements: [
        "Expanded to fifteen employees across consulting, research and administration",
        "Secured contracts with leading healthcare organizations",
        "Completed major technology implementation projects",
      ],
    },
  ] satisfies AboutMilestone[],
  expertise: {
    eyebrow: "Expert healthcare advisors",
    title: "Navigating your healthcare horizon with professionals",
    roles: [
      "Healthcare consultants",
      "Clinical research coordinators",
      "Healthcare IT specialists",
      "Clinical operations managers",
      "Patient care coordinators",
      "Financial analysts",
      "Healthcare compliance officers",
    ],
  },
} as const;
