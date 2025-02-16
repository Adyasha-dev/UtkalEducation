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
    description:
      "Lorem ipsum dolor sit amet consecte tur adipiscing elit, sed do eiusmod tempor incididunt labore",
  },
  {
    id: 2,
    count: "59",
    title: "Year Of Experience",
    description:
      "Lorem ipsum dolor sit amet consecte tur adipiscing elit, sed do eiusmod tempor incididunt labore",
  },
  {
    id: 3,
    count: "15",
    title: "Year Of Experience",
    description:
      "Lorem ipsum dolor sit amet consecte tur adipiscing elit, sed do eiusmod tempor incididunt labore",
  },
  {
    id: 4,
    count: "100",
    title: "Year Of Experience",
    description:
      "Lorem ipsum dolor sit amet consecte tur adipiscing elit, sed do eiusmod tempor incididunt labore",
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
    question: "Why Our Clinic?",
    answer:
      "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
    img: faq12,
  },
  {
    id: 2,
    icon: <AddIcon />,
    question: "Qualified Experts",
    answer:
      "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
    img: faq13,
  },
  {
    id: 3,
    icon: <AddIcon />,
    question: "Quick Access to The Patient",
    answer:
      "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
    img: faq13,
  },
  {
    id: 4,
    icon: <AddIcon />,
    question: "How can an architect save you money on your home design?",
    answer:
      "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
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
