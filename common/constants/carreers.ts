import { CareerProps } from "../types/careers";

export const CAREERS: CareerProps[] = [
  {
    translationKey: "lab_law",
    position: "Web Development",
    company: "LAB LAW",
    logo: "/images/careers/lab_law.jpg",
    location: "Yogyakarta, Indonesia ",
    location_type: "Remote",
    type: "Internship",
    start_date: "2024-08",
    end_date: "2025-01",
    industry: "Legal Practitioner",
    link: "https://www.linkedin.com/company/lac-law/",
    responsibilities: [
      "Developed a web application using Laravel integrated with MySQL database.",
      "Built and maintained core backend features including user authentication, Google account registration, database configuration, and password recovery, improving user security and accessibility.",
      "Ensured smooth frontend–backend integration while maintaining and enhancing website functionality to meet user needs.",
    ],
    isShow: true,
  },
  {
    translationKey: "inti",
    position: "Internal Audit",
    company: "PT Industri Telekomunikasi Indonesia (Persero)",
    logo: "/images/careers/inti.png",
    location: "Bandung, Indonesia",
    location_type: "Onsite",
    type: "Internship",
    start_date: "2024-07",
    end_date: "2024-08",
    industry: "Telecommunication",
    link: "https://www.inti.co.id/",
    responsibilities: [
      "Acted as a Full-Stack Developer in building the SIM-TLA (Sistem Informasi Monitoring Tindak Lanjut Audit) web application to support audit follow up monitoring within the company.",
      "Built frontend with HTML, CSS, and JavaScript and backend with PHP and MySQL.",
      "Implemented key features including authentication, audit assignment management, follow up report management, audit record tracking, and user management.",
      "Conducted testing and maintenance to ensure the system operates effectively in the company's audit process.",
    ],
    isShow: true,
  },
];

