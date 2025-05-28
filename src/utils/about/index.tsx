import {
  Certifications1,
  Certifications2,
  Certifications3,
  faq12,
  faq13,
  Team5,
  Team6,
  Team7,
  Team8,
} from "@/assest/about";
import { content1ArrType } from "@/types";
import AddIcon from "@mui/icons-material/Add";
export const content1Arr: content1ArrType[] = [
  {
    id: 1,
    count: "23",
    title: "Year Of Experience",
    description: "Providing top-tier education and training solutions.",
  },
  {
    id: 2,
    count: "59",
    title: "Year Of Experience",
    description: "Designed to meet industry standards and job market demands",
  },
  {
    id: 3,
    count: "15",
    title: "Year Of Experience",
    description: "Successfully upskilling professionals across various sectors",
  },
  {
    id: 4,
    count: "100",
    title: "Year Of Experience",
    description:
      "Ensuring learners achieve career success through expert guidance",
  },
];
import { TeacherArrType } from "@/types";
export const teacherArr: TeacherArrType[] = [
  {
    id: 1,
    img: Team5,
    name: "John Doe",
    designation: "Graphics Designer",
    phonenumber: 9978364748,
    email: "johndoe@example.com",
  },
  {
    id: 2,
    img: Team6,
    name: "Leo Doe",
    designation: "Graphics Designer",
    phonenumber: 99783647457,
    email: "leodeo@example.com",
  },
  {
    id: 3,
    img: Team7,
    name: " bhubnesh maharan",
    designation: "Graphics Designer",
    phonenumber: 99783647457,
    email: "leodeo@example.com",
  },
  {
    id: 4,
    img: Team8,
    name: "kirti biswal",
    designation: "Graphics Designer",
    phonenumber: 99783647457,
    email: "leodeo@example.com",
  },
];
import { faqArrType } from "@/types";
export const faqArr: faqArrType[] = [
  {
    id: 1,
    icon: <AddIcon />,
    question: "Why Choose Utkal Education?",
    answer:
      "At Utkal Education, we provide industry-aligned training programs designed to bridge the skill gap in the workforce. Our courses are curated by experts, ensuring quality education that enhances career growth.",
    img: faq12,
  },
  {
    id: 2,
    icon: <AddIcon />,
    question: "Who Are the Trainers?",
    answer:
      "Our trainers are certified professionals with years of experience in their respective fields. They bring practical insights, making learning more effective and engaging.",
    img: faq13,
  },
  {
    id: 3,
    icon: <AddIcon />,
    question: "How Can I Enroll in a Course?",
    answer:
      "Enrolling is simple! Visit our website, choose your preferred course, and follow the step-by-step enrollment process. You can also reach out to our support team for guidance.",
    img: faq13,
  },
  {
    id: 4,
    icon: <AddIcon />,
    question: " Will I Receive a Certification?",
    answer:
      "Yes! Upon successful completion of your course, you will receive a globally recognized certificate that enhances your professional credibility.",
    img: faq13,
  },
];
import { certificateArrType } from "@/types";
export const certificateArr: certificateArrType[] = [
  {
    id: 1,
    img: Certifications1,
    content: "Google Certificate",
  },
  {
    id: 2,
    img: Certifications2,
    content: "Microsoft Certificate",
  },
  {
    id: 3,
    img: Certifications3,
    content: "Amazon  Certificate",
  },
];
