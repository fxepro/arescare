export type ProjectDetail = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  introduction: string;
  objectives: string[];
  methodology: string[];
  beneficiaries: string[];
};

export const projectsPage = {
  banner: {
    title: "Research projects",
    subtitle:
      "Investing in research with clarity — projects that integrate digital health, AI and data to revolutionize healthcare delivery and management.",
  },
  intro: {
    eyebrow: "Company mission, values & approach",
    title: "Investing in research with clarity, navigating with confidence",
    body: "Projects involving brainstorming, idea development, and extensive research seek to revolutionize healthcare and its management by integrating advanced digital health solutions — leading to better patient outcomes and more efficient delivery.",
    image: "/media/2023/09/mission-values-1.jpg",
    imageAlt: "Team collaborating on healthcare research",
  },
} as const;

export const advancingGenericDrugMl: ProjectDetail = {
  slug: "advancing-generic-drug-development-with-machine-learning",
  title: "Advancing Generic Drug Development with Machine Learning",
  summary:
    "Harness AI and machine learning to streamline generic drug development, accelerating the process and reducing costs.",
  image: "/media/2023/09/project-1.jpg",
  imageAlt: "Pharmaceutical research laboratory",
  introduction:
    "Generic drugs play a crucial role in affordable healthcare, but development can be lengthy and costly due to regulatory requirements and formulation challenges. This project harnesses AI and machine learning to streamline development, accelerate timelines and reduce costs.",
  objectives: [
    "Develop AI models to optimize drug formulation processes",
    "Use machine learning to predict and mitigate regulatory hurdles",
    "Enhance the efficiency of bioequivalence studies through AI",
    "Integrate AI tools into existing drug development workflows",
    "Conduct pilot studies to validate AI-enhanced processes",
    "Share findings and best practices with the pharmaceutical industry",
  ],
  methodology: [
    "Gather comprehensive datasets from existing generic drug development projects",
    "Develop AI and machine learning models to optimize formulation and predict regulatory challenges",
    "Integrate AI tools with pharmaceutical company workflows",
    "Conduct controlled pilot trials to test and refine processes",
    "Analyze data to assess improvements in development time, cost and regulatory success",
    "Disseminate results through publications, workshops and conferences",
  ],
  beneficiaries: [
    "Patients — improved access to affordable medications",
    "Pharmaceutical companies — reduced development costs and time to market",
    "Regulatory agencies — more predictable approval outcomes",
    "Healthcare providers — greater availability of cost-effective treatments",
    "Insurance companies — lower drug costs and increased savings",
    "Policy makers — data-driven insights for healthcare regulation",
  ],
};

export const enhancingManagedHealthcareAi: ProjectDetail = {
  slug: "enhancing-managed-healthcare-with-ai-driven-predictive-analytics",
  title: "Enhancing Managed Healthcare with AI-Driven Predictive Analytics",
  summary:
    "Develop AI-driven predictive tools to forecast patient needs, optimize resources and personalize care in managed healthcare.",
  image: "/media/2023/09/project-2.jpg",
  imageAlt: "Healthcare analytics dashboard",
  introduction:
    "The managed healthcare industry faces challenges balancing cost efficiency and high-quality patient care. Advances in AI and predictive analytics offer opportunities to transform healthcare management — forecasting patient needs, optimizing resource use and personalizing treatment plans.",
  objectives: [
    "Develop predictive models to anticipate patient healthcare needs",
    "Optimize resource allocation to reduce waste and improve care delivery",
    "Create personalized care plans based on predictive insights",
    "Integrate AI tools with existing healthcare management systems",
    "Conduct pilot studies in real-world settings",
    "Disseminate findings and best practices to stakeholders",
  ],
  methodology: [
    "Aggregate and anonymize datasets from partner healthcare organizations",
    "Employ machine learning to develop predictive models",
    "Integrate tools with healthcare IT for interoperability",
    "Conduct controlled trials in selected facilities",
    "Analyze impact on outcomes, cost savings and operational efficiency",
    "Share results through publications, workshops and training materials",
  ],
  beneficiaries: [
    "Patients — personalized care and improved outcomes",
    "Healthcare providers — better resource planning and decision support",
    "Healthcare facilities — reduced waste and improved efficiency",
    "Insurance companies — lower costs through optimized care delivery",
    "Care teams — actionable insights for proactive interventions",
  ],
};

export const innovatingChronicCareDigital: ProjectDetail = {
  slug: "innovating-chronic-care-management-through-digital-health-solutions",
  title: "Innovating Chronic Care Management through Digital Health Solutions",
  summary:
    "Integrate telehealth, remote monitoring and data analytics to enhance chronic condition management.",
  image: "/media/2023/09/project-3.jpg",
  imageAlt: "Patient using digital health tools",
  introduction:
    "Chronic diseases such as diabetes, heart disease and COPD require continuous management, placing burden on healthcare systems and patients. This project integrates telehealth, remote monitoring and data analytics to improve chronic care management, outcomes and costs.",
  objectives: [
    "Develop a comprehensive digital health platform for chronic care management",
    "Implement remote monitoring tools for continuous health tracking",
    "Utilize data analytics to personalize care plans and interventions",
    "Enhance patient engagement and self-management through digital tools",
    "Conduct pilot studies to evaluate platform effectiveness",
    "Share best practices with healthcare providers and policymakers",
  ],
  methodology: [
    "Design a platform integrating telehealth, remote monitoring and analytics",
    "Implement wearables and home health monitors for continuous data",
    "Use machine learning to analyze health data and personalize care",
    "Develop user-friendly applications for patient engagement",
    "Conduct pilot studies in selected healthcare settings",
    "Evaluate improvements in outcomes and cost savings",
  ],
  beneficiaries: [
    "Patients — improved chronic condition management and quality of life",
    "Healthcare providers — enhanced decision-making and reduced workload",
    "Healthcare facilities — increased efficiency and reduced costs",
    "Insurance companies — lower costs from reduced hospitalizations",
    "Caregivers — better tools to support patients",
    "Policy makers — data-driven insights for healthcare policy",
  ],
};

export const projectsBySlug: Record<string, ProjectDetail> = {
  [advancingGenericDrugMl.slug]: advancingGenericDrugMl,
  [enhancingManagedHealthcareAi.slug]: enhancingManagedHealthcareAi,
  [innovatingChronicCareDigital.slug]: innovatingChronicCareDigital,
};

export const projectSlugs = Object.keys(projectsBySlug);

export const projectsList = Object.values(projectsBySlug);

export function getProject(slug: string): ProjectDetail | undefined {
  return projectsBySlug[slug];
}
