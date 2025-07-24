import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedInstructorsSection from "../components/FeaturedInstructorsSection";
import CtaSection from "../components/CtaSection";
import teacher2 from "../assets/img/education/teacher-2.webp";
import teacher7 from "../assets/img/education/teacher-7.webp";
import teacher4 from "../assets/img/education/teacher-4.webp";
import teacher9 from "../assets/img/education/teacher-9.webp";
import courses4 from "../assets/img/education/courses-4.webp";

const instructors = [
  {
    image: teacher2,
    name: "دار ابن سينا",
    specialty: "سنتر تعليمي",
    description: `
دار "ابن سينا" هو مركز تعليمي متخصص في تقديم شرح ودروس مخصصة لطلاب الثانوية العامة. يسعى المركز إلى تقديم تعليم عالي الجودة من خلال...
`,
    students: "2.1k",
    rating: 4.8,
    courses: 18,
    socialLinks: [
      { icon: "bi-telephone", url: "#" },
      { icon: "bi-facebook", url: "#" },
    ],
  },
  {
    image: teacher7,
    name: "ساره احمد",
    specialty: "مدرسة لغة انجليزية",
    description:
      "خبرة 10 أعوام في تدريس اللغة الإنجليزية، متخصصة في تدريس المحادثة والقواعد. حاصلة على شهادة TOEFL.",
    students: "3.5k",
    rating: 4.9,
    courses: 24,
    socialLinks: [
      { icon: "bi-telephone", url: "#" },
      { icon: "bi-facebook", url: "#" },
    ],
  },
  {
    image: teacher4,
    name: "محمد علي",
    specialty: "مدرس العلوم",
    description: `خبرة 12 عام في تدريس العلوم، متخصص في تدريس الفيزياء والكيمياء. حاصل على دكتوراه في التربية العلمية.      `,
    students: "1.8k",
    rating: 4.6,
    courses: 15,
    socialLinks: [
      { icon: "bi-telephone", url: "#" },
      { icon: "bi-facebook", url: "#" },
    ],
  },
  {
    image: teacher9,
    name: "فاطمة حسن",
    specialty: "مدرسة اللغة العربية",
    description:
      "خبرة 8 أعوام في تدريس اللغة العربية، متخصصة في تدريس النحو والصرف. حاصلة على ماجستير في اللغة العربية.",
    students: "2.9k",
    rating: 4.7,
    courses: 21,
    socialLinks: [
      { icon: "bi-telephone", url: "#" },
      { icon: "bi-facebook", url: "#" },
    ],
  },
];

const ctaStats = [
  { value: 15000, suffix: "+", label: "Students Enrolled" },
  { value: 150, suffix: "+", label: "Courses Available" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

const ctaFeatures = [
  "تطبيقات تعليمية مخصصة للمعلمين مع ميزات أمان متقدمة ومنع التقاط الشاشة وتقييد الأجهزة.",
  "مواقع أنيقة ومتجاوبة للمدارس والمعلمين، مع بوابات الطلاب وميزات تتبع أولياء الأمور.",
  "باقات هوية احترافية تشمل تصميم الشعار والملصقات وأصول التواصل الاجتماعي.",
  "أنظمة شاملة لتتبع الحضور والدرجات ومراقبة الغياب مع لوحات تحكم قوية.",
  "دعم مستمر، إصلاح الأخطاء، التحديثات، إدارة المحتوى، وخدمات النسخ الاحتياطي",
];

const ctaFloatingCards = [
  {
    className: "student-card",
    icon: "bi-person-check-fill",
    number: "2,450",
    label: "New Students This Month",
  },
  {
    className: "course-card",
    icon: "bi-play-circle-fill",
    number: "50+",
    label: "Hours of Content",
  },
];

const Home = () => {
  return (
    <main className="main">
      <HeroSection />
      <FeaturedInstructorsSection instructors={instructors} />
      <CtaSection
        stats={ctaStats}
        features={ctaFeatures}
        image={courses4}
        floatingCards={ctaFloatingCards}
      />
    </main>
  );
};

export default Home;
